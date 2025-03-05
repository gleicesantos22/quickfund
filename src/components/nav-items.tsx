"use client";
import Link from "next/link";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "@/components/ui/button";

const navItemsVariants = cva(
  "flex gap-2 font-semibold text-lg text-secondary-text",
  {
    variants: {
      variant: {
        default: "flex-row items-center",
        mobile: "flex-col w-full items-stretch",
      },
    },
  }
);

export const NavItems = ({
  variant = "default",
  hideCampaigns,
  hideHome = false,
  showContactUs = false,
}: VariantProps<typeof navItemsVariants> & {
  hideCampaigns?: boolean;
  hideHome?: boolean;
  showContactUs?: boolean;
}) => {
  return (
    <ul className={navItemsVariants({ variant })}>
      {hideHome ? (
        <li>
          <Link className="w-full block" href="/">
            <Button
              variant="primary"
              className="hover:underline w-full lg:w-max bg-transparent shadow-none text-main-text"
            >
              Home
            </Button>
          </Link>
        </li>
      ) : null}
      {showContactUs ? (
        <li>
          <Link className="w-full block" href="/">
            <Button
              variant="primary"
              className="hover:underline w-full lg:w-max bg-transparent shadow-none text-main-text"
            >
              Contact Us
            </Button>
          </Link>
        </li>
      ) : null}
      {hideCampaigns ? null : (
        <li>
          <Link className="w-full block" href="#campaigns">
            <Button
              variant="primary"
              className="hover:underline w-full lg:w-max bg-transparent shadow-none text-main-text"
            >
              Campaigns
            </Button>
          </Link>
        </li>
      )}

      <li>
        <Link className="w-full block" href="/login">
          <Button variant="primary" className="hover:underline w-full lg:w-max">
            Log in
          </Button>
        </Link>
      </li>
    </ul>
  );
};
