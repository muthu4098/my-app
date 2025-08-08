import { useState } from "react";

export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [disLike, setLike1] = useState(0);



  // Dislike
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>

      <button onClick={() => setLike1(disLike + 1)}>👎 {disLike}</button>

    </div>
  );
}
