import {
  AutoPaginatable,
  OrganizationMembership,
  User,
  WorkOS,
} from "@workos-inc/node";
import mongoose, { model, models, Schema } from "mongoose";

export type Job = {
  _id: string;
  title: string;
  description: string;
  orgName?: string;
  remote: string;
  type: string;
  salary: number;
  country: string;
  state?: string;
  city?: string;
  countryId: string;
  stateId?: string;
  cityId?: string;
  jobIcon: string;
  contactPhoto: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  orgId: string;
  createdAt: string;
  updatedAt: string;
  isAdmin?: boolean;
};

const JobSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    remote: { type: String, required: true },
    type: { type: String, required: true },
    salary: { type: Number, required: true },
    country: { type: String, required: true },
    state: { type: String },
    city: { type: String },
    countryId: { type: String, required: true },
    stateId: { type: String },
    cityId: { type: String },
    jobIcon: { type: String },
    contactPhoto: { type: String },
    contactName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactEmail: { type: String, required: true },
    orgId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export async function addOrgAndUserData(jobsDocs: Job[], user: User | null) {
  jobsDocs = JSON.parse(JSON.stringify(jobsDocs));
  await mongoose.connect(process.env.MONGO_URL as string);
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  let oms: AutoPaginatable<OrganizationMembership> | null = null;
  if (user) {
    oms = await workos.userManagement.listOrganizationMemberships({
      userId: user?.id,
    });
  }
  for (const job of jobsDocs) {
    const org = await workos.organizations.getOrganization(job.orgId);
    job.orgName = org.name;
    if (oms && oms.data.length > 0) {
      job.isAdmin = !!oms.data.find((om) => om.organizationId === job.orgId);
    }
  }
  return jobsDocs;
}

// search by input text and get jobs
export async function searchJobs(text: string) {
  await mongoose.connect(process.env.MONGO_URL as string);
  const jobsDocs = await JobModel.find({
    $text: { $search: text },
  });
  return jobsDocs;
}

export const JobModel = models?.Job || model("Job", JobSchema);
