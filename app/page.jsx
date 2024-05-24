import React from "react";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Image from "next/image";
import logo from '@/public/logo.svg';

const LoginPage = () => {
  return (
    <div className="transition-all duration-500 min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="transition-all duration-500 bg-white p-8 rounded-xl flex flex-col items-center w-[500px] lg:w-[650px] max-w-full">
        <Image src={logo} alt="Logo" width={100} height={100} />
        <h2 className="transition-all duration-500 text-3xl font-bold mb-6 text-center mt-5">وارد شوید</h2>
        <form className="mt-8 w-full">
          <div className="mb-4">
            <Label htmlFor="email" className="block text-md font-medium text-gray-700">ایمیل :</Label>
            <Input type="email" id="email" className="transition-all duration-500 mt-1 block w-full" required />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" className="block text-md font-medium text-gray-700">رمز عبور :</Label>
            <Input type="password" id="password" className="transition-all duration-500 mt-1 block w-full" required />
          </div>
          <Button type="submit" className="transition-all duration-500 w-full bg-black hover:bg-gray-700 text-white py-2 px-4 rounded">
            ورود
          </Button>
          <p className="mt-5 text-sm">نمیتوانید وارد شوید؟ <Link href={'/'} className="text-blue-500 font-semibold">اینجا</Link> را کلید کنید</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
