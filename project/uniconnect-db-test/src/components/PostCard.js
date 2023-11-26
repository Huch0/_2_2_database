import React, { useEffect, useState } from "react";
import fetchData from "@/utils/fetchData";

export default function PostCard({ post, selectedUser }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const [author, setAuthor] = useState(null);
  const [likes, setLikes] = useState(null);

  useEffect(() => {
    fetchData(`/api/user/${post.author_id}`, setAuthor);
    // fetchData(`/api/like/${post.id}`, setLikes);
  });

  const handleLike = () => {
    // 좋아요 로직을 구현하세요.
  };

  const handleComment = () => {
    // 댓글 로직을 구현하세요.
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // 댓글 등록 로직을 구현하세요.
    // 예시: setComments([...comments, comment]);
    setComment("");
  };

  const handleDelete = () => {
    // 삭제 로직을 구현하세요.
  };
  const handleEdit = () => {
    // 수정 로직을 구현하세요.
  };

  return (
    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-1 w-full">
      <div className="flex items-start px-4 py-6">
        <div className="">
          <h1 className="text-lg font-semibold">{post.title} </h1>
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-gray-900 -mt-1">
              {author && author.user_name}
            </h2>
            <small className="text-sm text-gray-700">{post.createdAt}</small>
          </div>
          <p className="mt-3 text-gray-700 text-sm h-48">{post.content}</p>
          <div className="mt-4 flex items-center">
            <div className="flex justify-end space-x-4 p-4">
              <button className="flex mr-2 text-gray-700 text-sm mr-3">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>좋아요 개수</span>
              </button>
              <button className="flex mr-2 text-gray-700 text-sm mr-8">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span>댓글 수</span>
              </button>
              {
                // post.author_id가 selectedUser.id와 같으면 보임.
                post.author_id === selectedUser.id && (
                  <>
                    <button
                      onClick={handleEdit}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      수정
                    </button>
                    <button
                      onClick={handleDelete}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      삭제
                    </button>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
