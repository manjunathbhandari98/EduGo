/* eslint-disable no-unused-vars */
import React from "react";
import { GraduationCap } from "lucide-react";
import FooterColumn from "./FooterColumn";
import FooterSocial from "./FooterSocial";
import FooterNewsletter from "./FooterNewsLetter";
import EduLogo from "../../components/EduLogo";

const footerLinks = {
  learn: [
    { label: "Courses", to: "/courses" },
    {
      label: "Certifications",
      to: "/certifications",
    },
    {
      label: "Live Classes",
      to: "/live-classes",
    },
    {
      label: "Career Paths",
      to: "/career-paths",
    },
    { label: "Mentorship", to: "/mentorship" },
  ],
  company: [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Blog", to: "/blog" },
    { label: "Press", to: "/press" },
    { label: "Partners", to: "/partners" },
  ],
  support: [
    { label: "Help Center", to: "/help" },
    { label: "Contact Us", to: "/contact" },
    { label: "Terms of Service", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
    {
      label: "Student Support",
      to: "/support",
    },
  ],
  resources: [
    {
      label: "Success Stories",
      to: "/success-stories",
    },
    {
      label: "Student Community",
      to: "/community",
    },
    { label: "Teaching Center", to: "/teach" },
    { label: "Course Catalog", to: "/catalog" },
    {
      label: "Free Resources",
      to: "/resources",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <EduLogo />
            </div>
            <p className="text-gray-300 mb-6">
              Empowering minds through accessible
              online education. Learn at your
              pace, anywhere, anytime.
            </p>
            <FooterSocial />
          </div>

          {/* Links Sections */}
          <FooterColumn
            title="Learn"
            links={footerLinks.learn}
          />
          <FooterColumn
            title="Company"
            links={footerLinks.company}
          />
          <FooterColumn
            title="Support"
            links={footerLinks.support}
          />
          <FooterColumn
            title="Resources"
            links={footerLinks.resources}
          />
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FooterNewsletter />
            <div className="flex items-center justify-center lg:justify-end">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()}{" "}
                EduGo. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
