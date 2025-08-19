"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="block cursor-pointer">
      <Card className="w-full flex h-20 max-h-50 justify-center">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="ml-3 md:ml-5 flex-none">
            <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain"
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full group flex flex-col">
            <CardHeader className="flex flex-col gap-y-1">
              <div className="w-full flex items-center justify-between gap-x-2 text-base">
                <Link
                  href={href || "#"}
                  // target="_blank"
                  target={href && !href.startsWith("#") ? "_blank" : undefined}
                  className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm"
                >
                  {title}
                  {/* {badges && (
                    <span className="inline-flex gap-x-1">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )} */}
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-50 md:opacity-0  transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                </Link>
                <div className=" text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                {subtitle && (
                  <div className="font-sans text-xs max-w-50 md:max-w-none">
                    {subtitle}
                  </div>
                )}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs hover:bg-neutral-700 transition-colors duration-300"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
              </div>
            </CardHeader>
            {/* {description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,

                  height: isExpanded ? "auto" : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-2 text-xs sm:text-sm"
              >
                {description}
              </motion.div>
            )} */}
          </div>
        </div>
      </Card>
    </div>
  );
};
