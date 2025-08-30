"use client";

import logo from "../../public/portfolioLogo4.png";
import Image, { StaticImageData } from "next/image";

interface HeroImageProps {
  src?: StaticImageData | string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl" | number;
  frameStyle?: "minimal" | "gradient" | "glow";
  className?: string;
}

const HeroImage = ({
  src = logo,
  alt = "Portfolio Logo",
  size = "sm",
  frameStyle = "gradient",
  className = "",
}: HeroImageProps) => {
  // Size configurations
  const sizeConfig = {
    sm: 300,
    md: 400,
    lg: 500,
    xl: 600,
  };

  const imageSize = typeof size === "number" ? size : sizeConfig[size];

  // Frame style configurations
  const frameStyles = {
    minimal: {
      border: "border-2 border-gray-300",
      shadow: "shadow-lg group-hover:shadow-xl",
      backgroundRings: false,
    },
    gradient: {
      border: "border-4 border-white",
      shadow: "shadow-2xl group-hover:shadow-3xl",
      backgroundRings: true,
    },
    glow: {
      border: "border-2 border-blue-200",
      shadow: "shadow-2xl shadow-blue-500/20 group-hover:shadow-blue-500/40",
      backgroundRings: true,
    },
  };

  const currentStyle = frameStyles[frameStyle];

  return (
    <>
      <div className={`relative group ${className}`}>
        {/* Smooth animated background rings - only if enabled */}
        {currentStyle.backgroundRings && (
          <>
            <div
              className="absolute rounded-full opacity-40 blur-lg transition-all duration-1000 ease-in-out" 
              style={{
                inset: `-${imageSize * 0.08}px`,
                background:
                  frameStyle === "glow"
                    ? "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)"
                    : "linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6)",
                animation: "gentlePulse 4s ease-in-out infinite",
              }}
            ></div>
            <div
              className="absolute rounded-full opacity-30 blur-md transition-all duration-1000 ease-in-out" 
              style={{
                inset: `-${imageSize * 0.04}px`,
                background:
                  "linear-gradient(135deg, #93c5fd, #c4b5fd, #f9a8d4)",
                animation: "gentlePulse 4s ease-in-out infinite 2s",
              }}
            ></div>
          </>
        )}

        {/* Main circular frame */}
        <div
          className={`relative rounded-full overflow-hidden ${currentStyle.border} ${currentStyle.shadow} transition-all duration-700 ease-out group-hover:scale-[1.02]`}
          style={{ width: imageSize, height: imageSize }}
        >
          {/* Inner border for extra depth */}
          <div
            className="absolute rounded-full border border-gray-200/50" 
            style={{ inset: `${imageSize * 0.02}px` }}
          ></div>

          <Image
            src={src}
            alt={alt}
            loading="eager"
            priority
            fill
            className="object-cover object-center group-hover:scale-[1.05] transition-transform duration-1000 ease-out"
            sizes={`${imageSize}px`}
          />

          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20 rounded-full transition-opacity duration-700 group-hover:to-white/30"></div>
        </div>

        {/* Smooth floating accent dots - scaled to image size */}
        <div
          className="absolute bg-blue-400/80 rounded-full transition-all duration-700" 
          style={{
            width: imageSize * 0.015,
            height: imageSize * 0.015,
            top: imageSize * 0.08,
            right: imageSize * 0.08,
            animation: "gentleFloat 3s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bg-purple-400/80 rounded-full transition-all duration-700" 
          style={{
            width: imageSize * 0.012,
            height: imageSize * 0.012,
            bottom: imageSize * 0.1,
            left: imageSize * 0.06,
            animation: "gentleFloat 3s ease-in-out infinite 1s",
          }}
        ></div>
        <div
          className="absolute bg-pink-400/80 rounded-full transition-all duration-700" 
          style={{
            width: imageSize * 0.014,
            height: imageSize * 0.014,
            top: imageSize * 0.12,
            left: imageSize * 0.1,
            animation: "gentleFloat 3s ease-in-out infinite 2s",
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes gentlePulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(1.02);
          }
        }

        @keyframes gentleFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-8px) translateX(4px);
          }
          66% {
            transform: translateY(4px) translateX(-4px);
          }
        }
      `}</style>
    </>
  );
};

export default HeroImage;



// 🎛️ Customization Options:
// 1. Size Control
// jsx// Preset sizes
// <HeroImage size="sm" />   // 300px
// <HeroImage size="md" />   // 400px  
// <HeroImage size="lg" />   // 500px (default)
// <HeroImage size="xl" />   // 600px

// // Custom size
// <HeroImage size={450} />  // Any number in pixels
// 2. Frame Styles
// jsx<HeroImage frameStyle="minimal" />   // Clean, simple border
// <HeroImage frameStyle="gradient" />  // Colorful gradient rings (default)
// <HeroImage frameStyle="glow" />      // Blue glow effect
// 3. Custom Image
// jsx<HeroImage 
//   src="/path/to/your/image.jpg" 
//   alt="Your custom alt text"
// />
// 4. Additional Props
// jsx<HeroImage 
//   size="md"
//   frameStyle="glow"
//   className="my-custom-class"
//   src={customImage}
//   alt="Custom description"
// />
// 🎯 Animation Improvements:
// Smoother Timing:

// Hover scale: 1.02 instead of 1.05 (more subtle)
// Image zoom: 1.05 instead of 1.10 (gentler)
// Duration: All animations now use 700ms-1000ms instead of 300-500ms
// Easing: ease-out and ease-in-out for natural feel

// Custom Keyframes:

// gentlePulse: Slow, breathing-like effect (4s cycle)
// gentleFloat: Smooth floating motion (3s cycle)
// Staggered delays: Each dot animates at different times

// Responsive Elements:

// All dot sizes and positions scale with the main image size
// Ring blur effects adjust proportionally
// Everything stays perfectly contained within the frame

// 🚀 Usage Examples:
// jsx// Default large size with gradient frame
// <HeroImage />

// // Small minimal frame
// <HeroImage size="sm" frameStyle="minimal" />

// // Custom size with glow effect
// <HeroImage size={380} frameStyle="glow" />

// // Custom image with medium size
// <HeroImage 
//   src="/my-photo.jpg" 
//   alt="My Profile Photo"
//   size="md"
//   frameStyle="gradient"
// />

