/* eslint-disable no-unused-vars */
import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const FooterSocial = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            aria-label={social.label}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default FooterSocial;
