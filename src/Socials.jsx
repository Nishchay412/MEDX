import React, { useEffect, useState } from "react";

export function Socials() {
  const [data, setData] = useState([]);
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // optional CORS proxy

  useEffect(() => {
    // Update with the correct path to your JSON file
    fetch("/dataset_instagram-scraper-task_2024-12-03_03-40-16-512.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
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
          {data.slice(0, 7).map((item, index) => {
            // Log the first image URL (if any) for each post
            console.log("Image URL:", item.images?.[0]);

            return (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-200"
              >
                <img
                  src={`${proxyUrl}${item.displayUrl || item.images?.[0]}`}
                  alt={item.alt || "Instagram Post"}
                  className="w-full h-60 object-cover"
                  onError={(e) => (e.target.src = "/fallback-image.jpg")}
                />

                <div className="p-4">
                  {/* Post Type */}
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    {item.type}
                  </p>

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
                    <p className="text-gray-400 text-sm">
                      ❤️ {item.likesCount || 0} Likes
                    </p>
                    <p className="text-gray-400 text-sm">
                      💬 {item.commentsCount || 0} Comments
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-300">Loading data...</p>
      )}
    </div>
  );
}
