import SignUpPageView from './signup-page';
import axios from 'axios';

export const checkEmail = async (email: string): Promise<boolean> => {
  try {
    const response = await axios.get('/api/v1/validation/email', {
      params: {
        email: email,
      },
    });
    if (response.status === 200) {
      console.log('success');
      return true;
    }
    console.log('fail');
    return false;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const SignUp = () => <SignUpPageView />;

export default SignUp;
