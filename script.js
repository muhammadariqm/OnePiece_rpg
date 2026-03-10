let scene = 0;
let textIndex = 0;
let typingSpeed = 35;

let story = [
	{
		name: "Luffy",
		text: "Hei! Kamu mau ikut berlayar denganku?",
		img: "img/kapten.png",
	},

	{
		name: "Zoro",
		text: "Kapten, kita butuh kru baru.",
		img: "img/zoro.png",
	},

	{
		name: "Nami",
		text: "Kalau mau ikut, kita akan menuju Grand Line.",
		img: "img/nami.png",
	},

	{
		name: "Luffy",
		text: "Petualangan dimulai sekarang!",
		img: "img/kapten2.png",
	},
];

function typeText() {
	let text = story[scene].text;

	if (textIndex < text.length) {
		document.getElementById("text").innerHTML += text.charAt(textIndex);
		textIndex++;

		setTimeout(typeText, typingSpeed);
	}
}

function loadScene() {
	document.getElementById("name").innerText = story[scene].name;
	document.getElementById("character").src = story[scene].img;

	document.getElementById("text").innerHTML = "";
	textIndex = 0;

	typeText();
}

function nextScene() {
	scene++;

	if (scene < story.length) {
		loadScene();
	}
}

window.onload = loadScene;

function nextScene() {
	document.getElementById("clickSound").play();

	scene++;

	if (scene < story.length) {
		loadScene();
	}
}
