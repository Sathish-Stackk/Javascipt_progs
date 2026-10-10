import { useState } from "react";

export default function CharacterAnalyzer() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div>
      <h2>Text Analyzer</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <p>Characters: {text.length}</p>
      <p>Words: {words}</p>
    </div>
  );
}
