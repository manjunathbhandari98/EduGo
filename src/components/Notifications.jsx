/* eslint-disable no-unused-vars */
import React from "react";

// Random notification data (can be replaced with dynamic data)
const notificationsData = [
  {
    id: 1,
    title: "New Course Added!",
    description:
      "A new course on React.js has been added to your dashboard.",
    timestamp: "Just now",
  },
  {
    id: 2,
    title: "System Update",
    description:
      "The system will undergo maintenance at 12:00 AM tonight.",
    timestamp: "2 hours ago",
  },
  {
    id: 3,
    title: "Special Offer!",
    description:
      "Get 20% off on all courses this weekend. Don't miss out!",
    timestamp: "5 hours ago",
  },
  {
    id: 4,
    title: "New Message",
    description:
      "You have a new message in the forum from John Doe.",
    timestamp: "1 day ago",
  },
  {
    id: 5,
    title: "Reminder: Homework Deadline",
    description:
      "Don't forget to submit your homework by 10 PM tonight.",
    timestamp: "2 days ago",
  },
  // Add more notifications as needed
];

const Notifications = () => {
  return (
    <div className="max-w-sm w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Notifications
      </h3>
      <div
        className="space-y-3 overflow-y-auto max-h-[300px]" // Added scrolling and max-height
      >
        {notificationsData.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="mr-3 flex-shrink-0">
              {/* Notification Icon (You can add a custom icon or image) */}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">
                {notification.title}
              </p>
              <p className="text-sm text-gray-600">
                {notification.description}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
