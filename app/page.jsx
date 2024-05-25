"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { signal } from "@preact/signals";
import Image from 'next/image';
import logo from '@/public/logo.svg';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from "next/link";
import { Footer } from '@/components/Footer';
import useAuth from '@/hooks/useAuth'; 

signal();

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { isAuthenticated, user, loading } = useAuth();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push(`/dashboard/${user.userID}`);
    }
  }, [isAuthenticated, loading, router]);

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
      }

      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
        credentials: 'include', 
      });

      const result = await response.json();
      if (response.ok) {
        router.push(`/dashboard/${result.userID}`);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="transition-all duration-500 min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="transition-all duration-500 bg-white p-8 rounded-xl flex flex-col items-center w-[500px] lg:w-[600px] max-w-full">
        <Image src={logo} alt="Logo" width={100} height={100} />
        <h1 className="text-2xl font-bold my-4 text-center">به کاظم خوش آمدید</h1>
        <hr className="transition-all duration-500 w-[300px] lg:w-[400px] border-t-2 border-slate-200 my-4" />
        <h2 className="transition-all duration-500 text-3xl font-bold mb-6 text-center mt-5">وارد شوید</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full">
          <div className="mb-4">
            <Label htmlFor="userID" className="block text-md font-medium text-gray-700">شناسه کاربری :</Label>
            <Input
              id="userID"
              type="text"
              {...register("userID", { required: "شناسه کاربری مورد نیاز است" })}
              className="transition-all duration-500 mt-1 block w-full"
              required
            />
            {errors.userID && <p className="transition-all duration-300 text-red-500">{errors.userID.message}</p>}
          </div>
          <div className="mb-6">
            <Label htmlFor="password" className="block text-md font-medium text-gray-700">رمز عبور :</Label>
            <Input
              id="password"
              type="password"
              {...register("password", {
                required: "رمز عبور مورد نیاز است",
                minLength: { value: 8, message: "رمز عبور باید حداقل 8 کاراکتر باشد" },
              })}
              className="transition-all duration-500 mt-1 block w-full"
              required
            />
            {errors.password && <p className="transition-all duration-300 text-red-500">{errors.password.message}</p>}
          </div>
          <Button type="submit" className="transition-all duration-500 w-full bg-black hover:bg-gray-700 text-white py-2 px-4 rounded" disabled={isLoading}>
            {isLoading ? "در حال ورود..." : "ورود"}
          </Button>
        </form>
        <p className="mt-10 text-md">نمیتوانید وارد شوید؟ <Link href={'/'} className="hover:underline text-blue-500 font-semibold">اینجا</Link> را کلید کنید</p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
