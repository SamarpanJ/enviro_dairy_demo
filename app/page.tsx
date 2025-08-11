'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Truck, Globe, Award, Leaf, Shield, Clock, Mail, Phone, MapPin, ChevronRight, Star, Users, TrendingUp, CheckCircle, ArrowRight, Zap, Target, BarChart3, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { TrustedBrands } from "@/components/trusted-brands"
import { ScrollCounter } from "@/components/scroll-counter"
import { ScrollToTop } from "@/components/scroll-to-top"
import { EnviroNavbar } from "@/components/enviro-navbar"
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export default function EnviroLanding() {
  const servicesAnimation = useScrollAnimation(0.2)
  const servicesStagger = useStaggeredAnimation(3, 0.1, 150)
  const productsAnimation = useScrollAnimation(0.2)
  const productsStagger = useStaggeredAnimation(4, 0.1, 200)
  const sustainabilityAnimation = useScrollAnimation(0.2)
  const statsAnimation = useScrollAnimation(0.3)
  
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <ScrollToTop />
      <EnviroNavbar />

      <main className="flex-1">
        {/* Hero Section (refined) */}
        <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-green-200" />
          
          {/* Enhanced Dynamic Background Animations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-green-200/40 to-emerald-300/30 organic-blob-1" 
              style={{animation: 'morph-float-1 12s ease-in-out infinite'}}
            ></div>
            <div 
              className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-bl from-emerald-300/30 to-green-400/20 organic-blob-2" 
              style={{animation: 'morph-float-2 15s ease-in-out infinite'}}
            ></div>
            <div 
              className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-tr from-green-300/35 to-emerald-200/25 organic-blob-3" 
              style={{animation: 'morph-float-3 10s ease-in-out infinite'}}
            ></div>
            <div 
              className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-emerald-200/40 to-green-300/30 organic-blob-4" 
              style={{animation: 'morph-float-4 18s ease-in-out infinite'}}
            ></div>
            <div 
              className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-green-100/50 to-emerald-100/35 organic-blob-5" 
              style={{animation: 'morph-float-5 13s ease-in-out infinite'}}
            ></div>
            <div 
              className="absolute top-20 left-1/2 w-56 h-56 bg-gradient-to-bl from-emerald-400/25 to-green-500/15 organic-blob-6" 
              style={{animation: 'morph-float-6 16s ease-in-out infinite'}}
            ></div>

            <div 
              className="absolute top-3/4 left-1/6 w-40 h-40 bg-gradient-to-r from-green-200/30 to-emerald-300/20 organic-blob-7" 
              style={{animation: 'morph-float-1 14s ease-in-out infinite reverse'}}
            ></div>
            <div 
              className="absolute top-1/4 right-1/6 w-60 h-60 bg-gradient-to-l from-emerald-400/20 to-green-200/25 organic-blob-8" 
              style={{animation: 'morph-float-3 11s ease-in-out infinite reverse'}}
            ></div>
          </div>

          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-black">
                  <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Premium</span>{' '}
                  Dairy Exports
                </h1>
                <p className="mt-6 text-xl text-gray-600 max-w-[640px] leading-relaxed">
                  Delivered worldwide with certified quality and carbon‑neutral logistics. Partner with a
                  team trusted by importers across 75+ countries.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="h-14 px-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform group">
                    <Link href="/contact">
                      Request Proposal
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-14 px-8 border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-700 hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                    <Link href="#products">
                      Browse Products
                    </Link>
                  </Button>
                </div>
                <div className="mt-6 text-sm text-gray-500">Response within 24 hours</div>
              </div>
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/premium-dairy-hero.png"
                  alt="Premium dairy products"
                  width={760}
                  height={640}
                  priority
                  className="rounded-3xl shadow-2xl ring-1 ring-black/5 transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            
            {/* Statistics Box - Below Image */}
            <div className="mt-16 flex justify-center">
              <div 
                ref={statsAnimation.ref}
                className={`flex items-center divide-x divide-gray-200 rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-lg p-8 shadow-xl w-full max-w-4xl transition-all duration-700 ${
                  statsAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex-1 text-center px-8">
                  <div className="text-4xl font-bold text-black">
                    <ScrollCounter end={75} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Countries Served</div>
                </div>
                <div className="flex-1 text-center px-8">
                  <div className="text-4xl font-bold text-black">
                    <ScrollCounter end={5000} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Monthly Shipments</div>
                </div>
                <div className="flex-1 text-center px-8">
                  <div className="text-4xl font-bold text-black">
                    <ScrollCounter end={99.8} decimals={1} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Quality Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators - Infinite marquee with premium styling */}
        <TrustedBrands />

        {/* Services Section */}
        <section id="services" className="w-full py-24 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/40 relative overflow-hidden">
          {/* Premium background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(34,197,94,0.1)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(16,185,129,0.08)_0%,_transparent_50%)]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div 
              ref={servicesAnimation.ref}
              className={`text-center space-y-6 mb-20 transition-all duration-700 ${
                servicesAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-0 px-4 py-2">
                <Target className="w-3 h-3 mr-1" />
                Our Premium Services
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
                End-to-End Export
                <span className="block bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-[900px] mx-auto leading-relaxed">
                From farm sourcing to global delivery, we orchestrate every aspect of dairy export 
                with precision, innovation, and unwavering commitment to excellence.
              </p>
            </div>
            <div 
              ref={servicesStagger.ref}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: Globe,
                  title: "Global Logistics Network",
                  description: "Advanced cold-chain management with real-time tracking across 75+ countries, ensuring optimal product integrity throughout the journey.",
                  features: ["Temperature monitoring", "Real-time tracking", "Custom clearance", "Insurance coverage"]
                },
                {
                  icon: Shield,
                  title: "Quality Assurance Excellence",
                  description: "Comprehensive testing protocols and certification processes that exceed international standards for food safety and quality.",
                  features: ["Lab testing", "Certification", "Compliance audit", "Quality reports"]
                },
                {
                  icon: Clock,
                  title: "Precision Delivery",
                  description: "Guaranteed delivery schedules with flexible logistics solutions tailored to your specific business requirements and timelines.",
                  features: ["On-time delivery", "Flexible scheduling", "Priority handling", "Emergency logistics"]
                }
              ].map((service, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white hover:bg-gradient-to-br hover:from-white hover:to-green-50 ${
                    servicesStagger.visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <CardContent className="p-10">
                    <div className="h-16 w-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-green-700 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="#" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center group-hover:translate-x-1 transition-all">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section id="products" className="w-full py-24 bg-gradient-to-b from-white via-slate-50/50 to-green-50/30 relative overflow-hidden">
          {/* Premium background elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,_rgba(16,185,129,0.02)_0%,_transparent_25%,_rgba(34,197,94,0.03)_75%,_transparent_100%)]"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-green-100/20 to-emerald-100/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-emerald-100/15 to-green-200/10 rounded-full blur-3xl"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div 
              ref={productsAnimation.ref}
              className={`text-center space-y-6 mb-20 transition-all duration-700 ${
                productsAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-0 px-4 py-2">
                <BarChart3 className="w-3 h-3 mr-1" />
                Premium Product Range
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
                Exceptional Dairy
                <span className="block bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Products</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-[900px] mx-auto leading-relaxed">
                Discover our comprehensive range of premium dairy products, each crafted with meticulous attention 
                to quality and designed for global distribution.
              </p>
            </div>
            <div 
              ref={productsStagger.ref}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {[
                { 
                  name: "Premium Fresh Milk", 
                  desc: "Grade A+ pasteurized milk with extended shelf life", 
                  imageSrc: "/premium_fresh_milk.jpg",
                  specs: ["3.5% Fat Content", "Extended Shelf Life", "Vitamin Enriched", "Organic Options"]
                },
                { 
                  name: "Artisan Cheese Collection", 
                  desc: "Hand-crafted aged cheeses from select dairies", 
                  imageSrc: "/artisan_cheese_collection.jpg",
                  specs: ["12+ Varieties", "Aged 6-24 Months", "Award Winning", "Export Certified"]
                },
                { 
                  name: "Organic Butter Range", 
                  desc: "Churned from certified organic cream", 
                  imageSrc: "/organic_butter_range.jpg",
                  specs: ["82% Fat Content", "Organic Certified", "Unsalted Options", "Bulk Available"]
                },
                { 
                  name: "Probiotic Yogurt Series", 
                  desc: "Health-focused probiotic-rich varieties", 
                  imageSrc: "/probiotic_yogurt_series.jpg",
                  specs: ["Live Cultures", "Low Sugar", "Greek Style", "Flavored Options"]
                }
              ].map((product, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden ${
                    productsStagger.visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white border-0">Premium</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-700 transition-colors">{product.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{product.desc}</p>
                      <div className="space-y-2 mb-6">
                        {product.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{spec}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">
                        View Specifications
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section id="sustainability" className="w-full py-24 bg-gradient-to-br from-green-50 via-emerald-50/80 to-white relative overflow-hidden">
          {/* Premium gradient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,0.15)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.12)_0%,_transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_rgba(34,197,94,0.03)_0%,_transparent_30%,_rgba(16,185,129,0.02)_70%,_transparent_100%)]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
              <div 
                ref={sustainabilityAnimation.ref}
                className={`space-y-8 transition-all duration-700 ${
                  sustainabilityAnimation.isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="space-y-6">
                  <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-0 px-4 py-2">
                    <Leaf className="w-3 h-3 mr-1" />
                    Sustainable Excellence
                  </Badge>
                  <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                    Environmental
                    <span className="block bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Responsibility</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our commitment to sustainability drives innovation in every aspect of our operations, 
                    from carbon-neutral shipping to biodegradable packaging solutions that protect our planet 
                    while delivering exceptional quality.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { icon: Truck, title: "Carbon-Neutral Logistics", desc: "100% offset shipping emissions" },
                    { icon: Leaf, title: "Eco-Friendly Packaging", desc: "Biodegradable materials only" },
                    { icon: Users, title: "Fair Trade Practices", desc: "Supporting local communities" },
                    { icon: TrendingUp, title: "Renewable Energy", desc: "Solar-powered facilities" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="h-12 w-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-black mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-12 w-12 rounded-full bg-gradient-to-br from-green-100 to-green-200 border-4 border-white flex items-center justify-center">
                        <span className="text-xs font-bold text-green-700">C{i}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Certified by 500+ sustainability partners</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/sustainability-showcase.png"
                  alt="Sustainable dairy operations"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute -top-8 -left-8 bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-2xl border border-green-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600 font-medium">Carbon Neutral</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl shadow-2xl">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold mb-1">50M+</div>
                    <div className="text-sm opacity-90">Trees Planted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (infinite marquee) */}
        <section className="w-full py-20 bg-gradient-to-b from-white via-gray-50/30 to-green-50/20 relative overflow-hidden">
          {/* Subtle premium background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.02)_0%,_transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,_rgba(16,185,129,0.01)_0%,_transparent_50%,_rgba(34,197,94,0.015)_100%)]"></div>
          <div className="container relative z-10">
            <div className="text-center space-y-4 mb-10">
              <Badge className="bg-green-100 text-green-800 border-0">Client Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">What partners say about us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Real feedback from importers and distributors across the globe.</p>
            </div>

            {/* Row 1 */}
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                <div className="flex gap-3 md:gap-4 flex-shrink-0">
                  {[1,2,3,4,5,6].map((i) => (
                    <Card key={`t1-${i}`} className="border-0 shadow-md w-[260px] flex-shrink-0">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="min-h-10 min-w-10 h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                            GM
                          </div>
                          <div>
                            <div className="font-semibold text-black">Senior Buyer, GlobalMart</div>
                            <div className="text-xs text-gray-500">Dubai, UAE</div>
                          </div>
                        </div>
                        <p className="text-gray-600">"On‑time deliveries and flawless quality. Enviro is our most reliable dairy partner."</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex gap-3 md:gap-4 flex-shrink-0 ml-3 md:ml-4">
                  {[1,2,3,4,5,6].map((i) => (
                    <Card key={`t1b-${i}`} className="border-0 shadow-md w-[260px] flex-shrink-0" aria-hidden="true">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="min-h-10 min-w-10 h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                            GM
                          </div>
                          <div>
                            <div className="font-semibold text-black">Senior Buyer, GlobalMart</div>
                            <div className="text-xs text-gray-500">Dubai, UAE</div>
                          </div>
                        </div>
                        <p className="text-gray-600">"On‑time deliveries and flawless quality. Enviro is our most reliable dairy partner."</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 reverse */}
            <div className="relative mt-6 overflow-hidden">
              <div className="flex animate-marquee-reverse">
                <div className="flex gap-3 md:gap-4 flex-shrink-0">
                  {[1,2,3,4,5,6].map((i) => (
                    <Card key={`t2-${i}`} className="border-0 shadow-md w-[260px] flex-shrink-0">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="min-h-10 min-w-10 h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                            OT
                          </div>
                          <div>
                            <div className="font-semibold text-black">Procurement Lead, OceanTrade</div>
                            <div className="text-xs text-gray-500">Singapore</div>
                          </div>
                        </div>
                        <p className="text-gray-600">"Exceptional documentation and certifications. Compliance is always seamless."</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex gap-3 md:gap-4 flex-shrink-0 ml-3 md:ml-4">
                  {[1,2,3,4,5,6].map((i) => (
                    <Card key={`t2b-${i}`} className="border-0 shadow-md w-[260px] flex-shrink-0" aria-hidden="true">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="min-h-10 min-w-10 h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                            OT
                          </div>
                          <div>
                            <div className="font-semibold text-black">Procurement Lead, OceanTrade</div>
                            <div className="text-xs text-gray-500">Singapore</div>
                          </div>
                        </div>
                        <p className="text-gray-600">"Exceptional documentation and certifications. Compliance is always seamless."</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
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
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-lg">
                  <Leaf className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Enviro</span>
                  <div className="text-xs text-green-400 font-medium tracking-wider">DAIRY EXPORTS</div>
                </div>
              </div>
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

