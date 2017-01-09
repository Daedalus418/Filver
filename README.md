# Filver

Pour démarrer le fichier, il faut double-cliquer sur le fichier index.html et ouvrir la console de l’inspecteur du navigateur.

L’arrondi est à revoir, ce qui m’éviterait 11.30 * 2 = 22.61 ...

J’aurais voulu afficher mes calculs dans mon fichier .html grâce à du Jquery mais ça ne fonctionne pas comme je veux et je manque de temps pour faire plus de recherches.
Là, ça m’affiche le premier nom de produit et ça me renvoie tous les prix des autres produits ; ensuite on passe au nom du deuxième produit et ça recalcule la même chose.
On voit que j’essaie de faire des trucs en Jquery, mais je pense qu’il faut que j’arrête ^^

J’ai préféré downgrader et revenir à un console.log classique.
Mais j’ai laissé le code que j’ai tenté en Jquery et je l’ai commenté.
Si tu veux voir ce que ça donne et rigoler un coup, décommente de la ligne 65 à 92 et commente de la ligne 43 à 62.

Pour mon algo, après avoir parcouru mon tableau, je calcule le prix d’un produit en fonction de sa quantité et HT, je fais également le total HT en additionnant les résultats faits à la ligne du dessus.

Ensuite, je commence par afficher le nom des produits pour plus de lisibilité auquel je vais ajouter, juste en dessous,
le prix HT d’un produit (ticket[i].prix)
et son prix HT en fonction de sa quantité(prodQttHT).

Ensuite, j’attaque le TTC, je distingue les deux TVA et ensuite je calcule
le prix du produit TTC à l’unité (prodUnTTC)
et en fonction de sa quantité (prodQttTTC).
Je les affiche en sortant de la condition.

Enfin, j’affiche le total de tous les produits en fonction de leur quantité HT (totalHT) et TTC (totalTTC).
