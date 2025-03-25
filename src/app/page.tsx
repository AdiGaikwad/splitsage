"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BarChart3, CreditCard, DollarSign, Globe, PieChart, Users } from 'lucide-react'
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A2130] to-[#2A3B4C] text-[#F0F4F8]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#3E6D9C] opacity-10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  <span className="block">Simplify Shared</span>
                  <span className="block text-[#00C9A7]">Expenses</span>
                </h1>
                <p className="mt-6 text-xl text-[#F0F4F8]/80 max-w-md">
                  Split bills, track expenses, and settle debts effortlessly with roommates, friends, and colleagues.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130] font-medium"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  asChild
                >
                  <Link href="/auth/register">
                    Get Started
                    <motion.span
                      animate={{ x: isHovering ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#3E6D9C]  text-black" asChild>
                  <Link href="/auth/login">Sign In</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#3E6D9C]/20">
                <div className="bg-[#2A3B4C] p-4 rounded-t-xl border-b border-[#3E6D9C]/20">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFD166]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#00C9A7]"></div>
                  </div>
                </div>
                <div className="bg-[#1A2130] p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-medium">Weekend Trip Expenses</div>
                      <div className="text-[#00C9A7]">&#8377; 1,240.50</div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "Alex", amount: "₹ 320.00", paid: true },
                        { name: "Taylor", amount: "₹ 285.50", paid: true },
                        { name: "Jordan", amount: "₹ 410.00", paid: false },
                        { name: "Morgan", amount: "₹ 225.00", paid: false },
                      ].map((person, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          className="flex justify-between items-center p-3 rounded-lg bg-[#2A3B4C]/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#3E6D9C] flex items-center justify-center">
                              {person.name.charAt(0)}
                            </div>
                            <div>{person.name}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div>{person.amount}</div>
                            <div className={`w-2 h-2 rounded-full ${person.paid ? "bg-[#4CAF50]" : "bg-[#FFD166]"}`}></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-[#3E6D9C]/20">
                      <Button className="w-full bg-[#3E6D9C] hover:bg-[#3E6D9C]/90">Settle Up</Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#1A2130]/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold">Smart Expense Management</h2>
            <p className="mt-4 text-[#F0F4F8]/70 max-w-2xl mx-auto">
              Powerful tools to track, split, and settle expenses with anyone, anywhere.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Users className="h-10 w-10 text-[#00C9A7]" />,
                title: "Group Expenses",
                description: "Create groups for roommates, trips, or projects and track shared expenses together."
              },
              {
                icon: <PieChart className="h-10 w-10 text-[#00C9A7]" />,
                title: "Split Fairly",
                description: "Split bills equally or unevenly based on custom amounts, percentages, or shares."
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-[#00C9A7]" />,
                title: "Visualize Spending",
                description: "See where your money goes with intuitive charts and spending breakdowns."
              },
              {
                icon: <CreditCard className="h-10 w-10 text-[#00C9A7]" />,
                title: "Automatic Settling",
                description: "Get smart suggestions to minimize transactions when settling debts."
              },
              {
                icon: <Globe className="h-10 w-10 text-[#00C9A7]" />,
                title: "Multi-Currency",
                description: "Handle expenses in different currencies with automatic conversion."
              },
              {
                icon: <DollarSign className="h-10 w-10 text-[#00C9A7]" />,
                title: "Shared Wallets",
                description: "Create virtual wallets for group funds and track contributions."
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-[#2A3B4C] border-[#3E6D9C]/30 hover:border-[#00C9A7]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl text-white font-medium mb-2">{feature.title}</h3>
                    <p className="text-[#F0F4F8]/70">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#2A3B4C] to-[#3E6D9C] rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to simplify your shared expenses?</h2>
            <p className="text-[#F0F4F8]/80 max-w-2xl mx-auto mb-8">
              Join thousands of users who are already saving time and avoiding awkward money conversations.
            </p>
            <Button 
              size="lg" 
              className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130] font-medium"
              asChild
            >
              <Link href="/auth/register">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2130] py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-[#00C9A7]">SplitSage</div>
              <p className="text-[#F0F4F8]/60 mt-2">Simplify shared expenses</p>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-[#F0F4F8]/80 hover:text-[#00C9A7]">About</Link>
              <Link href="#" className="text-[#F0F4F8]/80 hover:text-[#00C9A7]">Features</Link>
              <Link href="#" className="text-[#F0F4F8]/80 hover:text-[#00C9A7]">Privacy</Link>
              <Link href="#" className="text-[#F0F4F8]/80 hover:text-[#00C9A7]">Terms</Link>
            </div>
          </div>
          <div className="border-t border-[#3E6D9C]/20 mt-8 pt-8 text-center text-[#F0F4F8]/60">
            © {new Date().getFullYear()} SplitSage. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}