const randomMessages = [
	'iliyi günler',
	'iyi ben sen',
	"Can Ahmet'ten öğrendim",
	'git giiiiit',
	'channam',
	'vaaaaaaaaa',
	'en kötü istifamı verir defolur giderim',
]

export function iyiBenSen(text: string) {
	if (text == 'nasılsın') return 'iyi ben sen'
	else return 'git giiiiit'
}

export function getRandomText(): string {
	const index = Math.floor(Math.random() * randomMessages.length)
	return randomMessages[index]
}
