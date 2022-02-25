import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function Descricao() {
	const langs = [
		{ name: "Python", years: "2" },
		{ name: "C", years: "3" },
		{ name: "Javascript", years: "1.5" },
		{ name: "Ruby", years: "1" },
		{ name: "Swift", years: "2" },
	];
	const [lang, setLang] = React.useState(langs[0]);
	const [dev, setDev] = React.useState("Nishas");

	function handleClickLinguagem() {
		setLang(langs[(langs.findIndex((l) => l.name == lang.name, lang) + 1) % 4]);
	}

	useEffect(() => {
		document.title = dev;
	}, [dev]);

	function handleChangeName(event) {
		setDev();
	}

	return (
		<>
			<p>Eu sei {lang.name}</p>
			<p>Trabalho com essa linguagem a {lang.years} ano(s).</p>

			<button onClick={handleClickLinguagem}>Próxima linguagem</button>

			<input type="text" onChange={handleChangeName} placeholder="Nome" />
			<button onClick={handleChangeName}> trocar nome</button>
		</>
	);
}

ReactDOM.render(<Descricao />, document.getElementById("root"));
