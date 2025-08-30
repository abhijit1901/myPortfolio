"use client"

import Heading from "@/components/Heading"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import FramerWrapper from "@/components/animation/FramerWrapper"
import { portfolioConfig } from "@/config/portfolio.config"
import Image from "next/image"
import { useState } from "react"

const AchievementsPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Award className="h-4 w-4" />
        Achievements
      </Badge>

      <div className="flex flex-col gap-3">
        <Heading>My Achievements</Heading>
      </div>

      <div className="h-auto w-full flex flex-wrap gap-3 p-2">
        {portfolioConfig.moreLinks.map((value, indx) => (
          <FramerWrapper
            key={indx}
            className="max-w-[32%] max-lg:max-w-full"
            y={0}
            scale={0.85}
            delay={indx / 4}
            duration={0.15}
          >
            <AchievementCard value={value} />
          </FramerWrapper>
        ))}
      </div>
    </div>
  )
}

export default AchievementsPage

// ------------------------------
// 🔄 Achievement Card Component with Hover Images
// ------------------------------
interface AchievementValue {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  images?: string[];
  image?: string;
}

const AchievementCard = ({ value }: { value: AchievementValue }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  // Handle both single image and multiple images
  const images = value.images || (value.image ? [value.image] : [])
  const hasMultipleImages = images.length > 1
  const hasImages = images.length > 0

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <Card 
      className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="flex items-center gap-3 pb-3">
        {value.icon && (
          <img
            src={value.icon}
            alt={value.title}
            className="w-8 h-8 object-contain"
          />
        )}
        <CardTitle className="text-primary font-semibold">
          {value.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col gap-4">
        {/* Image Section - Only show on hover */}
        {hasImages && (
          <div 
            className={`relative w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center group transition-all duration-300 ease-in-out ${
              isHovered ? 'h-48 opacity-100' : 'h-0 opacity-0'
            }`}
          >
            {isHovered && (
              <>
                <Image
                  src={images[currentImageIndex]}
                  alt={`${value.title} preview ${currentImageIndex + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Navigation arrows - only show if multiple images */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}
                
                {/* Image indicators/dots - only show if multiple images */}
                {hasMultipleImages && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {images.map((_: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-white' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Image counter - only show if multiple images */}
                {hasMultipleImages && (
                  <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        <p className="text-base font-poppins leading-relaxed">
          {value.description}
        </p>
      </CardContent>

      {value.link && (
        <CardFooter className="pt-3">
          <Link
            href={value.link}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full gap-3 transition-all hover:translate-y-[-2px] hover:shadow-md group"
            )}
          >
            <ExternalLink className="w-4 h-4" />
            View Details
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ExternalLink className="w-4 h-4" />
            </div>
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}