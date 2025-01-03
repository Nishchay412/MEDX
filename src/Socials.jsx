import React, { useEffect, useState } from "react";

export function Socials() {
  const [data, setData] = useState([]); // Initialize with an empty array
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Proxy for CORS

  useEffect(() => {
    fetch('/dataset_instagram-scraper-task_2024-12-03_03-40-16-512.json') // Path to the file in the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON data
      })
      .then((jsonData) => {
        console.log(jsonData); // Log the fetched JSON
        setData(jsonData); // Set the data in state
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="bg-white p-4">
      <h1 className="text-red-600 text-2xl font-bold mb-4">Instagram Posts</h1>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              {/* Display Image */}
              <img
                src={`${proxyUrl}${item.displayUrl || item.images[0]}`} // Add proxy for CORS
                alt={item.alt || "Instagram Post"}
                className="w-full h-48 object-cover rounded-md mb-2"
                onError={(e) =>
                  (e.target.src = "/fallback-image.jpg") // Replace with fallback image if error
                }
              />

              {/* Post Type */}
              <p className="text-sm text-gray-500">{item.type}</p>

              {/* Short Code as Link */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Post
              </a>

              {/* Caption */}
              <p className="mt-2 text-gray-800 text-sm">
                {item.caption || "No caption available"}
              </p>

              {/* Likes Count */}
              <p className="text-gray-600 text-sm mt-1">
                ❤️ {item.likesCount || 0} Likes
              </p>

              {/* Comments Count */}
              <p className="text-gray-600 text-sm">
                💬 {item.commentsCount || 0} Comments
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading data...</p>
      )}
    </div>
  );
}
