import { HttpResponse, http } from 'msw';

export type User = {
  email: string;
  password: string;
};

const users: User[] = [{ email: 'test@naver.com', password: '12345678' }];

export const userMocks = [
  http.post('/login', async ({ request }) => {
    const userInfo = (await request.json()) as User;

    // 요청으로 받은 이메일과 비밀번호가 존재하는지 확인
    const user = users.find((u) => u.email === userInfo.email && u.password === userInfo.password);
    if (user) {
      // 인증 성공
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwibmFtZSI6Iu2ZjeyyoOybhSJ9.nTAXFok_lJXn6WeyZuVFzcr_PObuNWlD_RqFAgrb3MQ';
      const refreshToken = 'refreshToken-test';

      return HttpResponse.json(
        { success: true, message: 'Login successful', token, refreshToken },
        { status: 200 },
      );
    } else {
      // 인증 실패
      return HttpResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 },
      );
    }
  }),
];
