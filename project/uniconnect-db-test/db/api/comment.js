import { Comments } from "../models/index.js";

export async function getCommentsByPostId(selectedRole, id) {
  const Comment = selectComment(selectedRole);

  const comments = await Comment.findAll({
    where: {
      post_id: id,
    },
    order: [["createdAt", "DESC"]],
  });

  return comments;
}

function selectComment(selectedRole) {
  let Comment = null;

  switch (selectedRole) {
    case "admin":
      Comment = Comments.adminComment;
      break;
    case "reader":
      Comment = Comments.readerComment;
      break;
    case "student":
      Comment = Comments.studentComment;
      break;
    case "researcher":
      Comment = Comments.researcherComment;
      break;
    case "lab_manager":
      Comment = Comments.labManagerComment;
      break;
    case "banned":
      Comment = Comments.bannedComment;
      break;
    default:
      Comment = Comments.adminComment;
      break;
  }

  return Comment;
}
