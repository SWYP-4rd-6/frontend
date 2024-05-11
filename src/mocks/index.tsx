import { SharedOptions, delay, http } from 'msw';
import { setupWorker } from 'msw/browser';
import { userMocks } from './temp';

type OnUnHandledRequest = SharedOptions['onUnhandledRequest'];

// 모든 핸들러에 자연스러운 서버 delay를 적용합니다.
const globalDelay = http.all('*', async () => {
  await delay();
});

// MSW에 의해 무시되어야 하는 요청 경로를 정의합니다. (console에 경고가 뜨는거 방지)
const PATHS_IGNORED_BY_MSW = ['temp'];

export const ignoreDevResources: OnUnHandledRequest = (req, print) => {
  if (PATHS_IGNORED_BY_MSW.find((path) => req.url.includes(path))) {
    return;
  }

  print.warning();
};

// MSW 설정 및 시작
export const enableMocking = () => {
  // 여기에 mock API 들을 추가합니다.
  const handlers = [globalDelay, ...userMocks];
  const worker = setupWorker(...handlers);

  return worker.start({
    onUnhandledRequest: ignoreDevResources,
  });
};
