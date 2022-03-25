import React from "react";
import Layout from "../shared/Layout";
import Comment from "./Comment";

export default function Post({ post }) {
	return (
		<>
			<article
				style={{ maxWidth: "700px" }}
				className="mx-auto my-3 border rounded-1"
			>
				<div className="text-start m-3">
					<img
						src={post.user.img}
						className="rounded-cicrcle"
						style={{ maxWidth: "40px", maxHeight: "40px" }}
					/>
					<span className="mx-2 fw-bold">{post.user.name}</span>
				</div>
				<div>
					<img src={post.img} className="img-fluid" />
				</div>
				<div>
					<i className="fab fa-bluetooth-b"></i>
					<i className="fas fa-wifi"></i>
				</div>
				<div>
					<span className="d-block fw-bold">
						{post.likes + " like" + (post.likes == 1 ? "" : "s")}
					</span>
					<span className="fw-bold">{post.user.username + " "}</span>
					<span>{post.text}</span>
					{post.comments.map((comment) => (
						<Comment comment={comment} />
					))}
				</div>
			</article>
		</>
	);
}
