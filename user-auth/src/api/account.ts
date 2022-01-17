// utils
import fakeRequest from '../utils/fakeRequest';
import { verify, sign } from '../utils/jwt';
//
import mock from './mock';

// ----------------------------------------------------------------------

const JWT_SECRET = 'finset-n-secret-key';
const JWT_EXPIRES_IN = '5 days';

const users = [
  {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Hong Gil Dong',
    email: 'hong@finset.io',
    password: '12345',
    country: 'South Korea',
    address: '서울특별시 영등포구 국제금융로 2길 17, 시티플라자 7층',
    city: 'Seoul',
    about: '대출 한번에 비교하기 대출비교 앱 핀셋N',
  },
];

// ----------------------------------------------------------------------

mock.onPost('/api/account/login').reply(async (config: any) => {
  try {
    await fakeRequest(1000);

    const { email, password } = JSON.parse(config.data);
    const user = users.find((_user) => _user.email === email);

    if (!user) {
      return [400, { message: 'There is no user corresponding to the email address.' }];
    }

    if (user.password !== password) {
      return [400, { message: 'Wrong password' }];
    }

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [200, { accessToken, user }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});

// ----------------------------------------------------------------------

mock.onGet('/api/account/user-profile').reply((config: any) => {
  try {
    const { Authorization } = config.headers;

    if (!Authorization) {
      return [401, { message: 'Authorization token missing' }];
    }

    const accessToken = Authorization.split(' ')[1];
    const data: any = verify(accessToken, JWT_SECRET);
    const userId = typeof data === 'object' ? data?.userId : '';
    const user = users.find((_user) => _user.id === userId);

    if (!user) {
      return [401, { message: 'Invalid authorization token' }];
    }

    return [200, { user }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});
