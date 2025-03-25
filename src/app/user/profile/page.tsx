"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, CreditCard, Edit, LogOut, Mail, Save, Settings, User, Check } from 'lucide-react'
import { motion } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A2130] to-[#2A3B4C] text-[#F0F4F8]">
      <header className="border-b border-[#3E6D9C]/20 bg-[#1A2130]/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-[#3E6D9C]">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                    <AvatarFallback className="text-4xl bg-[#3E6D9C]">JD</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon" 
                    className="absolute bottom-0 right-0 rounded-full bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]"
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit profile picture</span>
                  </Button>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">John Doe</h1>
                    <p className="text-[#F0F4F8]/70">john.doe@example.com</p>
                  </div>
                  <Button 
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className={isEditing ? "bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]" : ""}
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"
                      />
                    ) : isEditing ? (
                      <Save className="mr-2 h-4 w-4" />
                    ) : (
                      <Edit className="mr-2 h-4 w-4" />
                    )}
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  <div className="bg-[#3E6D9C]/30 px-3 py-1 rounded-full text-sm">
                    Member since Oct 2023
                  </div>
                  <div className="bg-[#3E6D9C]/30 px-3 py-1 rounded-full text-sm">
                    5 active groups
                  </div>
                  <div className="bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1 rounded-full text-sm">
                    All settled up
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <Tabs defaultValue="profile" className="space-y-8">
            <TabsList className="bg-[#2A3B4C] border border-[#3E6D9C]/20 p-1">
              <TabsTrigger value="profile" className="data-[state=active]:bg-[#3E6D9C] data-[state=active]:text-[#F0F4F8]">
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="payment" className="data-[state=active]:bg-[#3E6D9C] data-[state=active]:text-[#F0F4F8]">
                <CreditCard className="h-4 w-4 mr-2" />
                Payment Methods
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-[#3E6D9C] data-[state=active]:text-[#F0F4F8]">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-[#3E6D9C] data-[state=active]:text-[#F0F4F8]">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input 
                          id="first-name" 
                          defaultValue="John" 
                          disabled={!isEditing}
                          className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8] disabled:opacity-70"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input 
                          id="last-name" 
                          defaultValue="Doe" 
                          disabled={!isEditing}
                          className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8] disabled:opacity-70"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                          <Input 
                            id="email" 
                            defaultValue="john.doe@example.com" 
                            disabled={!isEditing}
                            className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8] pl-10 disabled:opacity-70"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          defaultValue="+1 (555) 123-4567" 
                          disabled={!isEditing}
                          className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8] disabled:opacity-70"
                        />
                      </div>
                    </div>

                    <Separator className="bg-[#3E6D9C]/20 my-6" />

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea 
                        id="bio" 
                        rows={4}
                        defaultValue="I'm a software developer who loves to travel and split expenses with friends."
                        disabled={!isEditing}
                        className="w-full rounded-md border border-[#3E6D9C]/30 bg-[#1A2130] p-3 text-[#F0F4F8] disabled:opacity-70"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader>
                    <CardTitle>Default Currency</CardTitle>
                    <CardDescription>Set your preferred currency for transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["USD", "EUR", "GBP"].map((currency, i) => (
                        <div 
                          key={currency}
                          className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                            currency === "USD" 
                              ? "border-[#00C9A7] bg-[#00C9A7]/5" 
                              : "border-[#3E6D9C]/30 bg-[#1A2130]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#3E6D9C]/20 flex items-center justify-center font-medium">
                              {currency === "USD" ? "$" : currency === "EUR" ? "€" : "£"}
                            </div>
                            <div>
                              <div className="font-medium">{currency}</div>
                              <div className="text-sm text-[#F0F4F8]/70">
                                {currency === "USD" ? "US Dollar" : currency === "EUR" ? "Euro" : "British Pound"}
                              </div>
                            </div>
                          </div>
                          {currency === "USD" && (
                            <div className="w-5 h-5 rounded-full bg-[#00C9A7] flex items-center justify-center">
                              <Check className="w-3 h-3 text-[#1A2130]" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="payment" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Payment Methods</CardTitle>
                      <CardDescription>Manage your payment options</CardDescription>
                    </div>
                    <Button className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]">
                      Add New
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg border border-[#3E6D9C]/30 bg-[#1A2130]">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
                            Visa
                          </div>
                          <div>
                            <div className="font-medium">Visa ending in 4242</div>
                            <div className="text-sm text-[#F0F4F8]/70">Expires 12/2025</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[#00C9A7] text-sm font-medium">Default</div>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg border border-[#3E6D9C]/30 bg-[#1A2130]">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-red-500 rounded-md flex items-center justify-center text-white font-bold">
                            MC
                          </div>
                          <div>
                            <div className="font-medium">Mastercard ending in 5678</div>
                            <div className="text-sm text-[#F0F4F8]/70">Expires 08/2024</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 text-[#00C9A7]">
                            Set Default
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { title: "New Expenses", description: "When someone adds you to an expense" },
                      { title: "Payment Reminders", description: "When you need to settle up" },
                      { title: "Group Activity", description: "When there's activity in your groups" },
                      { title: "Budget Alerts", description: "When you exceed your budget limits" },
                      { title: "Monthly Summaries", description: "Get a monthly summary of your expenses" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-[#F0F4F8]/70">{item.description}</div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <Switch id={`email-${i}`} defaultChecked={i !== 3} />
                            <Label htmlFor={`email-${i}`} className="text-sm">Email</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Switch id={`push-${i}`} defaultChecked={i !== 4} />
                            <Label htmlFor={`push-${i}`} className="text-sm">Push</Label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {[
                        { title: "Dark Mode", description: "Use dark theme throughout the app" },
                        { title: "Automatic Settlement", description: "Automatically settle debts when possible" },
                        { title: "Email Receipts", description: "Receive email receipts for transactions" },
                        { title: "Two-Factor Authentication", description: "Add an extra layer of security" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-sm text-[#F0F4F8]/70">{item.description}</div>
                          </div>
                          <Switch id={`setting-${i}`} defaultChecked={i === 0 || i === 1} />
                        </div>
                      ))}
                    </div>

                    <Separator className="bg-[#3E6D9C]/20 my-6" />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Danger Zone</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                        <div>
                          <div className="font-medium">Delete Account</div>
                          <div className="text-sm text-[#F0F4F8]/70">
                            Permanently delete your account and all data
                          </div>
                        </div>
                        <Button variant="destructive" size="sm">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}