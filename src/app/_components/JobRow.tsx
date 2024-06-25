"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Job, JobModel } from "@/models/Job";
import axios from "axios";
import Link from "next/link";
import TimeAgo from "@/app/_components/TimeAgo";

function JobRow({ jobDoc }: { jobDoc: Job }) {
  return (
    <div className="bg-white relative md:flex  p-3 my-3 rounded-md shadow-md">
      <div className=" absolute top-2 right-4">
        <FontAwesomeIcon icon={faHeart} height={15} width={15} />
      </div>
      {/* icon */}
      <div className="flex flex-grow gap-4 ">
        <div className="flex items-center">
          <img
            src={jobDoc?.jobIcon}
            alt="Job Provider"
            className="size-12 rounded-full"
          />
        </div>

        {/* text */}
        <div className="flex flex-grow flex-col gap-0.5">
          <Link href={"/show/" + jobDoc._id}>
            <h3 className="text-lg font-bold">{jobDoc.title}</h3>
          </Link>
          <Link href={`/jobs/${jobDoc.orgId}`}>
            <p className="text-md text-gray-600">{jobDoc.orgName}</p>
          </Link>
          <p className="text-sm text-gray-400">
            {jobDoc.remote} &middot; {jobDoc.country} &middot; {jobDoc.type}
            -time
            {jobDoc.isAdmin && (
              <>
                {" "}
                &middot; <Link href={"/jobs/edit/" + jobDoc._id}>
                  Edit
                </Link>{" "}
                &middot;{" "}
                <button
                  type="button"
                  onClick={async () => {
                    await axios.delete("/api/jobs?id=" + jobDoc._id);
                    window.location.reload();
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </p>
        </div>

        {/* date */}
      </div>

      <div className="content-end text-gray-400 text-sm px-2">
        {" "}
        <TimeAgo createdAt={jobDoc.createdAt} />
      </div>
    </div>
  );
}

export default JobRow;
