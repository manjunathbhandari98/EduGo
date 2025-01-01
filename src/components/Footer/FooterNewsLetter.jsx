/* eslint-disable no-unused-vars */
import React from "react";
import { Send } from "lucide-react";

const FooterNewsLetter = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-semibold text-gray-100 text-lg">
        Stay Updated
      </h3>
      <p className="text-gray-300 text-sm">
        Subscribe to our newsletter for the latest
        courses and updates.
      </p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Subscribe</span>
        </button>
      </form>
    </div>
  );
};

export default FooterNewsLetter;
