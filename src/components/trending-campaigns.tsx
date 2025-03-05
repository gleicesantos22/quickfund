"use client";
import { Progress } from "@/components/ui/progress";
import { campaigns } from "@/lib/campaigns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const TrendingCampaigns = () => {
  return (
    <section
      id="campaigns"
      className="w-full flex justify-center scroll-mt-20 bg-[#f4f4f4] pt-[60px] text-black"
    >
      <div className="w-full px-2 max-w-[1120px] flex flex-col">
        <div className="flex text-left lg:justify-between">
          <h5 className="text-3xl font-semibold  lg:text-4xl">
            Trending Campaigns
          </h5>
        </div>
        <div className="w-full grid md:grid-cols-3 pt-12 lg:px-2 gap-7 lg:flex-row">
          {campaigns.map((campaign, idx) => (
            <CampaignCard
              key={campaign.title + idx}
              {...campaign}
              // location={campaign.organizer.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function formatRaisedFund(raisedFund: number): string {
  return raisedFund.toLocaleString();
}

function CampaignCard({
  title,
  image,
  raised,
  goal,
  // location,
  // category,
  slug,
}: {
  title: string;
  image: string;
  raised: number;
  goal: number;
  // location: string;
  // category: string;
  slug: string;
}) {
  const progress = Math.ceil((raised * 100) / goal);
  return (
    <Link href={`/campaign/${slug}`}>
      <article className="p-3 flex flex-col justify-between gap-3 bg-white basis-full rounded-lg min-h-[330px] lg:basis-1/3 hover:shadow-[4px_4px_10px_0px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col gap-2">
          <Image
            className="rounded-lg aspect-16/9 h-[187px]"
            width={720}
            height={405}
            alt=""
            src={image}
          />
          <h6 className="text-lg text-left font-semibold min-h-[50px]">
            {title}
          </h6>
        </div>
        <div className="flex gap-2 flex-col">
          <div>
            <Progress value={progress} />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">{`$${formatRaisedFund(
              raised
            )}`}</span>
            <span className="text-sm">{`${progress}%`}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
