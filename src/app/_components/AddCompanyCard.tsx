"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function AddCompanyCard() {
  return (
    <CardContainer className="inter-var w-20 cursor-pointer">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-2 border  ">
        {/* <CardItem
          translateZ="50"
          className="text-xl text-center font-bold text-neutral-600 dark:text-white"
        >
          Add New Company
        </CardItem> */}
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem
          translateZ="100"
          className="flex p-7 justify-center  items-center w-full"
        >
          <FontAwesomeIcon
            icon={faPlus}
            height={50}
            width={50}
            className="flex text-4xl text-neutral-500 items-center text-center dark:text-neutral-300"
          />
        </CardItem>
        {/* <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
