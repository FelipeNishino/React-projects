import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function Descricao() {
	const [crypts, setCrypts] = React.useState(null);
	const url = "https://api.wazirx.com/sapi/v1/tickers/24hr";

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setCrypts(data));
	}, []);

	return !crypts ? (
		<h1>Carregando</h1>
	) : (
		<>
			<p>{crypts[0].baseAsset}</p>
			<p>{crypts[0].lastPrice}</p>
		</>
	);
}

ReactDOM.render(<Descricao />, document.getElementById("root"));
