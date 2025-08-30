"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    preview?: string; // 🔄 optional preview link
    images?: string[]; // 🔄 optional project images array (supports multiple)
    image?: string; // 🔄 kept for backward compatibility (single image)
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Handle both single image and multiple images
  const projectImages = value.images || (value.image ? [value.image] : []);
  const hasMultipleImages = projectImages.length > 1;
  const hasImages = projectImages.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <FramerWrapper
      className="max-w-[32%] max-lg:max-w-full"
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card 
        className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col gap-4">
          {/* Project Images Slideshow - Only show on hover */}
          {hasImages && (
            <div 
              className={`relative w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center group transition-all duration-300 ease-in-out ${
                isHovered ? 'h-48 opacity-100' : 'h-0 opacity-0'
              }`}
            >
              {isHovered && (
                <>
                  <Image
                    src={projectImages[currentImageIndex]}
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
                      {projectImages.map((_, index) => (
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
                      {currentImageIndex + 1} / {projectImages.length}
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {value.tags.map((rawTag: string, index: number) => {
              // 🔄 normalize tags (case + trim)
              const tag = rawTag.trim().toLowerCase();

              const tagStyles: Record<string, string> = {
                "nextjs": "bg-teal-100 text-teal-800",
                "react": "bg-sky-100 text-sky-800",
                "node.js": "bg-green-100 text-green-800",
                "ejs": "bg-pink-100 text-pink-800",
                "express": "bg-gray-200 text-gray-800",
                "express.js": "bg-gray-200 text-emerald-800",
                "bcrypt": "bg-indigo-100 text-indigo-800",
                "mongodb": "bg-green-200 text-green-900",
                "java": "bg-red-200 text-red-900",
                "spring boot": "bg-green-300 text-green-900",
                "spring web": "bg-yellow-200 text-yellow-900",
                "spring security": "bg-lime-200 text-lime-900",
                "redis": "bg-orange-200 text-orange-900",
                "jwt": "bg-yellow-200 text-yellow-900",
                "project lombok": "bg-pink-200 text-pink-900",
                "maven": "bg-purple-200 text-purple-900",
                "html": "bg-orange-100 text-orange-800",
                "css": "bg-blue-200 text-blue-900",
                "javascript": "bg-yellow-100 text-yellow-800",
                "typescript": "bg-red-100 text-red-800",
                "mysql": "bg-orange-100 text-orange-800",
                "zustand": "bg-purple-100 text-purple-800",
                "supabase": "bg-emerald-100 text-emerald-800",
                "zod": "bg-cyan-100 text-cyan-800",
                "react hook form": "bg-violet-100 text-violet-800",
              };

              return (
                <span
                  key={index}
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    tagStyles[tag] || "bg-gray-100 text-red-800"
                  }`}
                >
                  {rawTag}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="pt-2 flex gap-3">
          {/* GitHub Repo Link */}
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
              }),
              "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
            )}
          >
            View Code
            <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </Link>

          {/* Preview Link (if available) */}
          {value.preview && (
            <Link
              href={value.preview}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                }),
                "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
              )}
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
          )}
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;