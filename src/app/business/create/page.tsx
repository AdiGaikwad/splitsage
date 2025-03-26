"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Building2, Check, Info, Save } from 'lucide-react'
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import Icon3D from "@/components/3d/icon-3d"

export default function CreateBusinessPage() {
  const [businessType, setBusinessType] = useState("llc")
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

  return (
    <div className="min-h-screen bg-[#1A2130] text-[#F0F4F8]">
      <header className="border-b border-[#3E6D9C]/20 bg-[#2A3B4C]">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link href="/business" className="flex items-center gap-2 text-[#F0F4F8]/70 hover:text-[#F0F4F8]">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Business Management</span>
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
              <Icon3D type="card" size={48} color="#00C9A7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Add a Business</h1>
              <p className="text-[#F0F4F8]/70">Create a new business to track expenses and taxes</p>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                  <CardDescription>Enter the basic details about your business</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Business Name</Label>
                    <Input 
                      id="name" 
                      placeholder="e.g., Acme Corporation" 
                      className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-type">Business Type</Label>
                      <Select value={businessType} onValueChange={setBusinessType}>
                        <SelectTrigger className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectItem value="sole-prop">Sole Proprietorship</SelectItem>
                          <SelectItem value="llc">LLC</SelectItem>
                          <SelectItem value="s-corp">S Corporation</SelectItem>
                          <SelectItem value="c-corp">C Corporation</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select defaultValue="technology">
                        <SelectTrigger className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="design">Design & Creative</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Business Description (Optional)</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Brief description of your business"
                      className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Contact & Tax Information</CardTitle>
                  <CardDescription>Enter contact and tax details for your business</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="business@example.com" 
                        className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Business Phone</Label>
                      <Input 
                        id="phone" 
                        placeholder="(123) 456-7890" 
                        className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ein">EIN (Optional)</Label>
                      <Input 
                        id="ein" 
                        placeholder="XX-XXXXXXX" 
                        className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fiscal-year">Fiscal Year End</Label>
                      <Select defaultValue="dec">
                        <SelectTrigger className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectValue placeholder="Select month" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectItem value="jan">January</SelectItem>
                          <SelectItem value="feb">February</SelectItem>
                          <SelectItem value="mar">March</SelectItem>
                          <SelectItem value="apr">April</SelectItem>
                          <SelectItem value="may">May</SelectItem>
                          <SelectItem value="jun">June</SelectItem>
                          <SelectItem value="jul">July</SelectItem>
                          <SelectItem value="aug">August</SelectItem>
                          <SelectItem value="sep">September</SelectItem>
                          <SelectItem value="oct">October</SelectItem>
                          <SelectItem value="nov">November</SelectItem>
                          <SelectItem value="dec">December</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator className="bg-[#3E6D9C]/20 my-4" />
                  
                  <div className="space-y-4">
                    <Label>Tax Filing Frequency</Label>
                    <RadioGroup defaultValue="quarterly" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="quarterly" id="quarterly" className="text-[#00C9A7]" />
                        <Label htmlFor="quarterly" className="cursor-pointer">Quarterly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" className="text-[#00C9A7]" />
                        <Label htmlFor="monthly" className="cursor-pointer">Monthly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="annually" id="annually" className="text-[#00C9A7]" />
                        <Label htmlFor="annually" className="cursor-pointer">Annually</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Business Address</CardTitle>
                  <CardDescription>Enter the physical address of your business</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="street">Street Address</Label>
                    <Input 
                      id="street" 
                      placeholder="123 Business St" 
                      className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="street2">Street Address Line 2 (Optional)</Label>
                    <Input 
                      id="street2" 
                      placeholder="Suite 100" 
                      className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        placeholder="City" 
                        className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input 
                        id="state" 
                        placeholder="State" 
                        className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input 
                        id="zip" 
                        placeholder="ZIP" 
                        className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-4">
                <Button variant="outline" type="button" asChild>
                  <Link href="/business">Cancel</Link>
                </Button>
                <Button 
                  type="submit" 
                  className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-[#1A2130] border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Building2 className="mr-2 h-4 w-4" />
                  )}
                  {isSubmitting ? "Creating..." : "Create Business"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}