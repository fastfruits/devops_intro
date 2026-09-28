import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-change-in-prod';
const JWT_EXPIRES_IN = '1d';

export const jwttoken = {
    sign: (payload) => {
        try {
            return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
        } catch (e) {
            logger.error('Failed to auth token', e)
            throw new Error('Failed to auth token');
        }
    },
    verify: (token) => {
        try {
            return jwt.verify(token, JWT_SECRET)
        } catch (e) {
            logger.error('Failed to auth token', e);
            throw new Error('Failed to auth token')
        }
    }
}