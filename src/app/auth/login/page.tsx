"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import domains from "@/data/domains"
import { useRouter } from "next/navigation"

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
const router = useRouter()
  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()
    const email= e.target[0].value
    const password = e.target[1].value
    // console.log(e)
    const body={
      email,
      password
    }
    setIsLoading(true)

    axios.post(`${domains.AUTH_HOST}/api/v1/user/signin`, body, {withCredentials: true}  )
    .then((res)=>{
      setIsLoading(false)
      if(res.data.success && res.data.token){
        const token = res.data.token
        window.localStorage.setItem("token", token)
        router.push("/user/profile")
      }

    })
    .catch((err)=>{
      setIsLoading(false)

      console.log(err)
    })
 
  }

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
                <LockKeyhole className="h-6 w-6 text-[#00C9A7]" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center text-[#F0F4F8]">Welcome back</CardTitle>
            <CardDescription className="text-center text-[#F0F4F8]/70">
              Sign in to your SplitSage account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#F0F4F8]/90">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                  <Input 
                    id="email" 
                    placeholder="name@example.com" 
                    type="email" 
                    required
                    className="bg-[#1A2130] border-[#3E6D9C]/30 pl-10 text-[#F0F4F8]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-[#F0F4F8]/90">Password</Label>
                  <Link 
                    href="#" 
                    className="text-xs text-[#00C9A7] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    required
                    className="bg-[#1A2130] border-[#3E6D9C]/30 pl-10 text-[#F0F4F8]"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-[#F0F4F8]/70 hover:text-[#F0F4F8]"
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
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-[#1A2130] border-t-transparent rounded-full"
                  />
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

      

         
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-[#F0F4F8]/70">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="text-[#00C9A7] hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}