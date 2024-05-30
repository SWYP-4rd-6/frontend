import GoogleSignupForm from '@/components/Form/GoogleSignupForm';
import Header from '@/components/Header/Header';

const GoogleSignupPageView = () => {
  return (
    <div className="flex flex-col h-full overflow-y-scroll">
      <Header />
      <div className="mx-6 flex-grow relative h-full">
        <GoogleSignupForm />
      </div>
    </div>
  );
};

export default GoogleSignupPageView;
