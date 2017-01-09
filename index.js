let ticket = [{
    "nom": "Fromage Président Camembert",
    "prix": 2.58,
    "tva": 1,
    "quantité": 2
}, {
    "nom": "Beurre La Laitière",
    "prix": 1.70,
    "tva": 1,
    "quantité": 1
}, {
    "nom": "Whiskey J&B",
    "prix": 9.42,
    "tva": 2,
    "quantité": 2
}, {
    "nom": "Croquette Animalières Whiskas",
    "prix": 3.73,
    "tva": 2,
    "quantité": 1
}, {
    "nom": "Gel Douche Dove for Men 0%",
    "prix": 2.31,
    "tva": 2,
    "quantité": 3
}, {
    "nom": "Chocolat Allegé Milka",
    "prix": 1.28,
    "tva": 2,
    "quantité": 5
}, {
    "nom": "Vin Chardonnay Suisse",
    "prix": 7.99,
    "tva": 2,
    "quantité": 1
}, {
    "nom": "Mort SUB Belg",
    "prix": 12.99,
    "tva": 2,
    "quantité": 5
}];

let totalHT = 0, prodQttTTC = 0, prodUnTTC = 0, totalTTC = 0;
for (let i in ticket) {
    let prodQttHT = ticket[i].prix * ticket[i].quantité;
    totalHT += prodQttHT;
    console.log(ticket[i].nom);
    console.log('Hors taxe, 1 ' + ticket[i].nom + ' = ' + ticket[i].prix + '€ HT');
    console.log('Hors taxe, ' + ticket[i].quantité + ' ' + ticket[i].nom + ' = ' + prodQttHT + '€ HT');
    if (ticket[i].tva == 1) {
        prodQttTTC = prodQttHT + (prodQttHT * 0.055);
        prodUnTTC = ticket[i].prix + (ticket[i].prix * 0.055);
    } else {
        prodQttTTC = prodQttHT + (prodQttHT * 0.2);
        prodUnTTC = ticket[i].prix + (ticket[i].prix * 0.2);
    }
    totalTTC += prodQttTTC;
    console.log('Toutes taxes comprises, 1 ' + ticket[i].nom + ' = ' + prodUnTTC.toFixed(2) + '€ TTC');
    console.log('Toutes taxes comprises, ' + ticket[i].quantité + ' ' + ticket[i].nom + ' = ' + prodQttTTC.toFixed(2) + '€ TTC');
}
console.log('total hors taxe = ' + totalHT + '€');
console.log('total toutes taxes comprises = ' + totalTTC.toFixed(2) + '€');
