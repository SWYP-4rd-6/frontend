import { User } from '@/mocks/temp';
import axios from 'axios';

export const emailLogin = async (userInfo: User) => {
  try {
    const res = await axios.post('/login', userInfo);

    return res;
  } catch (error) {
    console.log(error);
  }
};
