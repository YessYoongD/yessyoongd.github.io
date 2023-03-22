let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  //cambiar el color de la frase que viene abajo de hola soy Yesbel
  .typeString('<span style = "color: #4b3c48; ">Soy UX designer y desarrollo sitios web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  
