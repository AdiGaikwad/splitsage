"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BarChart3, Building2, Calculator, ChevronRight, CreditCard, Download, FileText, Plus, Settings, Users } from 'lucide-react'
import { motion } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon3D from "@/components/3d/icon-3d"

export default function BusinessManagementPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-[#1A2130] text-[#F0F4F8]">
      <header className="border-b border-[#3E6D9C]/20 bg-[#2A3B4C]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/user/dashboard" className="flex items-center gap-2 text-[#F0F4F8]/70 hover:text-[#F0F4F8]">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]" asChild>
              <Link href="/business/create">
                <Plus className="h-4 w-4 mr-2" />
                Add Business
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-16">
              <Icon3D type="card" size={64} color="#00C9A7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Business Management</h1>
              <p className="text-[#F0F4F8]/70">Manage your business expenses, taxes, and employees</p>
            </div>
          </motion.div>

          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-[#2A3B4C] border border-[#3E6D9C]/20">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#3E6D9C] data-[state=active]:text-[#F0F4F8]">
                <BarChart3 className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="businesses" className="data-[state=active]:bg-[#3E6D9C] data-[state=active]:text-[#F0F4F8]">
                <Building2 className="h-4 w-4 mr-2" />
                Businesses
              </TabsTrigger>
              <TabsTrigger value="employees" className="data-[state=active]:bg-[#3E6D9C] data-[state=active]:text-[#F0F4F8]">
                <Users className="h-4 w-4 mr-2" />
                Employees
              </TabsTrigger>
              <TabsTrigger value="taxes" className="data-[state=active]:bg-[#3E6D9C] data-[state=active]:text-[#F0F4F8]">
                <Calculator className="h-4 w-4 mr-2" />
                Taxes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Businesses</CardTitle>
                    <div className="w-8 h-8">
                      <Icon3D type="split" size={32} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-[#F0F4F8]/70">2 active, 1 archived</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                    <div className="w-8 h-8">
                      <Icon3D type="wallet" size={32} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-[#F0F4F8]/70">+2 from last month</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                    <div className="w-8 h-8">
                      <Icon3D type="receipt" size={32} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$24,560.89</div>
                    <p className="text-xs text-[#F0F4F8]/70">+8.3% from last month</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Tax Liability</CardTitle>
                    <div className="w-8 h-8">
                      <Icon3D type="coin" size={32} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$5,230.45</div>
                    <p className="text-xs text-[#F0F4F8]/70">Estimated for Q2</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader>
                    <CardTitle>Business Performance</CardTitle>
                    <CardDescription>Revenue vs. Expenses (Last 6 Months)</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="w-full h-full flex items-end justify-between gap-2 px-4">
                      {[
                        { month: "Jan", revenue: 85, expenses: 65 },
                        { month: "Feb", revenue: 75, expenses: 60 },
                        { month: "Mar", revenue: 90, expenses: 70 },
                        { month: "Apr", revenue: 95, expenses: 75 },
                        { month: "May", revenue: 88, expenses: 72 },
                        { month: "Jun", revenue: 92, expenses: 78 },
                      ].map((data, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full flex justify-center gap-1 h-64">
                            <div 
                              className="w-1/3 bg-[#00C9A7] rounded-t-sm" 
                              style={{ height: `${data.revenue}%` }}
                            ></div>
                            <div 
                              className="w-1/3 bg-[#FF6B6B] rounded-t-sm" 
                              style={{ height: `${data.expenses}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-[#F0F4F8]/70">
                            {data.month}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#00C9A7]"></div>
                      <span className="text-xs">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
                      <span className="text-xs">Expenses</span>
                    </div>
                  </CardFooter>
                </Card>

                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader>
                    <CardTitle>Expense Categories</CardTitle>
                    <CardDescription>Breakdown of business expenses</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-64 h-64">
                      <Icon3D type="pie" size={256} />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center flex-wrap gap-2">
                    {[
                      { name: "Payroll", color: "#00C9A7", percentage: "45%" },
                      { name: "Rent", color: "#3E6D9C", percentage: "20%" },
                      { name: "Marketing", color: "#FFD166", percentage: "15%" },
                      { name: "Utilities", color: "#FF6B6B", percentage: "10%" },
                      { name: "Other", color: "#9B5DE5", percentage: "10%" },
                    ].map((category, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                        <span className="text-xs">{category.name} ({category.percentage})</span>
                      </div>
                    ))}
                  </CardFooter>
                </Card>
              </div>

              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Recent Business Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        type: "expense", 
                        title: "Office Supplies Purchase", 
                        business: "Tech Solutions LLC", 
                        amount: "$345.78", 
                        date: "Today" 
                      },
                      { 
                        type: "tax", 
                        title: "Quarterly Tax Payment", 
                        business: "Creative Design Studio", 
                        amount: "$1,250.00", 
                        date: "Yesterday" 
                      },
                      { 
                        type: "employee", 
                        title: "New Employee Added", 
                        business: "Tech Solutions LLC", 
                        amount: "", 
                        date: "2 days ago" 
                      },
                      { 
                        type: "expense", 
                        title: "Software Subscription", 
                        business: "Web Development Inc", 
                        amount: "$89.99", 
                        date: "3 days ago" 
                      },
                      { 
                        type: "expense", 
                        title: "Client Meeting Lunch", 
                        business: "Creative Design Studio", 
                        amount: "$124.50", 
                        date: "1 week ago" 
                      },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-[#3E6D9C]/30 bg-[#1A2130]">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activity.type === "expense" 
                              ? "bg-[#FF6B6B]/20" 
                              : activity.type === "tax" 
                                ? "bg-[#3E6D9C]/20" 
                                : "bg-[#00C9A7]/20"
                          }`}>
                            {activity.type === "expense" ? (
                              <FileText className={`h-5 w-5 text-[#FF6B6B]`} />
                            ) : activity.type === "tax" ? (
                              <Calculator className={`h-5 w-5 text-[#3E6D9C]`} />
                            ) : (
                              <Users className={`h-5 w-5 text-[#00C9A7]`} />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{activity.title}</div>
                            <div className="text-xs text-[#F0F4F8]/70">{activity.business} • {activity.date}</div>
                          </div>
                        </div>
                        {activity.amount && (
                          <div className="font-medium">{activity.amount}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="businesses" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Tech Solutions LLC",
                    type: "Technology",
                    employees: 5,
                    expenses: "$12,450.75",
                    status: "active"
                  },
                  {
                    name: "Creative Design Studio",
                    type: "Design Agency",
                    employees: 4,
                    expenses: "$8,320.45",
                    status: "active"
                  },
                  {
                    name: "Web Development Inc",
                    type: "Software Development",
                    employees: 3,
                    expenses: "$3,789.69",
                    status: "archived"
                  },
                ].map((business, i) => (
                  <Card key={i} className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle>{business.name}</CardTitle>
                        <div className={`px-2 py-1 rounded-full text-xs ${
                          business.status === "active" 
                            ? "bg-[#00C9A7]/20 text-[#00C9A7]" 
                            : "bg-[#F0F4F8]/20 text-[#F0F4F8]"
                        }`}>
                          {business.status === "active" ? "Active" : "Archived"}
                        </div>
                      </div>
                      <CardDescription>{business.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-[#F0F4F8]/70">Employees</div>
                          <div className="font-medium">{business.employees}</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-[#F0F4F8]/70">Monthly Expenses</div>
                          <div className="font-medium">{business.expenses}</div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/business/${i}`}>
                          View Details
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/business/${i}/taxes`}>
                          <Calculator className="mr-2 h-4 w-4" />
                          Tax Calculator
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30 border-dashed flex flex-col items-center justify-center p-6">
                  <div className="w-16 h-16 rounded-full bg-[#3E6D9C]/20 flex items-center justify-center mb-4">
                    <Plus className="h-8 w-8 text-[#00C9A7]" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Add New Business</h3>
                  <p className="text-sm text-[#F0F4F8]/70 text-center mb-4">
                    Create a new business to track expenses and taxes
                  </p>
                  <Button className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]" asChild>
                    <Link href="/business/create">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Business
                    </Link>
                  </Button>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="employees" className="space-y-6">
              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Employee Directory</CardTitle>
                  <Button className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Employee
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-md border border-[#3E6D9C]/20">
                    <div className="grid grid-cols-5 border-b border-[#3E6D9C]/20 bg-[#1A2130]/30 p-4 text-sm font-medium">
                      <div>Name</div>
                      <div>Position</div>
                      <div>Business</div>
                      <div>Status</div>
                      <div>Actions</div>
                    </div>
                    {[
                      { 
                        name: "Alex Johnson", 
                        position: "Senior Developer", 
                        business: "Tech Solutions LLC", 
                        status: "Full-time" 
                      },
                      { 
                        name: "Sarah Williams", 
                        position: "UI/UX Designer", 
                        business: "Creative Design Studio", 
                        status: "Full-time" 
                      },
                      { 
                        name: "Michael Brown", 
                        position: "Project Manager", 
                        business: "Tech Solutions LLC", 
                        status: "Full-time" 
                      },
                      { 
                        name: "Emily Davis", 
                        position: "Marketing Specialist", 
                        business: "Creative Design Studio", 
                        status: "Part-time" 
                      },
                      { 
                        name: "David Wilson", 
                        position: "Backend Developer", 
                        business: "Web Development Inc", 
                        status: "Contract" 
                      },
                      { 
                        name: "Jessica Taylor", 
                        position: "Graphic Designer", 
                        business: "Creative Design Studio", 
                        status: "Full-time" 
                      },
                      { 
                        name: "Ryan Martinez", 
                        position: "DevOps Engineer", 
                        business: "Tech Solutions LLC", 
                        status: "Full-time" 
                      },
                    ].map((employee, i) => (
                      <div key={i} className="grid grid-cols-5 border-b border-[#3E6D9C]/20 p-4 text-sm last:border-0">
                        <div className="font-medium">{employee.name}</div>
                        <div>{employee.position}</div>
                        <div>{employee.business}</div>
                        <div>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            employee.status === "Full-time" 
                              ? "bg-[#00C9A7]/20 text-[#00C9A7]" 
                              : employee.status === "Part-time"
                                ? "bg-[#FFD166]/20 text-[#FFD166]"
                                : "bg-[#3E6D9C]/20 text-[#3E6D9C]"
                          }`}>
                            {employee.status}
                          </span>
                        </div>
                        <div>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="taxes" className="space-y-6">
              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Tax Calendar</CardTitle>
                  <CardDescription>Upcoming tax deadlines and payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Quarterly Estimated Tax", 
                        business: "All Businesses", 
                        dueDate: "June 15, 2023", 
                        amount: "$5,230.45",
                        status: "upcoming",
                        daysLeft: 12
                      },
                      { 
                        title: "Payroll Tax", 
                        business: "Tech Solutions LLC", 
                        dueDate: "July 31, 2023", 
                        amount: "$2,450.78",
                        status: "upcoming",
                        daysLeft: 58
                      },
                      { 
                        title: "Sales Tax", 
                        business: "Creative Design Studio", 
                        dueDate: "May 20, 2023", 
                        amount: "$875.32",
                        status: "completed",
                        daysLeft: 0
                      },
                      { 
                        title: "Annual Business Tax Return", 
                        business: "Web Development Inc", 
                        dueDate: "April 15, 2023", 
                        amount: "$3,120.90",
                        status: "completed",
                        daysLeft: 0
                      },
                    ].map((tax, i) => (
                      <div key={i} className={`p-4 rounded-lg border ${
                        tax.status === "upcoming" 
                          ? "border-[#FFD166]/30 bg-[#FFD166]/5" 
                          : "border-[#3E6D9C]/30 bg-[#1A2130]"
                      }`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium">{tax.title}</div>
                            <div className="text-xs text-[#F0F4F8]/70">{tax.business}</div>
                          </div>
                          {tax.status === "upcoming" ? (
                            <div className="px-2 py-1 rounded-full text-xs bg-[#FFD166]/20 text-[#FFD166]">
                              {tax.daysLeft} days left
                            </div>
                          ) : (
                            <div className="px-2 py-1 rounded-full text-xs bg-[#00C9A7]/20 text-[#00C9A7]">
                              Completed
                            </div>
                          )}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">Due: {tax.dueDate}</div>
                          <div className="font-medium">{tax.amount}</div>
                        </div>
                        {tax.status === "upcoming" && (
                          <div className="mt-3">
                            <Button size="sm" className="w-full bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]">
                              <Calculator className="mr-2 h-4 w-4" />
                              Calculate & Pay
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/business/taxes">
                      View All Tax Information
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}