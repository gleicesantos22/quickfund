"use client";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site.config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <header className="relative h-[calc(100vh-100px)] max-h-fit">
      <div
        // style={{
        //   background: `url('${siteData.heroImage}')`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
        className="w-full h-5/6 relative"
      >
        <Image
          src={siteData.heroImage}
          width={1470}
          height={980.5}
          priority
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="bg-[#3D231C4D] absolute top-0 left-0 w-full h-full object-cover z-10 flex flex-col gap-4 md:gap-8 items-center justify-center text-white text-center">
          <h1 className="mt-5 text-4xl font-semibold md:text-6xl lg:px-5">
            {siteData.heroTitle}
          </h1>
          <Link className="block" href="/create-a-fundraiser">
            <Button
              className="py-2 px-2 text-xl block md:px-10 md:text-4xl text-white"
              variant={"primary"}
              size="full"
            >
              {siteData.heroCTAText}
            </Button>
          </Link>
          <p className="text-[22px]">{siteData.heroSubTitle}</p>
        </div>
      </div>
    </header>
  );
};
