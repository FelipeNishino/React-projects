import React from "react";
import Helmet from "react-helmet";

export default function SEO({ title }) {
	// const titleText = title || "404 ┌( ಠ_ಠ)┘ Senacgram";
	const titleText = title ? "${title} ┌( ಠ_ಠ)┘ Senacgram" : "Senacgram";
	return (
		<Helmet>
			<title>{titleText}</title>
		</Helmet>
	);
}
