(function(){
    function test(){

      const output = [];
  
      preguntas.forEach(
        (current, num) => {
  
          const respuetas = [];
  
          for(letter in current.respuetas){
  
            respuetas.push(
              `<label>
                <input type="radio" name="pregunta${num}" value="${letter}">
                ${letter} :
                ${current.respuetas[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="pregunta"> ${current.pregunta} </div>
            <div class="respuetas"> ${respuetas.join('')} </div>`
          );
        }
      );
  
      testContainer.innerHTML = output.join('');
    }
  
    function resultados(){
  
      const respuestaContainers = testContainer.querySelectorAll('.respuetas');
  
      let numCorrect = 0;
  
      preguntas.forEach( (current, num) => {
  
        const respuestaContainer = respuestaContainers[num];
        const selector = `input[name=pregunta${num}]:checked`;
        const userAnswer = (respuestaContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === current.correcta){

          numCorrect++;
  
          respuestaContainers[num].style.color = 'lightgreen';
        }
        else{

          respuestaContainers[num].style.color = 'red';
        }
      });
  
      resultadosContainer.innerHTML = `${numCorrect} de ${preguntas.length} preguntas`
    }
  
    const testContainer = document.getElementById('test');
    const resultadosContainer = document.getElementById('resultados');
    const validarButton = document.getElementById('validar');
    const preguntas = [
      {
        pregunta: "¿Cual es la ecuación de la recta?",
        respuetas: {
          a: "c<sup>2</sup> = a<sup>2</sup> +b<sup>2</sup>",
          b: "y = mx+b",
          c: "(a+b)<sup>2</sup>=a<sup>2</sup>+b<sup>2</sup>"
        },
        correcta: "b"
      },
      {
        pregunta: "La derivada de la ecuación 3x<sup>3</sup>+7x<sup>2</sup>-6x+4 corresponde a:",
        respuetas: {
          a: "9x<sup>2</sup>+14x+18",
          b: "7",
          c: "9x<sup>2</sup>+14x-6"
        },
        correcta: "c"
      },
      {
        pregunta: "¿A cuanto equivale π?",
        respuetas: {
          a: "3.741592",
          b: "3",
          c: "3.141592"
        },
        correcta: "c"
      },
      {
        pregunta: "¿Que formula utilizamos para calcular el area de una circunferencia?",
        respuetas: {
          a: "2πR",
          b: "πR<sup>2</sup>",
          c: "a<sup>2</sup>+b<sup>2</sup>"
        },
        correcta: "b"
      }
    ];
  
    test();
  
    validarButton.addEventListener('click', resultados);
  })();