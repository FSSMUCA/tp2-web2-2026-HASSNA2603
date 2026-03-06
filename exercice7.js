let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;
let sousTotal = prix * quantite ;
console.log("=====RECAPITULATIF=====");
console.log("Produit"+" " + ":"+ " "+ nomProduit);
console.log("Quantité" + " " +":" + " " + quantite);
console.log("Prix unit" + " " + ":" + prix +" " + "MAD" );
console.log("sous-total" +" " + ":" + " " + sousTotal + " " + "MAD");
let reduction = sousTotal * (reductionPourcentage / 100);
if(codePromo!==null && estMembre===true){
    console.log(" Réducion  " + reduction + "MAD" );
}
console.log(" Réducion  " + reduction + "MAD" );
 
let totalFinal = sousTotal - reduction ;
console.log("Total" +" " +":" + " " + totalFinal + " "+ "MAS");
let paiementAccepte = soldeCompte >= totalFinal;
console.log("Satut : " + "Paiement accepté");
let nouveauSolde = soldeCompte - totalFinal;
if(paiementAccepte){
    console.log("solde : " + nouveauSolde + " " + "MAD" );
}
console.log("======================");