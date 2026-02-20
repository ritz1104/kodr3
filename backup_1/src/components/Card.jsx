import React from "react";
import Button from "./Button";


const Card = ({ postData,like,dislike }) => {
  console.log(postData)
  return (
    <div className="flex gap-2 flex-wrap">
        {postData.map((post)=>(
          <div
          key={post.id}
          className="card flex flex-col items-center py-2 w-70 h-70 rounded-lg bg-amber-200"
        >
          <img
            className="w-30 h-30 rounded-full bg-red-400"
            src={post.profileImage
}
            alt=""
          />

          <h1 className="text-2xl">{post.userName}</h1>

          <p className="text-center">{post.description}</p>

          <h3>like count : {post.likeCount}</h3>

        <Button like={()=>like(post.id)} dislike={()=>dislike(post.id)}/>
          
        </div>
        ))}
    </div>
  );
};

export default Card;
