import {sign as generateToken, verify as verifyJWT} from 'jsonwebtoken';
import {jwtSecret} from '../config/app';
interface TokenData {
  userId: string;
  userType: string;
}
export class AuthService {
  public generateAccessToken(payload: TokenData): string {
    const accessToken = generateToken(
      {
        userId: payload.userId,
        userType: payload.userType,
      },
      jwtSecret
    );
    return accessToken;
  }
  public verifyToken(accessToken: string): TokenData {
    return verifyJWT(accessToken, jwtSecret) as TokenData;
  }
}
