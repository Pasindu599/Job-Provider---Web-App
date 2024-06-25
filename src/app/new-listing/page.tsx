// "use client";
// import React, { useEffect } from "react";
// import { getUser } from "@workos-inc/authkit-nextjs";
// import { AddCompanyCard } from "../_components/AddCompanyCard";
// import { CompanyCard } from "../_components/CompanyCard";
// import { WorkOS } from "@workos-inc/node";
// import { createCompany } from "@/app/actions/workosActions";

// async function NewListingPage() {
//   const { user } = await getUser();
//   const workOs = new WorkOS(process.env.WORKOS_API_KEY);
//   const [newCompanyName, setNewCompanyName] = React.useState("");

//   //   async function handleNewCompanyFormSubmit() {
//   //     const formData = new FormData();
//   //     formData.append("newCompanyName", newCompanyName);
//   //     if (user) {
//   //       await createCompany(formData.get("newCompanyName") as string, user.id);
//   //     }
//   //   }

//   //   let organizationMemberships;
//   //   if (user) {
//   //     organizationMemberships =
//   //       await workOs.userManagement.listOrganizationMemberships({
//   //         userId: user.id,
//   //       });
//   //   }

//   //   useEffect(() => {
//   //     // async function fetchData() {
//   //     //   if (user) {
//   //     //     organizationMemberships =
//   //     //       await workOs.userManagement.listOrganizationMemberships({
//   //     //         userId: user.id,
//   //     //       });
//   //     //   }
//   //     // }
//   //     // fetchData();
//   //   }, [newCompanyName]);

//   return (
//     <div className="mx-5 lg:mx-20 relative">
//       <h2 className="font-bold mt-5">Create New Company </h2>
//       <p className="text-sm text-gray-500">
//         To create a job post first you need to register a company{" "}
//       </p>

//       <div className="bg-red-200 mt-3 text-red-800 rounded-md border border-red-700 p-10 flex flex-grow">
//         No Companies Found. Please add a new company
//       </div>

//       <div className="hidden bg-gray-500 rounded-lg py-10 md:w-[50%] mt-5 p-5  gap-3 z-100 absolute top-3 left-1/2 transition -translate-x-1/2 ">
//         <input
//           onChange={(e) => setNewCompanyName(e.target.value)}
//           placeholder="Enter your new company"
//           className="flex p-2 flex-grow rounded-md focus:outline-none "
//         />
//         <button className="bg-white p-2 px-5 rounded-md hover:bg-black hover:text-white">
//           Add
//         </button>
//       </div>
//     </div>
//   );
// }

// export default NewListingPage;

"use server";
import { createCompany } from "@/app/actions/workosActions";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import Link from "next/link";
import { AddCompanyCard } from "../_components/AddCompanyCard";
import { CompanyCard } from "../_components/CompanyCard";

export default async function NewListingPage() {
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  const { user } = await getUser();

  if (!user) {
    return (
      <div className="container">
        <div>You need to be logged in to post a job</div>
      </div>
    );
  }

  const organizationMemberships =
    await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
    });

  const activeOrganizationMemberships = organizationMemberships.data.filter(
    (om) => om.status === "active"
  );
  const organizationsNames: { [key: string]: string } = {};
  for (const activeMembership of activeOrganizationMemberships) {
    const organization = await workos.organizations.getOrganization(
      activeMembership.organizationId
    );
    organizationsNames[organization.id] = organization.name;
  }

  return (
    <div className="mx-5 lg:mx-20 relative">
      <div>
        <h2 className="font-bold mt-5">Create New Company </h2>
        <p className="text-sm text-gray-500">
          To create a job post first you need to register a company{" "}
        </p>
        <Link href={"/new-company"} className="flex">
          <div className="grid grid-cols-2 p-2 md:grid-cols-4 lg:grid-cols-6">
            <AddCompanyCard />
          </div>
        </Link>
        <h2 className="font-bold mt-5">Your Companies </h2>
        <p className="text-sm text-gray-500">
          Select a company to create a job post{" "}
        </p>
        <div className="grid grid-cols-2 p-2 md:grid-cols-4 lg:grid-cols-6"></div>
        <div className="grid grid-cols-2 p-2 md:grid-cols-4 lg:grid-cols-6">
          {Object.keys(organizationsNames).map((orgId) => (
            <Link
              href={"/new-listing/" + orgId}
              className={
                "py-2 px-4 flex gap-2 items-center " +
                (Object.keys(organizationsNames)[0] === orgId ? "" : "border-t")
              }
            >
              <CompanyCard name={organizationsNames[orgId] as string} />
            </Link>
          ))}
        </div>
      </div>

      {organizationMemberships.data.length === 0 && (
        <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
          No companies found assigned to your user
        </div>
      )}
    </div>
  );
}
