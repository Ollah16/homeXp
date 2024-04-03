import { getFormData } from '../actions/authaction';
import { getUserModel } from '../model/schema';

jest.mock('../model/schema', () => {
    const mockUser = {
        findOne: jest.fn(),
    };

    return {
        __esModule: true,
        getUserModel: jest.fn(() => mockUser),
    };
});

jest.mock('../actions/authaction', () => {
    return {
        getFormData: jest.fn()
    }
})

describe('Test getFormData function', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return an error: 'user exists'", async () => {

        const mockFindOne = jest.fn();

        getUserModel().findOne = mockFindOne;
        const error = 'user exists'

        mockFindOne.mockReturnValueOnce(error)

        const formData = {
            unit: 'TestUnit',
            email: 'test@example.com',
            password: 'testPassword',
        };

        const User = getUserModel()

        expect(getUserModel).toHaveBeenCalled();

        const result = await User.findOne({ email: formData.email });
        expect(result).toBe(error);
    });

});
