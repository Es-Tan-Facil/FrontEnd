import axios from 'axios';
import AuthService from './AuthService';

jest.mock('axios');

describe('AuthService class', () => {
  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('logs in successfully and saves user data in local storage', async () => {
    const username = 'testUser';
    const password = 'testPassword';
    const mockResponse = {
      data: {
        accessToken: 'dummyAccessToken',
      },
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    await AuthService.login(username, password);

    expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/auth/signin', {
      username,
      password,
    });
    expect(localStorage.getItem('user')).toBe(JSON.stringify(mockResponse.data));
  });

  it('logs out and removes user data from local storage', () => {
    localStorage.setItem('user', JSON.stringify({ accessToken: 'dummyAccessToken' }));

    AuthService.logout();

    expect(localStorage.getItem('user')).toBeNull();
  });

  it('registers a user with the provided username, email, and password', async () => {
    const username = 'testUser';
    const email = 'test@example.com';
    const password = 'testPassword';
    const mockResponse = {
      data: {
        message: 'User registered successfully',
      },
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    const result = await AuthService.register(username, email, password);

    expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/auth/signup', {
      username,
      email,
      password,
    });
    expect(result).toEqual(mockResponse.data);
  });

  it('retrieves the current user data from local storage', () => {
    const mockUser = { username: 'testUser', accessToken: 'dummyAccessToken' };
    localStorage.setItem('user', JSON.stringify(mockUser));

    const result = AuthService.getCurrentUser();

    expect(result).toEqual(mockUser);
  });
});
