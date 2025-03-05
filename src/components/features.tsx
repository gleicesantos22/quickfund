"use client";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const featuredItems = [
  {
    title: "Deepest Facebook Integration",
    subtitle:
      "Integrate your donation form directly into Facebook. Allows you to raise donations within Facebook - no links, no redirects, just plug and play.",
    image: "https://fundly.com/content/images/facebook_form.jpg",
  },
  {
    title: "Easy Visibility and data analytics",
    subtitle:
      "Quickly see the number of visitors, donor and supporter trends, and post real time updates on your campaign.",
    image: "https://fundly.com/content/images/fundly_analytics.png",
  },
  {
    title: "Peer 2 Peer fundraiser for individuals, teams & supporters",
    subtitle:
      "Allow your community to become individual fundraisers or encourage a friendly competition by creating teams, setting team captains and getting real time updates.",
    image: "https://fundly.com/content/images/fundly_events.jpg",
  },
  {
    title: "MAKE MANAGING EVENTS A BREEZE",
    subtitle:
      "Built-in Event module. Create the event, customize the form, registration ticket types, add beneficiaries, sponsors, the whole 9 yards! Integrates with Eventbrite.",
    image: "https://fundly.com/content/images/fundly_embed_evets.jpg",
  },
  {
    title: "HEAT MAPS",
    subtitle:
      "Find out where your Donors are coming from. Target specific geographic areas based on Donor density. Embed the map on your site!",
    image: "https://fundly.com/content/images/fundly_forms.jpg",
  },
  {
    title: "CAUSE PAGES",
    subtitle:
      "Offer incentives to your donors by setting multiple donation levels and customize your perks.",
    image: "https://fundly.com/content/images/cause_page.jpg",
  },
  {
    title: "Giving Levels",
    subtitle:
      "Do you run multiple campaigns at the same time? Need a personalized domain? Need aggregate reporting across all your campaigns? Need customized look and feel?",
    image: "https://fundly.com/content/images/fundly_giving_levels.png",
  },
  {
    title: "Embedding options to your website!",
    subtitle:
      "Embed a Campaign Card, DONATE NOW button, or a Donation Form onto your website to encourage your supporters to support your campaign.",
    image: "https://fundly.com/content/images/fundly_embed_campaign_card.png",
  },
];

export const FeaturesCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section>
      <div className="flex flex-col items-center gap-[30px] text-main-text pt-[70px]">
        <h1 className="text-5xl text-center pb-[30px] lg:text-[64px]">
          Designed to Do Good
        </h1>
        <div className="w-9/12 lg:w-11/12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselPrevious />
            <CarouselContent>
              {featuredItems.map(({ title, subtitle, image }) => (
                <FeaturedItem
                  key={title}
                  title={title}
                  subtitle={subtitle}
                  image={image}
                />
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

function FeaturedItem({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <CarouselItem className="basis-full">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:px-20">
        <div className="w-1/2 flex flex-col gap-2.5">
          <h5 className="text-[32px] font-semibold">{title}</h5>
          <p className="text-[22px]">{subtitle}</p>
        </div>
        <div className="bg-black">
          <Image
            width={660}
            height={500}
            className="w-auto h-[500px]"
            src={image}
            alt=""
          />
        </div>
      </div>
    </CarouselItem>
  );
}
