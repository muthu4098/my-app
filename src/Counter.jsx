import { useState } from "react";

export function 
Counter() {
  const [like, setLike] = useState(10);
  const [disLike, setLike1] = useState(10);


  // Dislike
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>

      <button onClick={() => setLike1(disLike + 1)}>👎 {disLike}</button>
      <progress max={like + disLike} value={like}></progress>

    </div>
  );
}
