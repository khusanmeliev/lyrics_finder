import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

function FindLyrics() {
  const [artist, setArtist] = useState(" ");
  const [song, setSong] = useState(" ");
  const [lyrics, setLyrics] = useState(" ");

  const searchLyrics = () => {
    if (artist === "" || song === "") {
      return console.log("err");
    }
    axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    });
  };

  return (
    <div className="lyrics">
      <h1>Lyrics Finder</h1>

      <input
        type="text"
        placeholder="Artist name"
        onChange={(e) => {
          setArtist(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Song name"
        onChange={(e) => {
          setSong(e.target.value);
        }}
      />
      <button
        onClick={() => {
          searchLyrics();
        }}
      >
        Search
      </button>
      <hr />
      <pre>{lyrics}</pre>
    </div>
  );
}

export default FindLyrics;
