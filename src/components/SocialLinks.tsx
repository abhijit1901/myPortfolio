import { cn } from "@/lib/utils";
import { Linkedin, Github } from "lucide-react"; // keep lucide for common ones
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

// 🔄 Custom SVG Icons
const LeetCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 50 50"
    fill="none"
  >
    <path
      fill="#FFA116"
      d="M25 2C12.318 2 2 12.318 2 25s10.318 23 23 23 23-10.318 23-23S37.682 2 25 2zm0 42C14.523 44 6 35.477 6 25S14.523 6 25 6s19 8.523 19 19-8.523 19-19 19z"
    />
    <path
      fill="#FFA116"
      d="M20 15l10 10-10 10"
      stroke="#000"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GfgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 50 50"
    fill="none"
  >
    <circle
      cx="25"
      cy="25"
      r="23"
      stroke="#308D46"
      strokeWidth="4"
      fill="white"
    />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="#308D46"
      fontSize="14"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      GfG
    </text>
  </svg>
);

const Code360Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 50 50"
    fill="none"
  >
    <rect x="2" y="2" width="46" height="46" rx="10" fill="#FF5722" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="white"
      fontSize="14"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      360
    </text>
  </svg>
);
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-7.999.001 4 4 0 0 1 7.999-.001z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const SocialLinks = () => {
  const links = [
    {
      name: "Linkedin",
      link: portfolioConfig.socialLinks.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "Github",
      link: portfolioConfig.socialLinks.github,
      icon: <Github />,
    },
    {
      name: "LeetCode",
      link: portfolioConfig.socialLinks.leetcode,
      icon: <LeetCodeIcon />, // 🔄 custom SVG
    },
    {
      name: "GeeksforGeeks",
      link: portfolioConfig.socialLinks.gfg,
      icon: <GfgIcon />, // 🔄 custom SVG
    },
    {
      name: "Code360",
      link: portfolioConfig.socialLinks.code360,
      icon: <Code360Icon />, // 🔄 custom SVG
    },
    {
      name: "Instagram",
      link: portfolioConfig.socialLinks.instagram,
      icon: <InstagramIcon />,
    },
  ];

  return (
    <>
      {links
        .filter((itm) => itm.link) // ✅ prevents undefined href crash
        .map((itm, indx) => {
          const timing = 0.55 + indx * 0.125;

          return (
            <FramerWrapper key={indx} delay={timing} y={50}>
              <Link
                target="_blank"
                href={itm.link}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" })
                )}
              >
                {itm.icon}
              </Link>
            </FramerWrapper>
          );
        })}
    </>
  );
};

export default SocialLinks;
