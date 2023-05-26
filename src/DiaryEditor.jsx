import React, { useState } from "react";

export default function DiaryEditor() {
  const [author, setAuthor] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={author}
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
    </div>
  );
}
