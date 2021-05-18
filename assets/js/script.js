//Primera Parte --> Datos Personales

document.write('<div class="container">');
document.write('<h1 class="font-weight-bold">Notas Finales</h1>');
document.write('<br>');

var nombre = prompt("Ingrese su nombre completo", "Felipe Lastra");
document.write('<p class="font-weigh-bold"><span class="arreglo">Nombre:</span>'+nombre+'</p>');
document.write('<br>');

var carrera = prompt("Ingrese su carrera", "Desarrollo Web");
document.write('<p class="font-weigh-bold"><span class="arreglo">Carrera:</span>'+carrera+'</p>');
document.write('<br>');

// Cursos y notas

var curso1 = prompt("Ingrese el curso", "HTML");
var nota1html = prompt("Ingrese nota 1 del curso HTML", "5.5");
var nota2html = prompt("Ingrese nota 2 del curso HTML", "6.7");
var nota3html = prompt("Ingrese nota 3 del curso HTML", "5.1");
var curso2 = prompt("Ingrese el curso", "CSS");
var nota1css = prompt("Ingrese nota 1 del curso CSS", "4.6");
var nota2css = prompt("Ingrese nota 2 del curso CSS", "7");
var nota3css = prompt("Ingrese nota 3 del curso CSS", "6.3");
var curso3 = prompt("Ingrese el curso", "Javascript");
var nota1js = prompt("Ingrese nota 1 del curso JS", "5.2");
var nota2js = prompt("Ingrese nota 2 del curso JS", "3.6");
var promediohtml = (parseFloat(nota1html)+parseFloat(nota2html)+parseFloat(nota3html))/3
var promediocss = (parseFloat(nota1css)+parseFloat(nota2css)+parseFloat(nota3css))/3

// Cálculo de la Nota que Falta en JS
var promedioaprox = prompt("Ingrese nota de aprobación del ramo", "4");
var promedionotas = ((parseFloat(nota1js)*0.33) + (parseFloat(nota2js)*0.33));
var notanecesaria = ((parseFloat(promedioaprox)-parseFloat(promedionotas))/0.33);


// Impresión de datos

document.write('<table class="table">');
document.write('<thead class="thead-dark">');
document.write('<tr>');
document.write('<th scope="col">Ramo</th>');
document.write('<th scope="col">Nota 1</th>');            
document.write('<th scope="col">Nota 2</th>');              
document.write('<th scope="col">Nota 3</th>');              
document.write('<th scope="col">Promedio</th>');             
document.write('</tr>');            
document.write('</thead>');        
document.write('<tbody>');           
document.write('<tr>');         

// HTML

document.write('<th scope="row">'+curso1+'</th>');          
document.write('<td>'+nota1html+'</td>');          
document.write('<td>'+nota2html+'</td>');          
document.write('<td>'+nota3html+'</td>');          
document.write('<td>'+promediohtml.toFixed(2)+'</td>');          
document.write('</tr>');            
document.write('<tr>');     

// CSS

document.write('<th scope="row">'+curso2+'</th>');           
document.write('<td>'+nota1css+'</td>');           
document.write('<td>'+nota2css+'</td>');           
document.write('<td>'+nota3css+'</td>');           
document.write('<td>'+promediocss.toFixed(2)+'</td>');          
document.write('</tr>');         
document.write('<tr>');   

// JAVASCRIPT

document.write('<th scope="row">'+curso3+'</th>');           
document.write('<td>'+nota1js+'</td>');         
document.write('<td>'+nota2js+'</td>');         
document.write('<td>-</td>');          
document.write('<td>-</td>');            
document.write('</tr>'); 

document.write('</tbody>');       
document.write('</table>');  


// Nota al pie sobre nota necesaria

document.write('<p>Para aprobar el ramo '+curso3+' con nota '+promedioaprox+' necesitas obtener un '+notanecesaria.toFixed(2)+' en la nota 3</p>');    
document.write('</div>');    




            