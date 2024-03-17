import bcrypt from 'bcrypt';
import {Request, Response} from 'express';
import {sign as generateJWT} from 'jsonwebtoken';
import {jwtSecret} from '../../config';
import {UsersRepository} from '../../repositories/user.repository';
import {
  BadRequestResponse,
  InternalErrorResponse,
  NotFoundResponse,
  SuccessResponse,
} from '../../util/apiResponse';
import {AppError} from '../../util/app-error';
export class AuthController {
  private static userService = new UsersRepository();

  public static async login(req: Request, res: Response) {
    try {
      const {email, password} = req.body;
      const user = await AuthController.userService.getUserByEmail(email);
      if (!user) return new NotFoundResponse(res, 'user not found').send();
      const compare = await bcrypt
        .compare(password, user.password)
        .catch(() => false);
      if (!compare)
        return new BadRequestResponse(res, 'Password Incorrect').send();
      const accessToken = generateJWT(
        {
          user: user.id,
          user_type: user.user_type,
          email: user.email,
          phone: user.phone,
        },
        jwtSecret,
        {expiresIn: '10h'}
      );
      delete user.password;
      return new SuccessResponse(res, 'login success', {
        user: user,
        access_token: accessToken,
      }).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
}
