import react from "react";
import Navbar from "./Navbar";
import SEO from "./SEO";

export default function Layout({ children, title }) {
	return (
		<>
			<SEO title={title} />
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
		</>
	);
}
