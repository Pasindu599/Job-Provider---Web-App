import { JobModel } from "@/models/Job";
import mongoose from "mongoose";
import Image from "next/image";

type PageProps = {
  params: {
    jobId: string;
  };
};

export default async function SingleJobPage(props: PageProps) {
  const jobId = props.params.jobId;
  await mongoose.connect(process.env.MONGO_URL as string);
  const jobDoc = await JobModel.findById(jobId);
  return (
    <div className="flex flex-col justify-center items-center mx-2 mt-8 my-6">
      <div className="flex flex-col mx-5 md:mx-0">
        <div className="sm:flex justify-between gap-5">
          <div>
            <Image
              src={jobDoc?.jobIcon}
              alt={"job icon"}
              width={500}
              height={500}
              className="w-auto h-auto max-w-16 max-h-16"
            />
          </div>
          <div className="grow mt-3 md:mt-0">
            <h1 className="text-4xl mb-2 font-bold">{jobDoc.title}</h1>
            <div className="capitalize text-sm text-blue-800 mb-4">
              {jobDoc.remote} &middot; {jobDoc.country} &middot; {jobDoc.type}
              -time
            </div>
          </div>
        </div>
        <div className="whitespace-pre-line text-sm text-gray-600">
          {jobDoc.description}
        </div>
      </div>
      <div className="mt-4 w-[90%] md:w-[50%] bg-gray-200 p-8 rounded-lg">
        <h3 className="font-bold mb-2">Apply by contacting us</h3>
        <div className="sm:flex gap-4">
          <Image
            src={jobDoc.contactPhoto}
            alt={"contact person"}
            width={500}
            height={500}
            className="w-auto rounded-full h-auto max-w-24 max-h-24"
          />
          <div className="flex content-center mt-2 sm:mt-0 items-center">
            {jobDoc.contactName}
            <br />
            Email: {jobDoc.contactEmail}
            <br />
            Phone: {jobDoc.contactPhone}
          </div>
        </div>
      </div>
    </div>
  );
}
