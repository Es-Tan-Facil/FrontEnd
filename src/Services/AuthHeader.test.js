import AuthHeader from './AuthHeader';
import '@testing-library/jest-dom/extend-expect';


describe('AuthHeader function', () => {
    it('returns the correct authorization header when user is logged in', () => {
      const user = {
        accessToken: 'dummyAccessToken',
      };
      const localStorageMock = {
        getItem: jest.fn().mockReturnValue(JSON.stringify(user)),
      };
      global.localStorage = localStorageMock;
  
      const result = AuthHeader();
      expect(result).toBe('Bearer dummyAccessToken');
    });
  
    it('returns an empty object when user is not logged in', () => {
      const localStorageMock = {
        getItem: jest.fn().mockReturnValue(null),
      };
      global.localStorage = localStorageMock;
  
      const result = AuthHeader();
      expect(result).toEqual({});
    });
  });