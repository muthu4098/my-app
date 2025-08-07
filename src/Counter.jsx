import { useState } from "react";
export function 
Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setLike1] = useState(0);



  // Dislike
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>

      <button onClick={() => setLike1(disLike + 1)}>👎 {disLike}</button>
      <progress max={like + disLike} value={like} ></progress>
      {/* conditional Rendering */}
      {/* {like-disLike>10 ? <h1>Awesome</h1> :<h1></h1>} */}
      {like>=disLike-10 ? <h1>Awesome</h1> :<h1></h1>}

    </div>
  );
}


