import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const AchievementsPage = () => {
  return (
    // ACHIEVEMENTS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
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
            <Card className="w-full hover:shadow-md transition-all duration-300">
              <CardHeader className="flex items-center gap-3">
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
              <CardContent>
                <p className="text-base font-poppins leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
              {value.link && (
                <CardFooter>
                  <Link
                    href={value.link}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full gap-3"
                    )}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </Link>
                </CardFooter>
              )}
            </Card>
          </FramerWrapper>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
