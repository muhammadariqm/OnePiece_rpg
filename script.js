let scene = 0;
let textIndex = 0;
let typingSpeed = 35;

let story = [
	{
		name: "Luffy",
		text: "Hei! Kamu mau ikut berlayar denganku?",
		img: "img/kapten.png",
		bg: "bg/sea.png",
	},

	{
		name: "Zoro",
		text: "Kapten, kita butuh kru baru.",
		img: "img/zoro.png",
		bg: "bg/sea.png",
	},

	{
		name: "Nami",
		text: "Kalau mau ikut, kita akan menuju Grand Line.",
		img: "img/nami.png",
		bg: "bg/sea.png",
	},

	{
		name: "Luffy",
		text: "Petualangan dimulai sekarang!",
		img: "img/kapten2.png",
		bg: "bg/sea.png",
	},

	// CHAPTER 1

	{
		name: "Chapter 1",
		text: "Menuju Pulau Misterius",
		bg: "bg/pulau_n.png",
	},

	{
		name: "Narrator",
		text: "Beberapa hari setelah berlayar di East Blue...",
		bg: "bg/pulau_m.png",
	},

	{
		name: "Nami",
		text: "Kapten! Aku melihat sebuah pulau di depan!",
		img: "img/nami.png",
		bg: "bg/island.png",
	},

	{
		name: "Zoro",
		text: "Hmm... pulau itu terlihat aneh.",
		img: "img/zoro.png",
		bg: "bg/island.png",
	},

	{
		name: "Luffy",
		text: "Shishishi! Ayo kita ke sana!",
		img: "img/kapten2.png",
		bg: "bg/island.png",
	},

	{
		name: "Narrator",
		text: "Kapal Thousand Sunny perlahan mendekati pulau misterius itu...",
		bg: "bg/kapal.png",
	},

	{
		name: "Luffy",
		text: "Kita akan menjelajah pulau ini!",
		img: "img/kapten.png",
		bg: "bg/island.png",

		choices: [
			{ text: "Ikut menjelajah", next: 11 },
			{ text: "Tetap di kapal", next: 12 },
		],
	},

	// pilihan 1
	{
		name: "Zoro",
		text: "Baik! Aku akan ikut menjelajah pulau ini.",
		img: "img/zoro.png",
		bg: "bg/island.png",
	},

	// pilihan 2
	{
		name: "Nami",
		text: "Aku akan tetap menjaga kapal.",
		img: "img/nami.png",
		bg: "bg/kapal.png",
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
	document.getElementById("text").innerHTML = "";

	document.getElementById("background").style.backgroundImage =
		"url(" + story[scene].bg + ")";

	if (story[scene].img) {
		document.getElementById("character").src = story[scene].img;
		document.getElementById("character").style.display = "block";
	} else {
		document.getElementById("character").style.display = "none";
	}

	textIndex = 0;
	typeText();

	if (story[scene].choices) {
		showChoices(story[scene].choices);
	} else {
		document.getElementById("choices").innerHTML = "";
	}
}

function nextScene() {
	if (story[scene].choices) {
		return;
	}

	document.getElementById("clickSound").play();

	scene++;

	if (scene < story.length) {
		loadScene();
	}
}

function showChoices(options) {
	let html = "";

	options.forEach((option) => {
		html += `<button class="choice-btn" onclick="choose(${option.next})">${option.text}</button>`;
	});

	document.getElementById("choices").innerHTML = html;
}

function choose(next) {
	scene = next;

	document.getElementById("choices").innerHTML = "";

	loadScene();
}

window.onload = loadScene;
