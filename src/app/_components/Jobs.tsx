import React from "react";
import JobRow from "./JobRow";
import type { Job } from "@/models/Job";

function Jobs({ header, jobs }: { header: string; jobs: Job[] }) {
  return (
    <div className="bg-gray-200 p-8 rounded-t-xl mx-10 sm:mx-20 md:mx-28 lg:mx-32">
      <h2 className="font-bold text-2xl text-gray-700 ">
        {header || "Recent jobs"}
      </h2>
      <div className="flex flex-col gap-4">
        {!jobs?.length && <div>No jobs found</div>}
        {jobs && jobs.map((job) => <JobRow jobDoc={job} />)}
      </div>
    </div>
  );
}

export default Jobs;
