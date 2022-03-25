import { v4 as uuid } from "uuid";

const user = {
	name: "Mamauchi",
	username: "M A M A U C H I",
	img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_299586.png&f=1&nofb=1",
	id: uuid(),
};

export default function getPost() {
	return {
		id: uuid(),
		user: user,
		text: "Olá mundo",
		img: "https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg",
		likes: 10,
		comments: [
			{
				user: user,
				text: "top",
			},
		],
	};
}
