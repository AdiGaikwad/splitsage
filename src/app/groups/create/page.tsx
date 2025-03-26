"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Plus, Search, Users, X } from 'lucide-react'
import { motion } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import Icon3D from "@/components/3d/icon-3d"

export default function CreateGroupPage() {
  const [selectedMembers, setSelectedMembers] = useState<string[]>(["1"])
  const [searchQuery, setSearchQuery] = useState("")
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

  const contacts = [
    { id: "2", name: "Alex Smith", email: "alex@example.com", avatar: "/placeholder.svg?height=40&width=40", initials: "AS" },
    { id: "3", name: "Taylor Johnson", email: "taylor@example.com", avatar: "/placeholder.svg?height=40&width=40", initials: "TJ" },
    { id: "4", name: "Jordan Lee", email: "jordan@example.com", avatar: "/placeholder.svg?height=40&width=40", initials: "JL" },
    { id: "5", name: "Morgan Williams", email: "morgan@example.com", avatar: "/placeholder.svg?height=40&width=40", initials: "MW" },
    { id: "6", name: "Casey Brown", email: "casey@example.com", avatar: "/placeholder.svg?height=40&width=40", initials: "CB" },
    { id: "7", name: "Riley Garcia", email: "riley@example.com", avatar: "/placeholder.svg?height=40&width=40", initials: "RG" },
  ]

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
              <Icon3D type="split" size={48} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Create a Group</h1>
              <p className="text-[#F0F4F8]/70">Start tracking expenses with friends, roommates, or colleagues</p>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Group Details</CardTitle>
                  <CardDescription>Enter the basic information about this group</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Group Name</Label>
                    <Input 
                      id="name" 
                      placeholder="e.g., Roommates, Trip to Paris, Work Team" 
                      className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea 
                      id="description" 
                      placeholder="What is this group for?"
                      className="bg-[#1A2130] border-[#3E6D9C]/30 text-[#F0F4F8]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2A3B4C] border-[#3E6D9C]/30">
                <CardHeader>
                  <CardTitle>Group Members</CardTitle>
                  <CardDescription>Add people to your group</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="search">Search Contacts</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#F0F4F8]/40" />
                      <Input 
                        id="search" 
                        placeholder="Search by name or email" 
                        className="bg-[#1A2130] border-[#3E6D9C]/30 pl-10 text-[#F0F4F8]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Selected Members ({selectedMembers.length})</Label>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 bg-[#3E6D9C]/20 rounded-full px-3 py-1">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="You" />
                          <AvatarFallback className="bg-[#3E6D9C] text-xs">JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">You</span>
                      </div>
                      
                      {contacts
                        .filter(contact => selectedMembers.includes(contact.id))
                        .map(member => (
                          <div key={member.id} className="flex items-center gap-2 bg-[#3E6D9C]/20 rounded-full px-3 py-1">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback className="bg-[#3E6D9C] text-xs">{member.initials}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{member.name}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-5 w-5 rounded-full hover:bg-[#FF6B6B]/20 hover:text-[#FF6B6B]"
                              onClick={() => toggleMember(member.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                    </div>
                  </div>

                  <Separator className="bg-[#3E6D9C]/20" />

                  <div className="space-y-4">
                    <Label>Available Contacts</Label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-80 overflow-y-auto pr-2">
                      {filteredContacts.map((contact) => (
                        <div 
                          key={contact.id}
                          className={`flex items-center justify-between p-3 rounded-lg border ${
                            selectedMembers.includes(contact.id) 
                              ? "border-[#00C9A7] bg-[#00C9A7]/5" 
                              : "border-[#3E6D9C]/30 bg-[#1A2130]"
                          } cursor-pointer`}
                          onClick={() => toggleMember(contact.id)}
                        >
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={contact.avatar} alt={contact.name} />
                              <AvatarFallback className="bg-[#3E6D9C]">{contact.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div>{contact.name}</div>
                              <div className="text-xs text-[#F0F4F8]/70">{contact.email}</div>
                            </div>
                          </div>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            selectedMembers.includes(contact.id) 
                              ? "bg-[#00C9A7]" 
                              : "bg-[#3E6D9C]/20"
                          }`}>
                            {selectedMembers.includes(contact.id) && (
                              <Check className="h-4 w-4 text-[#1A2130]" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" type="button" className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Invite by Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-4">
                <Button variant="outline" type="button" asChild>
                  <Link href="/user/dashboard">Cancel</Link>
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
                  ) : null}
                  {isSubmitting ? "Creating..." : "Create Group"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}