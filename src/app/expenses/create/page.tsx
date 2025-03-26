"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, DollarSign, Hash, Info, Receipt, Users } from 'lucide-react'
import { motion } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Icon3D from "@/components/3d/icon-3d"

export default function CreateExpensePage() {
  const [splitMethod, setSplitMethod] = useState("equal")
  const [selectedMembers, setSelectedMembers] = useState<string[]>(["1", "2", "3"])
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect would happen here
    }, 1500)
  }
  
  const toggleMember = (id: string) => {
    if (selectedMembers.includes(id)) {
      setSelectedMembers(selectedMembers.filter(memberId => memberId !== id))
    } else {
      setSelectedMembers([...selectedMembers, id])
    }
  }

  return (
    <div className="min-h-screen bg-[#1A2130] text-[#F0F4F8]">
      <header className="border-b border-[#3E6D9C]/20 bg-[#2A3B4C]">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#F0F4F8]/70 hover:text-[#F0F4F8]">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12">
              <Icon3D type="receipt" size={48} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Add an Expense</h1>
              <p className="text-[#F0F4F8]/70">Create a new expense and split it with your friends</p>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Expense Details</CardTitle>
                  <CardDescription>Enter the basic information about this expense</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <div className="relative">
                      <Info className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                      <Input 
                        id="description" 
                        placeholder="What was this expense for?" 
                        className="bg-[#1A2130] border-[#3E6D9C]/30 pl-10 text-[#F0F4F8]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                        <Input 
                          id="amount" 
                          type="number" 
                          placeholder="0.00" 
                          step="0.01" 
                          min="0.01"
                          className="bg-[#1A2130] border-[#3E6D9C]/30 pl-10 text-[#F0F4F8]"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                        <Input 
                          id="date" 
                          type="date" 
                          defaultValue={new Date().toISOString().split('T')[0]}
                          className="bg-[#1A2130] border-[#3E6D9C]/30 pl-10 text-[#F0F4F8]"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select defaultValue="food">
                        <SelectTrigger className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectItem value="food">Food & Drinks</SelectItem>
                          <SelectItem value="entertainment">Entertainment</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                          <SelectItem value="utilities">Utilities</SelectItem>
                          <SelectItem value="rent">Rent</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="group">Group</Label>
                      <Select defaultValue="roommates">
                        <SelectTrigger className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectValue placeholder="Select a group" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectItem value="roommates">Roommates</SelectItem>
                          <SelectItem value="friends">Friends</SelectItem>
                          <SelectItem value="work">Work</SelectItem>
                          <SelectItem value="trip">Trip to Vegas</SelectItem>
                          <SelectItem value="family">Family</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Add any additional details about this expense"
                      className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Split Details</CardTitle>
                  <CardDescription>Choose how to split this expense</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>Split Method</Label>
                    <RadioGroup 
                      defaultValue="equal" 
                      value={splitMethod} 
                      onValueChange={setSplitMethod}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="equal" id="equal" className="text-[#00C9A7]" />
                        <Label htmlFor="equal" className="cursor-pointer">Equal Split</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="percentage" id="percentage" className="text-[#00C9A7]" />
                        <Label htmlFor="percentage" className="cursor-pointer">Percentage</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="custom" id="custom" className="text-[#00C9A7]" />
                        <Label htmlFor="custom" className="cursor-pointer">Custom Amounts</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator className="bg-[#3E6D9C]/20" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Who&apos;s Involved?</Label>
                      <Button variant="outline" size="sm" type="button">
                        Select All
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { id: "1", name: "You", avatar: "/placeholder.svg?height=40&width=40", initials: "JD" },
                        { id: "2", name: "Alex Smith", avatar: "/placeholder.svg?height=40&width=40", initials: "AS" },
                        { id: "3", name: "Taylor Johnson", avatar: "/placeholder.svg?height=40&width=40", initials: "TJ" },
                        { id: "4", name: "Jordan Lee", avatar: "/placeholder.svg?height=40&width=40", initials: "JL" },
                        { id: "5", name: "Morgan Williams", avatar: "/placeholder.svg?height=40&width=40", initials: "MW" },
                      ].map((member) => (
                        <div 
                          key={member.id}
                          className={`flex items-center justify-between p-3 rounded-lg border ${
                            selectedMembers.includes(member.id) 
                              ? "border-[#00C9A7] bg-[#00C9A7]/5" 
                              : "border-[#3E6D9C]/30 bg-[#1A2130]"
                          } cursor-pointer`}
                          onClick={() => toggleMember(member.id)}
                        >
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback className="bg-[#3E6D9C]">{member.initials}</AvatarFallback>
                            </Avatar>
                            <div>{member.name}</div>
                          </div>
                          {splitMethod !== "equal" && selectedMembers.includes(member.id) && (
                            <div className="w-20">
                              <Input 
                                type={splitMethod === "percentage" ? "number" : "text"} 
                                placeholder={splitMethod === "percentage" ? "%" : "$"}
                                className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8] h-8 text-sm"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {splitMethod === "equal" && selectedMembers.length > 0 && (
                    <div className="bg-[#1A2130] p-4 rounded-lg">
                      <div className="text-sm text-[#F0F4F8]/70 mb-2">Split Preview</div>
                      <div className="flex items-center justify-between">
                        <div>Each person pays:</div>
                        <div className="font-bold">$0.00</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="flex justify-end gap-4">
                <Button variant="outline" type="button" asChild>
                  <Link href="/user/dashboard">Cancel</Link>
                </Button>
                <Button 
                  type="submit" 
                  className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]"
                  disabled={isSubmitting || selectedMembers.length === 0}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-[#1A2130] border-t-transparent rounded-full mr-2"
                    />
                  ) : null}
                  {isSubmitting ? "Creating..." : "Create Expense"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}