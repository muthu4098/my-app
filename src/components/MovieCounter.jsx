import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from '@mui/material/Badge'
export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [disLike, setdislike] = useState(0);



  // Dislike
  return (
    <div className="like-btn">
      <Badge badgeContent={like} color="primary">
      <ThumbUpIcon className='like-btn'onClick={() => setLike(like + 1)} /></Badge>
      <Badge className="dislike-btn"badgeContent={disLike} color="secondary">
       <ThumbDownIcon onClick={() => setdislike(disLike + 1)} /></Badge>


    </div>
  );
}
