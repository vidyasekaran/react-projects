// YouTubeVideoList.jsx
import React, { useState } from "react";
import axios from "axios";

const YouTube = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyB82fAzRsqFD_xNXOhYcPpFnyt8Jt0JPE4"; // 🔐 Replace with your actual API key
  const CHANNEL_ID = "UCOd18HOQv5m7HUz0SSpJvjQ"; // 🔍 Replace with your channel ID

  const fetchVideos = async () => {
    setLoading(true);
    let urls = [];
    let nextPageToken = "";
    try {
      do {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              key: API_KEY,
              channelId: CHANNEL_ID,
              part: "snippet",
              order: "date",
              maxResults: 50,
              pageToken: nextPageToken,
              type: "video",
            },
          }
        );

        /*const items = response.data.items;
        const newUrls = items.map(
          (item) => `https://www.youtube.com/watch?v=${item.id.videoId}`
        );
        urls = [...urls, ...newUrls];*/

        const items = response.data.items;
        const newUrls = items.map((item) => ({
          title: item.snippet.title,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
        urls = [...urls, ...newUrls];

        nextPageToken = response.data.nextPageToken;
      } while (nextPageToken);

      setVideoUrls(urls);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>📺 My YouTube Videos</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={fetchVideos}
        disabled={loading}
      >
        {loading ? "Fetching..." : "Get All Video Links"}
      </button>
      <ul className="list-group">
        {videoUrls.map((url, index) => (
          <li key={index} className="list-group-item">
            <strong>{video.title}</strong>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTube;
