import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

function Inicio(props) {
	function handleClickAno() {
		alert(props.ano);
	}

	const hello = (
		<>
			<h1 onClick={handleClickAno}>Hello world in {props.ano}!</h1>
			<p>Você {!props.loggedIn ? "não" : ""} está logado!</p>
		</>
	);
	return hello;
}

function Layout(props) {
	return <div id="layout">{props.children}</div>;
}

function Alunos() {
	const alunos = ["Barão", "Bee", "Cadu", "Sayuri"];

	return (
		<ul>
			{alunos.map((aluno, index) => (
				<li key={index}>{aluno}</li>
			))}
		</ul>
	);
}

function Card(props) {
	<div className="col-3">
		<h1>{props.name}</h1>
		<p className="col-6">{props.value}</p>
		<p className="col-6">{props.change}</p>
	</div>;
}

function Homebroker() {
	const stocks = [
		{
			name: "ORCL",
			value: "75.60",
			change: "-3.59",
		},
		{
			name: "WMT",
			value: "138.85",
			change: "+5.32",
		},
		{
			name: "CMG",
			value: "1,509.15",
			change: "-66.28",
		},
		{
			name: "FB",
			value: "207.71",
			change: "-8.83",
		},
		{
			name: "MSFT",
			value: "290.73",
			change: "-8.77",
		},
	];

	return (
		<div>
			{stocks.map((stock) => (
				<Card name={stock.name} value={stock.value} change={stock.change} />
			))}
		</div>
	);
}

function App() {
	return (
		<>
			<header className="d-flex align-items-center p-4">
				<p>SóAção</p>
			</header>

			<main>
				<p>asd</p>
				{/* <Homebroker /> */}
			</main>
		</>
	);

	// return (
	// 	<Layout>
	// 		<Inicio ano={2022} loggedIn={true} />
	// 		<Inicio ano={2023} loggedIn={true} />
	// 		<Inicio ano={2024} loggedIn={true} />
	// 		<Alunos />
	// 	</Layout>
	// );
}

ReactDOM.render(<App />, root);
