import React from "react";

function About() {
  return (
    <div>
      <div className="flex flex-col justify-center text-center w-[50%] mx-auto mt-7">
        <h1 className="font-bold text-4xl">About Us</h1>
        <p>
          Welcome to JobEase, your ultimate job search companion. Our mobile app
          makes finding your dream job easy and convenient wherever you are.
          Search through a vast array of job listings, tailor your search to fit
          your career goals, and connect with top employers.
        </p>
        <h2 className="font-semibold mt-3">Our Mission</h2>
        <p>
          At JobEase, our mission is to simplify the job search process and help
          you find the perfect job quickly and efficiently. We are committed to
          providing a user-friendly platform that connects job seekers with
          employers, making the hiring process seamless for both parties.
        </p>
        <h2 className="font-semibold mt-3">Features</h2>
        <ul className="text-left ">
          <li>
            Extensive Job Listings: Browse through thousands of job
            opportunities from various industries.
          </li>
          <li>
            Personalized Search: Use filters and keywords to find jobs that
            match your skills and preferences.
          </li>
          <li>
            Notifications: Get instant updates on new job postings and
            application statuses.
          </li>
          <li>
            Application Tracking: Keep track of your applications and manage
            your job search effectively.
          </li>
          <li>
            Employer Profiles: Learn more about potential employers and their
            company culture.
          </li>
        </ul>
        <h2 className="font-semibold mt-3">Why Choose Us?</h2>
        <p>
          JobEase is designed with you in mind. Our intuitive interface and
          powerful search tools help you find the right job faster. Join our
          community of successful job seekers and take the next step in your
          career with confidence.
        </p>
      </div>
    </div>
  );
}

export default About;
