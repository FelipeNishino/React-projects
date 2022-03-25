import React from "react";
import Layout from "../components/shared/Layout";
import getPost from "../data";
import Post from "../components/feed/Post";

export default function Feed() {
	const posts = [getPost(), getPost(), getPost()];
	return (
		<Layout>
			<div style={{ marginTop: "70px" }} className="row">
				<div className="col-10 mx-auto">
					{posts.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</div>
			</div>
		</Layout>
	);
}
