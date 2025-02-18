import React, { useEffect, useState } from "react";
import { imageData } from "./ig_images"; // Import as named export

export function Socials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(imageData); // Directly set the imported data
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black p-6">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">
        Instagram Posts
      </h1>

      {/* Posts Grid */}
      {data.length > 0 ? (
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-200"
            >
              {/* Post Image */}
              <img
                src={item.screenshot}
                alt={item.caption || "Instagram Post"}
                className="w-full h-60 object-cover"
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />

              <div className="p-4">
                {/* Short Code as Link */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white font-semibold hover:underline inline-block"
                >
                  View Post
                </a>

                {/* Caption */}
                <p className="text-gray-300 mt-2 text-sm">
                  {item.caption || "No caption available"}
                </p>

                {/* Likes & Comments */}
                <div className="flex items-center justify-between mt-3">
                  <p className="text-gray-400 text-sm">❤️ {item.likesCount} Likes</p>
                  <p className="text-gray-400 text-sm">💬 {item.commentsCount} Comments</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300">Loading data...</p>
      )}
    </div>
  );
}
