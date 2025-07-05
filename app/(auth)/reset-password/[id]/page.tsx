"use client";
import Image from "next/image";
import { createRef, useState } from "react";
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

const formSchema = z.object({
  password: z.string().min(6, {
    message: "Password should be atleast 6 characters",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password should be atleast 6 characters",
  }),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  interface value {
    email: string;
    password: string;
  }
  const router = useRouter();
  async function onSubmit(values: value) {
    setIsLoading(true);

    // const result = await signIn("credentials", {
    //   redirect: false,
    //   email: values.email,
    //   password: values.password,
    // });
    // console.log("🚀 ~ onSubmit ~ result:", result);
    // if (result?.status !== 200) {
    //   setToggle(true);

    //   setAuthError("Incorrect credentials please try again!");
    // } else {
    //   router.push("/");
    //   setAuthError("");
    //   setToggle(false);
    // }
    setIsLoading(false);
  }

  return (
    <div className="flex h-screen w-full items-center justify-center gap-2 overflow-hidden p-4 md:p-6 ">
      <div className="relative flex flex-1  w-full flex-col items-center justify-center   p-2 md:p-8 md:py-8 2xl:p-10">
        <div className="max-h-[90svh] w-full  sm:w-fit  overflow-y-auto scroll-smooth rounded-[24px] bg-card-foreground p-4 md:p-6 xl:p-8  shadow-sm [scrollbar-width:none] ">
          <Image
            src={"/logo-dark.png"}
            alt="logo"
            className="mb-4 mx-auto dark:hidden "
            width={130}
            height={130}
          />
          <Image
            src={"/logo-light.png"}
            alt="logo"
            className="mb-4 mx-auto dark:block hidden "
            width={130}
            height={130}
          />
          <h2 className=" text-xl font-bold text-vintage-50 xl:text-2xl">
            Create Password
          </h2>
          <p className="max-w-md text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem]">
            Please enter a password to create your account.
          </p>

          <Form {...form}>
            <div
              id="first"
              className="mt-4 flex w-full flex-col items-center justify-center gap-6 md:gap-4"
            >
              {/* @ts-ignore */}
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className=" block w-fit text-[0.7rem]  font-semibold 2xl:text-[0.75rem]">
                        Password
                      </FormLabel>
                      <FormControl className=" ">
                        <div className=" relative">
                          <Input
                            placeholder="Enter your password"
                            type={showPass ? "text" : "password"}
                            {...field}
                            className="mr-0 w-full rounded-[10px] border dark:bg-[#04131D] border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px] bg-[#F5F5F5] px-3 py-3 leading-tight text-[#3E4347] "
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
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className=" block w-fit text-[0.7rem]  font-semibold 2xl:text-[0.75rem]">
                        Confirm Password
                      </FormLabel>
                      <FormControl className=" ">
                        <div className=" relative">
                          <Input
                            placeholder="Confirm your password"
                            type={showPass ? "text" : "password"}
                            {...field}
                            className="mr-0 w-full rounded-[10px] border dark:bg-[#04131D] border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px] bg-[#F5F5F5] px-3 py-3 leading-tight text-[#3E4347] "
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

                <div className="mt-5 flex w-full flex-col items-center justify-center">
                  <Button
                    type="submit"
                    className="focus:shadow-outline mb-4 py-3.5 w-full rounded-full border  font-normal text-white focus:outline-none  "
                  >
                    {isLoading ? (
                      <Loader className="h-5 w-5 animate-spin text-white" />
                    ) : (
                      <span className="capitalize">Update Password</span>
                    )}
                  </Button>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-semibold text-[#3E4347] dark:text-white/80">
                      New to CopyWins?{" "}
                    </h2>
                    <Link
                      href={"/register"}
                      className="text-sm font-bold text-vintage-50"
                    >
                      <span className="capitalize text-primary">
                        Create Account
                      </span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </Form>
        </div>
      </div>
      <div className="relative hidden h-full flex-1 w-full flex-col  items-center justify-center overflow-hidden rounded-xl object-cover object-center md:flex">
        <Image
          src={"/authBg1.webp"}
          alt="signup"
          className="h-full w-full object-contain object-center"
          width={400}
          height={400}
        />
        <div className="absolute bottom-14">
          {/* <Carousel orientation="horizontal">
            <CarouselContent className="w-[320px] 2xl:w-[400px]">
              <CarouselItem>
                <Image
                  src="/vintage/images/feature1.svg"
                  alt="feature"
                  width={100}
                  className="w-full"
                  height={100}
                />
              </CarouselItem>
              <CarouselItem>
                {" "}
                <Image
                  src="/vintage/images/feature2.svg"
                  alt="feature"
                  width={100}
                  className="w-full"
                  height={100}
                />
              </CarouselItem>
              <CarouselItem>
                {" "}
                <Image
                  src="/vintage/images/feature3.svg"
                  alt="feature"
                  width={100}
                  className="w-full"
                  height={100}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className=" " />
            <CarouselNext />
          </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
