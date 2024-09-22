"use client";

import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [uuid, setUuid] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const generateUuid = useCallback(() => {
    setUuid(uuidv4());
  }, []);

  const copyUuid = useCallback(() => {
    if (uuid) {
      navigator.clipboard.writeText(uuid);
      setCopyButtonText("Copied!");
      setTimeout(() => {
        setCopyButtonText("Copy");
      }, 2000); // Revert after 2 seconds
    }
  }, [uuid]);

  return (
    <div className="p-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={uuid}
          readOnly
          placeholder="Generated UUID will appear here"
          className="flex-grow px-2 py-1 border"
        />
        <button
          onClick={generateUuid}
          className="px-3 py-1 border hover:bg-gray-100"
        >
          Generate
        </button>
        <button
          onClick={copyUuid}
          className="px-3 py-1 border hover:bg-gray-100"
          disabled={!uuid}
        >
          {copyButtonText}
        </button>
      </div>
    </div>
  );
}
