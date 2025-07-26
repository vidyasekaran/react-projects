// SpotifyTrackList.jsx
import React, { useState } from "react";
import axios from "axios";

const SpotifyTrackList = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const CLIENT_ID = "3c285969d92a457a901a2c26c86429c5";
  const CLIENT_SECRET = "a66b5433795f4eb9b391c0f5db15b2eb";
  const PLAYLIST_ID = "3diTrqSFWQfbpalggpakuO"; // 3diTrqSFWQfbpalggpakuO ; 5yCPi4mrflUBUBtqwn7f4s

  const fetchTracks = async () => {
    setLoading(true);
    try {
      // Step 1: Get access token
      const tokenRes = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: {
            Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const accessToken = tokenRes.data.access_token;
      console.log("accessToken" + accessToken);

      // Step 2: Fetch playlist tracks
      const tracksRes = await axios.get(
        `//https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`,
        `https://api.spotify.com/v1/playlists/{PLAYLIST_ID}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const trackList = tracksRes.data.items.map((item) => ({
        name: item.track.name,
        url: item.track.external_urls.spotify,
      }));

      setTracks(trackList);
    } catch (err) {
      console.error("Error fetching Spotify tracks", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>🎧 Spotify Playlist Tracks</h2>
      <button onClick={fetchTracks} className="btn btn-success mb-3">
        {loading ? "Loading..." : "Get Playlist Tracks"}
      </button>
      <ul className="list-group">
        {tracks.map((track, index) => (
          <li key={index} className="list-group-item">
            <a href={track.url} target="_blank" rel="noopener noreferrer">
              {track.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyTrackList;
