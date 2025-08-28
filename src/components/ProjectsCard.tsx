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
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    preview?: string; // 🔄 optional preview link
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper
      className="max-w-[32%] max-lg:max-w-full"
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col gap-4">
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
