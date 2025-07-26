// YouTubeVideoList.jsx
import React, { useState } from "react";
import axios from "axios";

const YouTubeVideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyB82fAzRsqFD_xNXOhYcPpFnyt8Jt0JPE4";
  const CHANNEL_ID = "UCOd18HOQv5m7HUz0SSpJvjQ";

  const fetchVideos = async () => {
    setLoading(true);
    let allVideos = [];
    let nextPageToken = "";
    try {
      do {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
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

        const items = response.data.items;
        const newVideos = items.map((item) => ({
          title: item.snippet.title,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));

        allVideos = [...allVideos, ...newVideos];
        nextPageToken = response.data.nextPageToken;
      } while (nextPageToken);

      setVideos(allVideos);
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
        {videos.map((video, index) => (
          <li key={index} className="list-group-item">
            <strong>{video.title}</strong>
            <br />
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              {video.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeVideoList;
