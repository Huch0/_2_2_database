import { useState, useEffect } from "react";
import moment from "moment";

export default function CommentCard({ comments, selectedUser }) {
  const [newComment, setNewComment] = useState("");
  const [commentsWithAuthor, setCommentsWithAuthor] = useState([]);

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleNewCommentSubmit = () => {
    // 댓글 등록 로직을 구현하세요.
    // 예시: setComments([...comments, comment]);
    setNewComment("");
  };

  useEffect(() => {
    const fetchAuthors = async () => {
      const updatedComments = await Promise.all(
        comments.map(async (comment) => {
          const response = await fetch(`/api/user/${comment.author_id}`);
          const author = await response.json();
          return { ...comment, author_name: author.user_name };
        })
      );
      setCommentsWithAuthor(updatedComments);
    };

    fetchAuthors();
  }, [comments]);

  return (
    <div className="mt-4 w-full bg-blue-100 p-4 rounded-md">
      {comments &&
        commentsWithAuthor.map((comment, index) => (
          <div key={index} className="border-b border-gray-200 py-2">
            <p className="font-bold">{comment.author_name}</p>
            <p>{comment.content}</p>
            <p className="text-sm text-gray-500">
              {moment(comment.createdAt).fromNow()}
            </p>
          </div>
        ))}
      <div className="mt-2 flex items-center">
        <input
          type="text"
          value={newComment}
          onChange={handleNewCommentChange}
          placeholder="Type a comment..."
          className="flex-grow rounded-lg border-gray-300 p-2"
        />
        <button
          onClick={handleNewCommentSubmit}
          className="ml-2 bg-blue-400 text-white rounded-lg px-4 py-2"
        >
          작성
        </button>
      </div>
    </div>
  );
}
