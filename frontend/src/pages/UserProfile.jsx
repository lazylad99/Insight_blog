import React from 'react';
import { Mail, BookOpen, Github, Twitter, Linkedin } from 'lucide-react';
import img from "../assets/a10.jpg"

const UserProfile = () => {
  const interests = ["Business", "Technology", "Food"];
  const stats = [
    { label: "Posts", value: "28" },
    { label: "Followers", value: "2.1k" },
    { label: "Following", value: "89" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Cover & Profile Section */}
        <div className="relative pb-24">
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500" />
          
          {/* Profile Image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
            <img 
              src={img}
              alt="Alok Deep"
              className="rounded-full w-32 h-32 border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center p-6">
          <h2 className="text-2xl font-bold text-gray-800">Alok Deep</h2>
          <p className="text-gray-600 mt-1">MCA Student</p>
          <p className="text-sm text-gray-500">Scholar No. 23146002</p>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              Message
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <BookOpen className="w-4 h-4 mr-2" />
              Following
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-6 py-4 border-t border-b border-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-left">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-600">Email</h4>
              <p className="text-gray-800">alokdeep9925@gmail.com</p>
            </div>

            {/* Interests */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6 justify-center">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;