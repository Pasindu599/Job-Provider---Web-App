import Hero from "./_components/Hero";
import Jobs from "./_components/Jobs";
import mongoose from "mongoose";
import { addOrgAndUserData, JobModel } from "@/models/Job";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";

export default async function Home() {
  // Retrieves the user from the session or returns `null` if no user is signed in
  const { user } = await getUser();

  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();

  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();

  await mongoose.connect(process.env.MONGO_URL as string);
  const latestJobs = await addOrgAndUserData(
    await JobModel.find({}, {}, { limit: 5, sort: "-createdAt" }),
    user
  );
  return (
    <div>
      <Hero />
      <Jobs header={""} jobs={latestJobs} />
    </div>
  );
}
