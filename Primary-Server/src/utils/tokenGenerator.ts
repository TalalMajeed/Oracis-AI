import jwt, { SignOptions } from 'jsonwebtoken';
import { redisClient } from '../config/redis';

export const generateToken = (payload: any): string => {
  const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN || '24h') as jwt.SignOptions['expiresIn']
  };
  return jwt.sign(payload, process.env.JWT_SECRET!, options);
};

export const invalidateToken = async (token: string): Promise<void> => {
  try {
    const decoded = jwt.decode(token) as { exp: number };
    const ttl = decoded.exp - Math.floor(Date.now() / 1000);
    
    if (ttl > 0) {
      await redisClient.set(`bl_${token}`, '1', {
        EX: ttl
      });
    }
  } catch (error) {
    console.error('Error invalidating token:', error);
    throw error;
  }
};

export const refreshToken = async (oldToken: string): Promise<string> => {
  try {
    const decoded = jwt.verify(oldToken, process.env.JWT_SECRET!) as any;
    delete decoded.iat;
    delete decoded.exp;
    
    const newToken = generateToken(decoded);
    await invalidateToken(oldToken);
    
    return newToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
}; 