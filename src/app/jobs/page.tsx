// "use client";
import React from "react";
import JobForm from "../_components/JobForm";
import Jobs from "../_components/Jobs";
import mongoose from "mongoose";

import { Job } from "@/models/Job";
import { searchJobs } from "@/models/Job";
import { getUser } from "@workos-inc/authkit-nextjs";
import { addOrgAndUserData, JobModel } from "@/models/Job";

async function page() {
  const { user } = await getUser();
  await mongoose.connect(process.env.MONGO_URL as string);
  const allJobs = await addOrgAndUserData(
    await JobModel.find({}, {}, { sort: "-createdAt" }),
    user
  );
  return (
    <div className="mt-7">
      <Jobs header={"All jobs"} jobs={allJobs} />
    </div>
  );
}

export default page;
