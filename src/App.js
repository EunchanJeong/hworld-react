import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';
import Router from './Router.js';
import { axiosInstance } from './apis';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    console.log('access -> ' + accessToken);
    console.log('refresh -> ' + refreshToken);

    if (accessToken) {
      axiosInstance.defaults.headers.common['auth'] = `${accessToken}`;
    }
    if (refreshToken) {
      axiosInstance.defaults.headers.common['refresh'] = `${refreshToken}`;
    }
  }, []);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
