import { useState } from "react";

export function ColorGame() {
  const [color, setColor] = useState("");
  const styles = {
    background: color
  };
  return (
    <div>
      <input style={styles} onChange={(event) => setColor(event.target.value)} type="text" />
      <h1>{color}</h1>
    </div>
  );
}
