'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin, Clock, Globe, Users, Award, Leaf, ArrowRight, CheckCircle, Building, Truck, Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { InteractiveMap } from "@/components/interactive-map"
import { EnviroNavbar } from "@/components/enviro-navbar"
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    productInterest: '',
    volume: '',
    message: '',
    newsletter: false
  })

  const formAnimation = useScrollAnimation(0.2)
  const contactInfoAnimation = useScrollAnimation(0.2)
  const officesAnimation = useScrollAnimation(0.2)
  const officesStagger = useStaggeredAnimation(3, 0.1, 150)
  const faqAnimation = useScrollAnimation(0.2)
  const faqStagger = useStaggeredAnimation(4, 0.1, 100)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      <EnviroNavbar />

      <main className="flex-1">
        {/* Hero Section - Simple Premium Design */}
        <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-white" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
          
          {/* Premium Organic Blob Animations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-16 left-12 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-green-300/20 organic-blob-1 backdrop-blur-sm" 
              style={{animation: 'morph-float-1 16s ease-in-out infinite'}}
            ></div>
            <div 
              className="absolute top-32 right-16 w-72 h-72 bg-gradient-to-bl from-green-300/25 to-emerald-400/18 organic-blob-2 backdrop-blur-sm" 
              style={{animation: 'morph-float-2 20s ease-in-out infinite'}}
            ></div>
            <div 
              className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-tr from-green-200/35 to-emerald-200/22 organic-blob-3 backdrop-blur-sm" 
              style={{animation: 'morph-float-3 14s ease-in-out infinite'}}
            ></div>
            <div 
              className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-br from-emerald-300/28 to-green-400/16 organic-blob-4 backdrop-blur-sm" 
              style={{animation: 'morph-float-4 22s ease-in-out infinite'}}
            ></div>
            <div 
              className="absolute bottom-16 right-20 w-88 h-88 bg-gradient-to-tl from-green-100/40 to-emerald-100/25 organic-blob-5 backdrop-blur-sm" 
              style={{animation: 'morph-float-5 18s ease-in-out infinite'}}
            ></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              {/* Simple Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100/80 to-emerald-100/80 border border-green-200/60 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <Mail className="w-3 h-3 text-green-700" />
                <span className="text-sm font-semibold text-green-800">Get In Touch</span>
              </div>
              
              {/* Simple Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95]">
                  <span className="block text-gray-900">Let's Start Your</span>
                  <span className="block bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 bg-clip-text text-transparent">
                    Export Journey
                  </span>
                </h1>
                
                {/* Simple Decorative Line */}
                <div className="flex items-center justify-center gap-3 mt-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full" />
                  <div className="h-1 w-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
                </div>
              </div>

              {/* Simple Description */}
              <p className="text-xl text-gray-700 max-w-[700px] mx-auto leading-relaxed">
                Ready to connect with global markets? Our dairy export specialists are here to guide you 
                through every step of the process with personalized solutions and premium support.
              </p>
            </div>
          </div>


        </section>

        {/* Contact Form & Info Section */}
        <section className="w-full py-20 bg-gradient-to-br from-white via-green-50/20 to-emerald-50/30 relative overflow-hidden">
          {/* Premium background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,197,94,0.08)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.06)_0%,_transparent_50%)]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-16 lg:grid-cols-3 lg:gap-20">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card 
                  ref={formAnimation.ref}
                  className={`border-0 shadow-2xl transition-all duration-700 ${
                    formAnimation.isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <CardHeader className="p-10 pb-8">
                    <CardTitle className="text-3xl font-bold text-black">Send Us a Message</CardTitle>
                    <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </CardHeader>
                  <CardContent className="p-10 pt-0">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="h-12 border-2 border-gray-200 focus:border-green-600 transition-colors"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="h-12 border-2 border-gray-200 focus:border-green-600 transition-colors"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Business Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="h-12 border-2 border-gray-200 focus:border-green-600 transition-colors"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-semibold text-gray-700">Company Name *</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="h-12 border-2 border-gray-200 focus:border-green-600 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="country" className="text-sm font-semibold text-gray-700">Country *</Label>
                          <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
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
                          <Label htmlFor="productInterest" className="text-sm font-semibold text-gray-700">Product Interest</Label>
                          <Select value={formData.productInterest} onValueChange={(value) => setFormData({...formData, productInterest: value})}>
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
                        <Label htmlFor="volume" className="text-sm font-semibold text-gray-700">Expected Monthly Volume</Label>
                        <Select value={formData.volume} onValueChange={(value) => setFormData({...formData, volume: value})}>
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
                        <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Tell us about your specific requirements, timeline, and any questions you have..."
                          className="min-h-[120px] border-2 border-gray-200 focus:border-green-600 transition-colors resize-none"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                        />
                        <Label htmlFor="newsletter" className="text-sm text-gray-600">
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
              </div>

              {/* Contact Information */}
              <div 
                ref={contactInfoAnimation.ref}
                className={`space-y-8 transition-all duration-700 ${
                  contactInfoAnimation.isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
              >
                {/* Contact Details */}
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Email</h4>
                          <p className="text-gray-600">export@enviro-dairy.com</p>
                          <p className="text-gray-600">sales@enviro-dairy.com</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Phone</h4>
                          <p className="text-gray-600">+1 (555) 123-4567</p>
                          <p className="text-gray-600">+1 (555) 123-4568</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Address</h4>
                          <p className="text-gray-600">123 Export Plaza<br />New York, NY 10001<br />United States</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Business Hours</h4>
                          <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM EST<br />Sat: 9:00 AM - 2:00 PM EST</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-black mb-6">Why Choose Enviro?</h3>
                    <div className="space-y-4">
                      {[
                        { icon: Globe, stat: "75+", label: "Countries Served" },
                        { icon: Users, stat: "500+", label: "Happy Clients" },
                        { icon: Award, stat: "99.8%", label: "Quality Rating" },
                        { icon: Truck, stat: "5K+", label: "Monthly Shipments" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="h-10 w-10 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-black">{item.stat}</div>
                            <div className="text-sm text-gray-600">{item.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-black to-gray-900 text-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">24/7 Emergency Support</h3>
                    <p className="text-gray-300 mb-4">For urgent shipment issues or time-sensitive inquiries</p>
                    <Button variant="outline" className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Emergency Line
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 via-green-50/40 to-white relative overflow-hidden">
          {/* Premium background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(34,197,94,0.03)_0%,_transparent_50%,_rgba(16,185,129,0.02)_100%)]"></div>
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-green-100/30 to-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-emerald-100/25 to-green-200/15 rounded-full blur-3xl"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div 
              ref={officesAnimation.ref}
              className={`text-center space-y-6 mb-16 transition-all duration-700 ${
                officesAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-0 px-4 py-2">
                <Building className="w-3 h-3 mr-1" />
                Global Presence
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Our Office Locations
              </h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                With offices across key markets, we're always close to our clients and partners.
              </p>
            </div>
            <div 
              ref={officesStagger.ref}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  city: "New York",
                  country: "United States",
                  address: "123 Export Plaza, NY 10001",
                  phone: "+1 (555) 123-4567",
                  email: "ny@enviro-dairy.com",
                  type: "Headquarters"
                },
                {
                  city: "London",
                  country: "United Kingdom",
                  address: "45 Dairy Lane, London EC1A 1BB",
                  phone: "+44 20 7123 4567",
                  email: "london@enviro-dairy.com",
                  type: "European Hub"
                },
                {
                  city: "Singapore",
                  country: "Singapore",
                  address: "88 Export Street, Singapore 018956",
                  phone: "+65 6123 4567",
                  email: "singapore@enviro-dairy.com",
                  type: "Asia Pacific"
                }
              ].map((office, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group ${
                    officesStagger.visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-black group-hover:text-green-600 transition-colors">{office.city}</h3>
                        <p className="text-gray-600">{office.country}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{office.type}</Badge>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{office.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{office.phone}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{office.email}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-6 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                      View on Map
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <InteractiveMap />

        {/* FAQ Section */}
        <section className="w-full py-20 bg-gradient-to-b from-white via-slate-50/30 to-green-50/25 relative overflow-hidden">
          {/* Premium background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.04)_0%,_transparent_60%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_rgba(16,185,129,0.02)_0%,_transparent_40%,_rgba(34,197,94,0.025)_80%,_transparent_100%)]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div 
              ref={faqAnimation.ref}
              className={`text-center space-y-6 mb-16 transition-all duration-700 ${
                faqAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-0 px-4 py-2">
                <CheckCircle className="w-3 h-3 mr-1" />
                Frequently Asked Questions
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Quick Answers
              </h2>
            </div>
            <div 
              ref={faqStagger.ref}
              className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto"
            >
              {[
                {
                  question: "What is your minimum order quantity?",
                  answer: "Our minimum order quantity varies by product, typically starting from 1,000 units for most dairy products. We also offer flexible solutions for smaller orders."
                },
                {
                  question: "How long does international shipping take?",
                  answer: "Shipping times vary by destination, typically 5-15 business days for most countries. We provide real-time tracking and guaranteed delivery dates."
                },
                {
                  question: "Do you provide quality certifications?",
                  answer: "Yes, all our products come with comprehensive quality certifications including ISO 22000, HACCP, and country-specific import certifications."
                },
                {
                  question: "Can you handle custom packaging requirements?",
                  answer: "We offer custom packaging solutions including private labeling, special sizing, and eco-friendly packaging options to meet your specific needs."
                }
              ].map((faq, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    faqStagger.visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Premium footer background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.08)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(16,185,129,0.03)_0%,_transparent_50%,_rgba(34,197,94,0.04)_100%)]"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Company Info - Left */}
            <div className="space-y-3 lg:max-w-sm">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-lg">
                  <Leaf className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Enviro</span>
                  <div className="text-xs text-green-400 font-medium tracking-wider">DAIRY EXPORTS</div>
                </div>
              </Link>
              <p className="text-gray-300 leading-relaxed text-sm">
                Premium dairy exports connecting sustainable farms to global markets with 
                uncompromising quality and environmental responsibility since 1995.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 pt-4">
                <Link href="/" className="group">
                  <div className="h-10 w-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-all duration-300 group-hover:scale-110">
                    <Facebook className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link href="/" className="group">
                  <div className="h-10 w-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-all duration-300 group-hover:scale-110">
                    <Twitter className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link href="/" className="group">
                  <div className="h-10 w-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-all duration-300 group-hover:scale-110">
                    <Instagram className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                </Link>
                <Link href="/" className="group">
                  <div className="h-10 w-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Quick Links & Contact - Right */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
              {/* Quick Links */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">Quick Links</h4>
                <ul className="space-y-1.5 text-gray-300">
                  <li><Link href="/" className="hover:text-green-400 transition-colors duration-300 text-sm flex items-center group">
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </Link></li>
                  <li><Link href="/contact" className="hover:text-green-400 transition-colors duration-300 text-sm flex items-center group">
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </Link></li>
                  <li><Link href="/#services" className="hover:text-green-400 transition-colors duration-300 text-sm flex items-center group">
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Services
                  </Link></li>
                  <li><Link href="/#products" className="hover:text-green-400 transition-colors duration-300 text-sm flex items-center group">
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Products
                  </Link></li>
                  <li><Link href="/#sustainability" className="hover:text-green-400 transition-colors duration-300 text-sm flex items-center group">
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Sustainability
                  </Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center space-x-2.5 group">
                    <div className="h-3 w-3 bg-green-400 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-sm">export@enviro-dairy.com</span>
                  </div>
                  <div className="flex items-center space-x-2.5 group">
                    <div className="h-3 w-3 bg-green-400 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2.5 group">
                    <div className="h-3 w-3 bg-green-400 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                    <span className="text-sm">New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-6 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} Enviro Dairy Exports. All rights reserved.</p>
            <div className="flex space-x-4 text-xs text-gray-400">
              <Link href="#" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-green-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-green-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
