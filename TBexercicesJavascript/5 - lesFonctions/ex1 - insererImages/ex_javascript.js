const produit = (x,y) => {
    const resultat = x*y;
    return resultat
}
document.getElementById("produit").innerHTML = produit(3,5);

function afficherImg(image) {
    document.getElementById("papillon").src = image;
}

afficherImg(("assets/images/papillon.jpg"));

/* CORRECTION
  var nombre;
     var multiple;
     var image = "";
​
     function cube(nombre) 
     {
	    nombre = prompt("Saisissez un nombre entier");
	    cube = nombre * nombre * nombre;
	     console.log("Le cube de " + nombre + " est égal à " + cube);
	    return cube;
     }
​
     function produit(nombre, multiple) 
     {
	    produit = nombre * multiple;
	    console.log("Le produit de " + nombre + " x " + multiple + " est égal à " + produit);
	    return produit;
     }
​
     function afficheImg(image) 
     {
       // Comme on a besoin d'afficher du HTML, il faut utiliser la fonction document.write(); 
      
       // Attention au guillements pour la concaténation, il faut échapper avec des \ les guillemets des attributs HTML
	   document.write("<img src=\""+image+"\">");
     }
​
     // Appels des fonctions
     var resultat = cube(3);
​
     console.log("cube : "+cube);
     afficheImg("papillon.jpg");
    
*/
