"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeClosed, Loader } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password should be at least 6 characters",
  }),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [AuthError, setAuthError] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const router = useRouter();

  async function onSubmit(values: any) {
    setIsLoading(true);
    setIsLoading(false);
    router.push("/");
  }

  return (
    <div className="flex h-svh w-full  items-center justify-center gap-2 overflow-hidden p-4 md:p-6">
      <div className="relative flex flex-1 w-full  flex-col items-center justify-center p-2 md:p-8 md:py-8 2xl:p-10">
        <div className="max-h-[90svh] w-full sm:w-fit overflow-y-auto scroll-smooth rounded-[24px] bg-card p-4 md:p-6 xl:p-8 shadow-sm [scrollbar-width:none]">
          <Image
            src={"/logo-dark.png"}
            alt="logo"
            className="mb-4 mx-auto dark:hidden"
            width={130}
            height={130}
          />
          <Image
            src={"/logo-light.png"}
            alt="logo"
            className="mb-4 mx-auto dark:block hidden"
            width={130}
            height={130}
          />
          <h2 className="text-xl 2xl:text-2xl pt-4 pb-1 font-bold text-center text-vintage-50 xl:text-2xl">
            Welcome Back
          </h2>
          <p className="max-w-md text-[0.8rem] font-light  text-center leading-loose text-[#3E4347] dark:text-white 2xl:text-[0.9rem]">
            Manager Dashboard
          </p>

          <Form {...form}>
            <div
              id="first"
              className="mt-4 flex w-full flex-col items-center justify-center gap-6 md:gap-4"
            >
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block w-fit text-[0.7rem] font-semibold 2xl:text-[0.75rem]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="mr-0 w-full bg-card-foreground rounded-[10px] border border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px] px-3 py-3 leading-tight text-[#3E4347]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block w-fit text-[0.7rem] font-semibold 2xl:text-[0.75rem]">
                        Password
                      </FormLabel>
                      <FormControl className="">
                        <div className="relative">
                          <Input
                            placeholder="Enter your password"
                            type={showPass ? "text" : "password"}
                            {...field}
                            className="mr-0 w-full bg-card-foreground rounded-[10px] border border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px] px-3 py-3 leading-tight text-[#3E4347]"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                          >
                            {!showPass ? (
                              <Eye className="h-5 w-5 text-gray-400" />
                            ) : (
                              <EyeClosed className="h-5 w-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox className="rounded-full" id="remember-me" />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block font-normal cursor-pointer text-sm"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm text-primary font-medium">
                    <Link href="/reset-password" className="">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                {AuthError && (
                  <p className="mb-2 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#F74418]/20 bg-[#F74418]/15 px-3 py-2 text-xs font-medium leading-none text-[#F74418] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 2xl:text-sm">
                    <span className="text-[#F74418]">{AuthError}</span>
                  </p>
                )}

                <div className="mt-6 flex w-full flex-col items-center justify-center">
                  <Button
                    type="submit"
                    className="focus:shadow-outline mb-4 py-3.5 w-full rounded-full border font-normal text-white focus:outline-none"
                  >
                    {isLoading ? (
                      <Loader className="h-5 w-5 animate-spin text-white" />
                    ) : (
                      <span className="capitalize font-semibold">Sign In</span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
