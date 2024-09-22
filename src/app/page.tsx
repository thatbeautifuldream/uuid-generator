"use client";

import { useState, useCallback } from "react";

export default function Home() {
  const [uuid, setUuid] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const generateUuid = useCallback(async () => {
    const response = await fetch("/api/generate");
    const data = await response.json();
    setUuid(data.uuid);
  }, []);

  const copyUuid = useCallback(() => {
    if (uuid) {
      navigator.clipboard.writeText(uuid);
      setCopyButtonText("Copied!");
      setTimeout(() => {
        setCopyButtonText("Copy");
      }, 2000);
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
