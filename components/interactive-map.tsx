'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building } from 'lucide-react'

interface Location {
  id: string
  name: string
  country: string
  coordinates: {
    lat: number
    lng: number
  }
  embedUrl: string
}

// Real business district locations for each office
const locations: Location[] = [
  {
    id: 'new-york',
    name: 'New York',
    country: 'United States',
    coordinates: { lat: 40.7074, lng: -74.0113 },
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2565978253837!2d-74.01394908429285!3d40.70740687932976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sWall%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1647887089410!5m2!1sen!2sus'
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    coordinates: { lat: 51.5142, lng: -0.0931 },
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.615353629255!2d-0.09530208429306!3d51.51424197963595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sBank%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1647887178231!5m2!1sen!2sus'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    coordinates: { lat: 1.2781, lng: 103.8501 },
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7889186015286!2d103.84770681526204!3d1.2781076990556893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1904937b8015%3A0x6c5e0bb7fcc0e0b8!2sRaffles%20Pl%2C%20Singapore!5e0!3m2!1sen!2sus!4v1647887223905!5m2!1sen!2sus'
  }
]

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0])

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-green-50/30 to-emerald-50/20 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,0.06)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.04)_0%,_transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,_rgba(34,197,94,0.02)_0%,_transparent_40%,_rgba(16,185,129,0.025)_80%,_transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-0 px-4 py-2">
            <MapPin className="w-3 h-3 mr-1" />
            Visit Our Headquarters
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Find Us On The Map
          </h2>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
            Locate our offices worldwide and plan your visit to discuss your dairy export needs in person.
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* Map Display */}
              <div className="relative">
                <iframe
                  src={selectedLocation.embedUrl}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-lg"
                ></iframe>
              </div>

              {/* Location Selector Buttons */}
              <div className="p-8 bg-gradient-to-r from-gray-50 to-green-50/30">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2 sm:mb-0 sm:mr-4">
                    Select Location:
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {locations.map((location) => (
                      <Button
                        key={location.id}
                        onClick={() => setSelectedLocation(location)}
                        variant={selectedLocation.id === location.id ? "default" : "outline"}
                        className={`
                          transition-all duration-300 px-6 py-3 
                          ${selectedLocation.id === location.id 
                            ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg' 
                            : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                          }
                        `}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        {location.name}
                        {selectedLocation.id === location.id && (
                          <div className="ml-2 w-2 h-2 bg-white rounded-full" />
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Selected Location Details */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-700">
                      Currently showing: <span className="font-semibold text-green-700">{selectedLocation.name}, {selectedLocation.country}</span>
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Can't visit in person? No problem! Schedule a virtual meeting with our team or reach out 
            through our contact form above to discuss your dairy export requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
