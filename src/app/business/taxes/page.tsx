"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calculator, Check, ChevronDown, Download, FileText, HelpCircle, Info, Percent, Plus, RefreshCw } from 'lucide-react'
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Icon3D from "@/components/3d/icon-3d"

export default function BusinessTaxCalculationPage() {
  const [businessType, setBusinessType] = useState("llc")
  const [taxYear, setTaxYear] = useState("2023")
  const [isCalculating, setIsCalculating] = useState(false)
  const [showResults, setShowResults] = useState(false)
  
  const handleCalculate = () => {
    setIsCalculating(true)
    // Simulate calculation
    setTimeout(() => {
      setIsCalculating(false)
      setShowResults(true)
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-16">
              <Icon3D type="coin" size={64} color="#FFD166" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Business Tax Calculator</h1>
              <p className="text-[#F0F4F8]/70">Estimate taxes for your business based on income and expenses</p>
            </div>
          </motion.div>

          <Tabs defaultValue="calculator" className="space-y-8">
            <TabsList className="bg-[#2A3B4C] border border-[#3E6D9C]/20">
              <TabsTrigger value="calculator" className="data-[state=active]:bg-[#3E6D9C] data-[state=active]:text-[#F0F4F8]">
                <Calculator className="h-4 w-4 mr-2" />
                Tax Calculator
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-[#3E6D9C] data-[state=active]:text-[#F0F4F8]">
                <FileText className="h-4 w-4 mr-2" />
                Tax History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calculator" className="space-y-6">
              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                  <CardDescription>Select your business type and tax year</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business">Business</Label>
                      <Select defaultValue="tech-solutions">
                        <SelectTrigger className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectValue placeholder="Select a business" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectItem value="tech-solutions">Tech Solutions LLC</SelectItem>
                          <SelectItem value="creative-design">Creative Design Studio</SelectItem>
                          <SelectItem value="web-dev">Web Development Inc</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tax-year">Tax Year</Label>
                      <Select value={taxYear} onValueChange={setTaxYear}>
                        <SelectTrigger className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectValue placeholder="Select tax year" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tax-period">Tax Period</Label>
                      <Select defaultValue="q2">
                        <SelectTrigger className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectValue placeholder="Select tax period" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                          <SelectItem value="annual">Annual</SelectItem>
                          <SelectItem value="q1">Q1 (Jan-Mar)</SelectItem>
                          <SelectItem value="q2">Q2 (Apr-Jun)</SelectItem>
                          <SelectItem value="q3">Q3 (Jul-Sep)</SelectItem>
                          <SelectItem value="q4">Q4 (Oct-Dec)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Income & Expenses</CardTitle>
                  <CardDescription>Enter your business income and expenses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-lg font-medium">Income</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="gross-revenue">Gross Revenue</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-[#F0F4F8]/50" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                                <p className="max-w-xs">Total income before any deductions or expenses</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="gross-revenue" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="85000"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="other-income">Other Income</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-[#F0F4F8]/50" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                                <p className="max-w-xs">Interest, dividends, or other non-primary business income</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="other-income" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="2500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-[#3E6D9C]/20" />

                  <div className="space-y-4">
                    <Label className="text-lg font-medium">Expenses</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="payroll">Payroll & Benefits</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="payroll" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="32000"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rent">Rent & Utilities</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="rent" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="12000"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="supplies">Office Supplies & Equipment</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="supplies" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="5600"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="marketing">Marketing & Advertising</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="marketing" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="8500"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="travel">Travel & Entertainment</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="travel" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="3200"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="other-expenses">Other Expenses</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="other-expenses" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="4800"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-[#3E6D9C]/20" />

                  <div className="space-y-4">
                    <Label className="text-lg font-medium">Tax Deductions & Credits</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="retirement">Retirement Contributions</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-[#F0F4F8]/50" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                                <p className="max-w-xs">401(k), SEP IRA, or other qualified retirement plans</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="retirement" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="5000"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="health-insurance">Health Insurance Premiums</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-[#F0F4F8]/50" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                                <p className="max-w-xs">Self-employed health insurance deduction</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="health-insurance" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="4200"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="home-office">Home Office Deduction</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-[#F0F4F8]/50" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                                <p className="max-w-xs">Deduction for business use of your home</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="home-office" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="1800"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="tax-credits">Business Tax Credits</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-[#F0F4F8]/50" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-[#2A3B4C] border-[#3E6D9C]/30 text-[#F0F4F8]">
                                <p className="max-w-xs">R&D, work opportunity, or other business tax credits</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F0F4F8]/50">$</span>
                          <Input 
                            id="tax-credits" 
                            type="number" 
                            placeholder="0.00" 
                            className="bg-[#1A2130] border-[#3E6D9C]/30 pl-8 text-[#F0F4F8]"
                            defaultValue="2500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                  <Button variant="outline" type="button">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                  <Button 
                    className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]"
                    onClick={handleCalculate}
                    disabled={isCalculating}
                  >
                    {isCalculating ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-[#1A2130] border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Calculator className="mr-2 h-4 w-4" />
                    )}
                    {isCalculating ? "Calculating..." : "Calculate Taxes"}
                  </Button>
                </CardFooter>
              </Card>

              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                    <CardHeader>
                      <CardTitle>Tax Calculation Results</CardTitle>
                      <CardDescription>Estimated tax liability for Tech Solutions LLC (Q2 2023)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="text-sm text-[#F0F4F8]/70">Total Income</div>
                            <div className="text-2xl font-bold">$87,500.00</div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm text-[#F0F4F8]/70">Total Expenses</div>
                            <div className="text-2xl font-bold">$66,100.00</div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm text-[#F0F4F8]/70">Net Profit</div>
                            <div className="text-2xl font-bold text-[#00C9A7]">$21,400.00</div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="p-4 rounded-lg bg-[#1A2130] border border-[#3E6D9C]/30">
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium">Federal Income Tax</div>
                              <div className="font-bold">$3,210.00</div>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium">Self-Employment Tax</div>
                              <div className="font-bold">$1,637.10</div>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium">State Income Tax</div>
                              <div className="font-bold">$963.00</div>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium">Tax Credits</div>
                              <div className="font-bold text-[#00C9A7]">-$625.00</div>
                            </div>
                            <Separator className="bg-[#3E6D9C]/20 my-3" />
                            <div className="flex justify-between items-center">
                              <div className="font-medium">Total Tax Liability</div>
                              <div className="font-bold text-xl text-[#FFD166]">$5,185.10</div>
                            </div>
                          </div>
                          
                          <div className="p-4 rounded-lg bg-[#00C9A7]/10 border border-[#00C9A7]/30">
                            <div className="flex items-center gap-2 mb-2">
                              <Info className="h-5 w-5 text-[#00C9A7]" />
                              <div className="font-medium">Effective Tax Rate</div>
                            </div>
                            <div className="text-3xl font-bold text-[#00C9A7]">24.2%</div>
                            <div className="text-sm text-[#F0F4F8]/70 mt-1">
                              Based on your net profit
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="bg-[#3E6D9C]/20" />
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Quarterly Estimated Tax Payments</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {["Q1", "Q2", "Q3", "Q4"].map((quarter, i) => (
                            <div 
                              key={i} 
                              className={`p-4 rounded-lg border ${
                                quarter === "Q2" 
                                  ? "bg-[#FFD166]/10 border-[#FFD166]/30" 
                                  : "bg-[#1A2130] border-[#3E6D9C]/30"
                              }`}
                            >
                              <div className="text-sm text-[#F0F4F8]/70 mb-1">{quarter} Payment</div>
                              <div className="text-xl font-bold">
                                {quarter === "Q2" ? "$5,185.10" : "TBD"}
                              </div>
                              <div className="text-xs text-[#F0F4F8]/70 mt-1">
                                {quarter === "Q2" ? "Due June 15, 2023" : ""}
                              </div>
                              {quarter === "Q2" && (
                                <div className="mt-3">
                                  <Button size="sm" className="w-full bg-[#FFD166] hover:bg-[#FFD166]/90 text-[#1A2130]">
                                    Pay Now
                                  </Button>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                      <Button className="bg-[#00C9A7] hover:bg-[#00C9A7]/90 text-[#1A2130]">
                        <Check className="mr-2 h-4 w-4" />
                        Save Calculation
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )}
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Tax Calculation History</CardTitle>
                  <CardDescription>Previous tax calculations for your businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        business: "Tech Solutions LLC", 
                        period: "Q1 2023", 
                        date: "March 15, 2023", 
                        amount: "$4,850.32",
                        status: "paid"
                      },
                      { 
                        business: "Creative Design Studio", 
                        period: "Q1 2023", 
                        date: "March 12, 2023", 
                        amount: "$2,340.75",
                        status: "paid"
                      },
                      { 
                        business: "Web Development Inc", 
                        period: "Q1 2023", 
                        date: "March 10, 2023", 
                        amount: "$1,875.20",
                        status: "paid"
                      },
                      { 
                        business: "Tech Solutions LLC", 
                        period: "Q4 2022", 
                        date: "December 15, 2022", 
                        amount: "$5,120.45",
                        status: "paid"
                      },
                      { 
                        business: "Creative Design Studio", 
                        period: "Q4 2022", 
                        date: "December 14, 2022", 
                        amount: "$2,780.90",
                        status: "paid"
                      },
                    ].map((record, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-[#3E6D9C]/30 bg-[#1A2130]">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#3E6D9C]/20 flex items-center justify-center">
                            <Calculator className="h-5 w-5 text-[#3E6D9C]" />
                          </div>
                          <div>
                            <div className="font-medium">{record.business}</div>
                            <div className="text-xs text-[#F0F4F8]/70">{record.period} • Calculated on {record.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="font-medium">{record.amount}</div>
                          <div className="px-2 py-1 rounded-full text-xs bg-[#00C9A7]/20 text-[#00C9A7]">
                            {record.status === "paid" ? "Paid" : "Pending"}
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}