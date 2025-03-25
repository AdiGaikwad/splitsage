"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail, User } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import domains from "@/data/domains";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const nameref = useRef(false);

  const emailref = useRef(false);
  const passwordref = useRef(false);
  const router = useRouter();
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    // Simple password strength calculation

    let strength = 0;
    if (password.length > 6) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;
    setPasswordStrength(strength);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const password = passwordref.current.value;

    console.log(e);

    setIsLoading(true);
    const body = {
      name,
      email,
      password,
    };
    // Simulate API call
    setIsLoading(true);
    axios
      .post(`${domains.AUTH_HOST}/api/v1/user/signup`, body, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoading(false);
        //@ts-ignore
        if (res.data.success) {
          console.log("Redirect")
        router.push("/auth/login")
        }
      })
      .catch((err) => {
        setIsLoading(false);

        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A2130] to-[#2A3B4C] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#F0F4F8]/70 hover:text-[#00C9A7] transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>

        <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-[#00C9A7]/10 flex items-center justify-center">
                <User className="h-6 w-6 text-[#00C9A7]" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center text-[#F0F4F8]">
              Create an account
            </CardTitle>
            <CardDescription className="text-center text-[#F0F4F8]/70">
              Get started with SplitSage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#F0F4F8]/90">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      ref={nameref}
                      className="bg-[#1A2130] border-[#3E6D9C]/30 pl-10 text-[#F0F4F8]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#F0F4F8]/90">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      required
                      ref={emailref}
                      className="bg-[#1A2130] border-[#3E6D9C]/30 pl-10 text-[#F0F4F8]"
                    />
                  </div>
                </div>
              </>

              <>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#F0F4F8]/90">
                    Password
                  </Label>
                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      ref={passwordref}
                      onChange={handlePasswordChange}
                      defaultValue={""}
                      className="bg-[#1A2130] border-[#3E6D9C]/30 pl-10 text-[#F0F4F8]"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute hover:bg-transparent cursor-pointer right-0 top-0 h-full px-3 py-2 text-[#F0F4F8]/70 hover:text-[#F0F4F8]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4].map((index) => (
                      <div
                        key={index}
                        className={`h-1 flex-1 rounded-full ${
                          passwordStrength >= index
                            ? index <= 1
                              ? "bg-red-500"
                              : index <= 2
                              ? "bg-yellow-500"
                              : index <= 3
                              ? "bg-blue-500"
                              : "bg-green-500"
                            : "bg-[#3E6D9C]/30"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-[#F0F4F8]/60 mt-1">
                    Password should be at least 8 characters with uppercase,
                    number, and special character
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="confirm-password"
                    className="text-[#F0F4F8]/90"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                    <Input
                      id="confirm-password"
                      type={showPassword ? "text" : "password"}
                      defaultValue={""}
                      required
                      className="bg-[#1A2130] border-[#3E6D9C]/30 pl-10 text-[#F0F4F8]"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-[#1A2130] border-t-transparent rounded-full cursor-pointer"
                    />
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-[#F0F4F8]/70">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-[#00C9A7] hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
