import axios from 'axios';
import RegisterPageView from './register-page';

export const registerTour = async (data: any) => {
  const token = localStorage.getItem('accessToken')

  try {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/v1/products`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
    });

    if (res.status === 200) {
      return res;
    } else if (res.status === 400) {
      alert('위치 정보 오류');
      window.location.reload();
    } else if (res.status === 404){
      alert('사용자 정보 오류');
      window.location.reload();
    }
  } catch (error) {
    console.error('Signup failed:', error);
    return null;
  }
  return null;
};

const Register = () => {
  return <RegisterPageView />;
};

export default Register;
