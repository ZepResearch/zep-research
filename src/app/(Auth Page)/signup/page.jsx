// src/app/register/page.js
import RegisterForm from "./components/RegisterForm";

export const metadata = {
  title: 'Register - Research Platform',
  description: 'Create your research account',
};

export default function RegisterPage() {
  return (
    <div className="h-full absolute w-full z-50 bg-gray-50 flex flex-col justify-center  sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join our research community
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}