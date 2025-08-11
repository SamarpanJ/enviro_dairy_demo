'use client'

import { useState, useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight } from 'lucide-react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  country: string
  productInterest: string
  volume: string
  message: string
  newsletter: boolean
}

interface ContactFormProps {
  className?: string
}

export const ContactForm = memo(function ContactForm({ className }: ContactFormProps) {
  // Individual state hooks for better performance
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [country, setCountry] = useState('')
  const [productInterest, setProductInterest] = useState('')
  const [volume, setVolume] = useState('')
  const [message, setMessage] = useState('')
  const [newsletter, setNewsletter] = useState(false)

  // Memoized form submission handler
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    const formData: FormData = {
      firstName,
      lastName,
      email,
      company,
      country,
      productInterest,
      volume,
      message,
      newsletter
    }
    console.log('Form submitted:', formData)
  }, [firstName, lastName, email, company, country, productInterest, volume, message, newsletter])

  return (
    <Card className={`border-0 shadow-2xl ${className}`}>
      <CardHeader className="p-10 pb-8">
        <CardTitle className="text-display-3 text-heading text-black">Send Us a Message</CardTitle>
        <p className="text-body-lg text-body text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
      </CardHeader>
      <CardContent className="p-10 pt-0">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-body-sm font-medium text-gray-700">First Name *</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-12 border-2 border-gray-200 focus:border-green-600 transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-body-sm font-medium text-gray-700">Last Name *</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="h-12 border-2 border-gray-200 focus:border-green-600 transition-colors"
                required
              />
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-body-sm font-medium text-gray-700">Business Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-2 border-gray-200 focus:border-green-600 transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-body-sm font-medium text-gray-700">Company Name *</Label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="h-12 border-2 border-gray-200 focus:border-green-600 transition-colors"
                required
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="country" className="text-body-sm font-medium text-gray-700">Country *</Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-600">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="jp">Japan</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="productInterest" className="text-body-sm font-medium text-gray-700">Product Interest</Label>
              <Select value={productInterest} onValueChange={setProductInterest}>
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-600">
                  <SelectValue placeholder="Select product category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="milk">Premium Fresh Milk</SelectItem>
                  <SelectItem value="cheese">Artisan Cheese</SelectItem>
                  <SelectItem value="butter">Organic Butter</SelectItem>
                  <SelectItem value="yogurt">Probiotic Yogurt</SelectItem>
                  <SelectItem value="all">All Products</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="volume" className="text-body-sm font-medium text-gray-700">Expected Monthly Volume</Label>
            <Select value={volume} onValueChange={setVolume}>
              <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-600">
                <SelectValue placeholder="Select volume range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Less than 1,000 units</SelectItem>
                <SelectItem value="medium">1,000 - 10,000 units</SelectItem>
                <SelectItem value="large">10,000 - 50,000 units</SelectItem>
                <SelectItem value="enterprise">50,000+ units</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-body-sm font-medium text-gray-700">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your specific requirements, timeline, and any questions you have..."
              className="min-h-[120px] border-2 border-gray-200 focus:border-green-600 transition-colors resize-none"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={newsletter}
              onCheckedChange={(checked) => setNewsletter(checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-body-sm text-body text-gray-600">
              Subscribe to our newsletter for industry insights and updates
            </Label>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Send Message
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
})
