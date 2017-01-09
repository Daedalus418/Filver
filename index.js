let ticket = [
	{ "nom": "Fromage Président Camembert",
		"prix": 2.58,
		"tva": 1,
		"quantité": 2
	},
	{ "nom": "Beurre La Laitière",
		"prix": 1.70,
		"tva": 1,
		"quantité": 1
	},
	{ "nom": "Whiskey J&B",
		"prix": 9.42,
		"tva": 2,
		"quantité": 2
	},
	{ "nom": "Croquette Animalières Whiskas",
		"prix": 3.73,
		"tva": 2,
		"quantité": 1
	},
	{ "nom": "Gel Douche Dove for Men 0%",
		"prix": 2.31,
		"tva": 2,
		"quantité": 3
	},
	{ "nom": "Chocolat Allegé Milka",
		"prix": 1.28,
		"tva": 2,
		"quantité": 5
	},
	{ "nom": "Vin Chardonnay Suisse",
		"prix": 7.99,
		"tva": 2,
		"quantité": 1
	},
	{ "nom": "Mort SUB Belg",
		"prix": 12.99,
		"tva": 2,
		"quantité": 5
	}
];

/*Total Hors Taxe*/
let totalHT = 0;
for (let i in ticket) {
  totalHT += ticket[i].prix*ticket[i].quantité;
}
console.log(totalHT);

/*prix HT par produit en fonction de sa quantité*/
let prodQttHT = 0;
for (let i in ticket) {
  prodQttHT = ticket[i].prix*ticket[i].quantité;
  console.log(ticket[i].nom + ' = ' + prodQttHT);
}

/*prix HT par produit unitaire*/
let prodUnHT = 0;
for (let i in ticket) {
  console.log('1 ' + ticket[i].nom + ': ' + ticket[i].prix);
}
