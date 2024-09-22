"use client";

import { useState, useCallback } from "react";

export default function Home() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const generateUuids = useCallback(async () => {
    const response = await fetch(`/api/generate?count=${count}`);
    const data = await response.json();
    setUuids(data.uuids || [data.uuid]);
  }, [count]);

  const copyUuids = useCallback(() => {
    if (uuids.length > 0) {
      const textToCopy = uuids.join("\n");
      navigator.clipboard.writeText(textToCopy);
      setCopyButtonText("Copied!");
      setTimeout(() => {
        setCopyButtonText("Copy");
      }, 2000);
    }
  }, [uuids]);

  return (
    <div className="p-4">
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="number"
          min="1"
          max="100"
          value={count}
          onChange={(e) =>
            setCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))
          }
          className="w-16 px-2 py-1 border rounded"
        />
        <button
          onClick={generateUuids}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Generate
        </button>
        <button
          onClick={copyUuids}
          className="px-3 py-1 border rounded hover:bg-gray-100"
          disabled={uuids.length === 0}
        >
          {copyButtonText}
        </button>
      </div>
      <div className="space-y-2">
        {uuids.map((uuid, index) => (
          <input
            key={index}
            type="text"
            value={uuid}
            readOnly
            className="w-full px-2 py-1 border rounded"
          />
        ))}
      </div>
    </div>
  );
}
