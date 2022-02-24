import React from "react";

function Noticias() {
  const noticias = [
    {
      categoria: "BCC",
      titulo: "M A M A U C H I",
      descricao:
        "Gustavo Yamauchi tem carteira cassada após andar de lado com o carrinho",
    },
    {
      categoria: "CCB",
      titulo: "I H C U A M A M",
      descricao:
        "ohnirrac o moc odal ed radna sópa adassac arietrac met ichuamaY ovatsuG",
    },
  ];

  const noticiasFormatadas = noticias.map((noticia) => (
    <div className="col-6">
      <div className="row">
        <div className="col">
          <a href="/">{noticia.categoria}</a>
          <h2>{noticia.titulo}</h2>
          <p>{noticia.descricao}</p>
          <a href="/">Leia mais...</a>
        </div>
        <div className="col-auto">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qeJOG5X6Q6P5OqOqgxWpiAHaEq%26pid%3DApi&f=1" />
        </div>
      </div>
    </div>
  ));

  return <div className="row">{noticiasFormatadas}</div>;
}

export default Noticias;
