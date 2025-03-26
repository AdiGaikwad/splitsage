"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BarChart3, Bell, CreditCard, DollarSign, Home, LogOut, Plus, Settings, Users, Menu, BriefcaseBusinessIcon } from 'lucide-react'
import { motion } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-[#1A2130] text-[#F0F4F8]">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-[#2A3B4C] border-r border-[#3E6D9C]/20">
          <div className="flex h-14 items-center border-b border-[#3E6D9C]/20 px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8">
                {/* <Icon3D type="split" size={32} /> */}
              </div>
              <span className="font-bold text-xl text-[#00C9A7]">SplitSage</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-[#F0F4F8]/50">
                Main
              </h2>
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "overview" ? "bg-[#3E6D9C]/20 text-[#00C9A7]" : "text-[#F0F4F8]/70 hover:text-[#000000]"}`}
                  onClick={() => setActiveTab("overview")}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Overview
                </Button>

                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "business" ? "bg-[#3E6D9C]/20 text-[#00C9A7]" : "text-[#F0F4F8]/70 hover:text-[#000000]"}`}
                  onClick={() => setActiveTab("overview")}
                >
                    <Link href={"/business"} className="flex">
                  <BriefcaseBusinessIcon className="mr-2 h-4 w-4" />
                  Business Management
                    </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "expenses" ? "bg-[#3E6D9C]/20 text-[#00C9A7]" : "text-[#F0F4F8]/70 hover:text-[#000000]"}`}
                  onClick={() => setActiveTab("expenses")}
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Expenses
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "groups" ? "bg-[#3E6D9C]/20 text-[#00C9A7]" : "text-[#F0F4F8]/70 hover:text-[#000000]"}`}
                  onClick={() => setActiveTab("groups")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Groups
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "analytics" ? "bg-[#3E6D9C]/20 text-[#00C9A7]" : "text-[#F0F4F8]/70 hover:text-[#000000]"}`}
                  onClick={() => setActiveTab("analytics")}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
              </div>
            </div>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-[#F0F4F8]/50">
                Account
              </h2>
              <div className="space-y-1">
                <Link href="/user/profile">
                  <Button variant="ghost" className="w-full justify-start text-[#F0F4F8]/70 hover:text-[#000000]">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-start text-[#F0F4F8]/70 hover:text-[#000000]">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Header */}
          <header className="flex h-14 items-center gap-4 border-b border-[#3E6D9C]/20 bg-[#2A3B4C] px-4 sm:px-6">
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="relative bg-transparent">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#FF6B6B]" />
                <span className="sr-only">Notifications</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback className="bg-[#3E6D9C]">AG</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                  <DropdownMenuItem asChild>
                    <Link href="/user/profile" className="cursor-pointer">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-auto p-4 sm:p-6">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4 !text-white">
              <TabsList className="bg-[#2A3B4C] border border-[#3E6D9C]/20 !text-white">
                <TabsTrigger value="overview" className="data-[state=active]:bg-[#3E6D9C] text-[#F0F4F8]">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="expenses" className="data-[state=active]:bg-[#3E6D9C] text-[#F0F4F8]">
                  Expenses
                </TabsTrigger>
                <TabsTrigger value="groups" className="data-[state=active]:bg-[#3E6D9C] text-[#F0F4F8]">
                  Groups
                </TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:bg-[#3E6D9C] text-[#F0F4F8]">
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 !text-white">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
                  <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30 !text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                      <div className="w-8 h-8">
                        {/* <Icon3D type="coin" size={32} /> */}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">&#8377; 1,245.89</div>
                      <p className="text-xs text-[#F0F4F8]/70">+12.5% from last month</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-white">You Owe</CardTitle>
                      <div className="w-8 h-8">
                        {/* <Icon3D type="card" size={32} /> */}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-[#FF6B6B]">$245.50</div>
                      <p className="text-xs text-[#F0F4F8]/70">Across 3 people</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-white">You&apos;re Owed</CardTitle>
                      <div className="w-8 h-8">
                        {/* <Icon3D type="wallet" size={32} /> */}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-[#00C9A7]">$410.25</div>
                      <p className="text-xs text-[#F0F4F8]/70">Across 5 people</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-white">Active Groups</CardTitle>
                      <div className="w-8 h-8">
                        {/* <Icon3D type="split" size={32} /> */}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-red-400">5</div>
                      <p className="text-xs text-[#F0F4F8]/70">2 updated today</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-white">
                    <CardHeader>
                      <CardTitle>Recent Expenses</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: "Dinner at Olive Garden", amount: "₹ 85.40", date: "Today", group: "Friends" },
                          { name: "Groceries", amount: "₹ 120.75", date: "Yesterday", group: "Roommates" },
                          { name: "Movie Tickets", amount: "₹ 45.00", date: "3 days ago", group: "Friends" },
                          { name: "Utilities", amount: "₹ 210.50", date: "1 week ago", group: "Roommates" },
                        ].map((expense, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">{expense.name}</p>
                              <p className="text-xs text-[#F0F4F8]/70">{expense.date} • {expense.group}</p>
                            </div>
                            <div className="font-medium">{expense.amount}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full text-black" asChild>
                        <Link href="/expenses/create">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Expense
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-white">
                    <CardHeader>
                      <CardTitle>Monthly Budget</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="font-medium">Groceries</div>
                          <div>&#8377; 350 / &#8377; 400</div>
                        </div>
                        <Progress value={87.5} className="h-2 bg-[#3E6D9C]/30">
                          <div className="h-full bg-[#00C9A7] rounded-full" style={{ width: '87.5%' }} />
                        </Progress>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="font-medium">Dining Out</div>
                          <div>&#8377; 280 / &#8377; 250</div>
                        </div>
                        <Progress value={112} className="h-2 bg-[#3E6D9C]/30">
                          <div className="h-full bg-[#FF6B6B] rounded-full" style={{ width: '100%' }} />
                        </Progress>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="font-medium">Entertainment</div>
                          <div>&#8377; 120 / &#8377; 200</div>
                        </div>
                        <Progress value={60} className="h-2 bg-[#3E6D9C]/30">
                          <div className="h-full bg-[#00C9A7] rounded-full" style={{ width: '60%' }} />
                        </Progress>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="font-medium">Transportation</div>
                          <div>&#8377; 90 / &#8377; 150</div>
                        </div>
                        <Progress value={60} className="h-2 bg-[#3E6D9C]/30">
                          <div className="h-full bg-[#00C9A7] rounded-full" style={{ width: '60%' }} />
                        </Progress>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full text-black">
                        <Settings className="mr-2 h-4 w-4" />
                        Manage Budgets
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="expenses" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">All Expenses</h2>
                  <Button className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]" asChild>
                    <Link href="/expenses/create">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Expense
                    </Link>
                  </Button>
                </div>
                
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-white">
                  <CardContent className="p-0">
                    <div className="rounded-md border border-[#3E6D9C]/20">
                      <div className="grid grid-cols-5 border-b border-[#3E6D9C]/20 bg-[#1A2130]/30 p-4 text-sm font-medium">
                        <div>Description</div>
                        <div>Category</div>
                        <div>Date</div>
                        <div>Amount</div>
                        <div>Group</div>
                      </div>
                      {[
                        { 
                          description: "Dinner at Olive Garden", 
                          category: "Dining", 
                          date: "Apr 15, 2023", 
                          amount: "$85.40", 
                          group: "Friends" 
                        },
                        { 
                          description: "Groceries", 
                          category: "Food", 
                          date: "Apr 14, 2023", 
                          amount: "$120.75", 
                          group: "Roommates" 
                        },
                        { 
                          description: "Movie Tickets", 
                          category: "Entertainment", 
                          date: "Apr 12, 2023", 
                          amount: "$45.00", 
                          group: "Friends" 
                        },
                        { 
                          description: "Utilities", 
                          category: "Bills", 
                          date: "Apr 8, 2023", 
                          amount: "$210.50", 
                          group: "Roommates" 
                        },
                        { 
                          description: "Gas", 
                          category: "Transportation", 
                          date: "Apr 5, 2023", 
                          amount: "$40.25", 
                          group: "Personal" 
                        },
                        { 
                          description: "Coffee Shop", 
                          category: "Dining", 
                          date: "Apr 3, 2023", 
                          amount: "$18.50", 
                          group: "Work" 
                        },
                        { 
                          description: "Internet Bill", 
                          category: "Bills", 
                          date: "Apr 1, 2023", 
                          amount: "$65.99", 
                          group: "Roommates" 
                        },
                      ].map((expense, i) => (
                        <div key={i} className="grid grid-cols-5 border-b border-[#3E6D9C]/20 p-4 text-sm last:border-0">
                          <div className="font-medium">{expense.description}</div>
                          <div>{expense.category}</div>
                          <div>{expense.date}</div>
                          <div>{expense.amount}</div>
                          <div>{expense.group}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="groups" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Your Groups</h2>
                  <Button className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]" asChild>
                    <Link href="/groups/create">
                      <Plus className="mr-2 h-4 w-4" />
                      Create Group
                    </Link>
                  </Button>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { 
                      name: "Roommates", 
                      members: 3, 
                      expenses: 12, 
                      balance: "+$45.25", 
                      positive: true 
                    },
                    { 
                      name: "Friends", 
                      members: 5, 
                      expenses: 8, 
                      balance: "-$32.50", 
                      positive: false 
                    },
                    { 
                      name: "Work", 
                      members: 4, 
                      expenses: 3, 
                      balance: "+$120.00", 
                      positive: true 
                    },
                    { 
                      name: "Trip to Vegas", 
                      members: 6, 
                      expenses: 15, 
                      balance: "-$85.75", 
                      positive: false 
                    },
                    { 
                      name: "Family", 
                      members: 4, 
                      expenses: 5, 
                      balance: "$0.00", 
                      positive: true 
                    },
                  ].map((group, i) => (
                    <Card key={i} className="bg-[#2A3B4C] border-[#3E6D9C]/30 ">
                      <CardHeader className="pb-2">
                        <CardTitle>{group.name}</CardTitle>
                        <CardDescription>{group.members} members • {group.expenses} expenses</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">Your balance</div>
                          <div className={`font-bold ${group.positive ? "text-[#00C9A7]" : group.balance === "$0.00" ? "text-[#F0F4F8]" : "text-[#FF6B6B]"}`}>
                            {group.balance}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/groups/${i}`}>View Details</Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/expenses/create?group=${i}`}>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Expense
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Expense Analytics</h2>
                  <div className="flex gap-2">
                    <Button variant="outline">This Month</Button>
                    <Button variant="outline">Last 3 Months</Button>
                    <Button variant="outline">This Year</Button>
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                    <CardHeader>
                      <CardTitle>Spending by Category</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <div className="w-64 h-64">
                        {/* <Icon3D type="pie" size={256} /> */}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center flex-wrap gap-2">
                      {[
                        { name: "Food", color: "#00C9A7", percentage: "35%" },
                        { name: "Bills", color: "#3E6D9C", percentage: "25%" },
                        { name: "Entertainment", color: "#FFD166", percentage: "15%" },
                        { name: "Transportation", color: "#FF6B6B", percentage: "10%" },
                        { name: "Other", color: "#9B5DE5", percentage: "15%" },
                      ].map((category, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                          <span className="text-xs">{category.name} ({category.percentage})</span>
                        </div>
                      ))}
                    </CardFooter>
                  </Card>
                  <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                    <CardHeader>
                      <CardTitle>Monthly Spending Trend</CardTitle>
                    </CardHeader>
                    <CardContent className="h-64 flex items-center justify-center">
                      <div className="w-full h-full flex items-end justify-between gap-2 px-4">
                        {[65, 40, 75, 50, 90, 60, 80, 55, 70, 85, 45, 95].map((height, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div 
                              className="w-full bg-[#00C9A7] rounded-t-sm" 
                              style={{ height: `${height}%` }}
                            ></div>
                            <div className="text-xs text-[#F0F4F8]/70">
                              {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}