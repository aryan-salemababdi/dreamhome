import { hashPassword, verifyPassword } from "./auth";
import { hash, compare } from 'bcryptjs';

jest.mock('bcryptjs', () => ({
    hash: jest.fn(),
    compare: jest.fn(),
}));

describe('Authentication functions', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('hashPassword function', () => {
        it('should hash the password', async () => {
            const mockHashedPassword = 'hashedPassword';
            (hash as jest.Mock).mockResolvedValueOnce(mockHashedPassword);

            const password = 'mySecretPassword';
            const hashedPassword = await hashPassword(password);

            expect(hash).toHaveBeenCalledWith(password, 12);
            expect(hashedPassword).toBe(mockHashedPassword);
        });
    });

    describe('verifyPassword function', () => {
        it('should validate the password', async () => {
            const password = 'mySecretPassword';
            const hashedPassword = 'hashedPassword';
            const mockIsValid = true;
            (compare as jest.Mock).mockResolvedValueOnce(mockIsValid);

            const isValid = await verifyPassword(password, hashedPassword);

            expect(compare).toHaveBeenCalledWith(password, hashedPassword);
            expect(isValid).toBe(mockIsValid);
        });
    });
});
