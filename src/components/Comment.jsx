import React, { useState } from "react";

function Comment({ comments, setComments }) {
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleClick = () => {
    let newComment = comment;
    setComment("");
    setComments([...comments, newComment]);
  };
  const handleDelete = (i) => {
    let delComment = [...comments];
    delComment.splice(i, 1);
    setComments(delComment);
  };
  return (
    <>
      {comments.map((e, i) => (
        <div className="render_comment" key={i}>
          <p>{e}</p>
          <div className="footer_comment_day">
            <span>18/05/2023</span>
            <i class="fas fa-trash" onClick={() => handleDelete(i)}></i>
          </div>
        </div>
      ))}
      <div className="comment">
        <textarea
          name=""
          id=""
          cols="30"
          onChange={handleChange}
          value={comment}
          placeholder="type reviwe here..."
        ></textarea>
        <div className="footer_number_commet">
          <span>{200 - comment.length} left</span>
          <div>
            <span>PUBLISH</span>
            <i class="fas fa-arrow-up" onClick={handleClick}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;