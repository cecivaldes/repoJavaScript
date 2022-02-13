document.write("<br><h2> Resultados </h3><br>")

document.write("<em>El número de enlaces existentes es " + document.links.length + ".</em>");
   
const links = document.getElementsByTagName("a")
const thirdParagraph = document.getElementById("third-paragraph").getElementsByTagName("a")
 
const paragraph3 = document.createElement("p")
paragraph3.innerHTML = ( "<em> Dirección a la que enlaza el penúltimo enlace es <a href='" + links[(links.length - 2)] + "'>" + links[(links.length - 2)] + "</a>. </em>")
document.body.append(paragraph3) 

const paragraph4 = document.createElement("p")
paragraph4.innerHTML = ( "<em> El número de enlaces en el tercer párrafo es " + thirdParagraph.length + " links.</em>")
document.body.append(paragraph4)