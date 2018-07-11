// creo una variable que guarde el elemento con id pintar
const pintar = document.getElementById("pintar");
// guardo en una variable el json desde una url
const json = 'https://api.myjson.com/bins/hhjfy';
// declaro una variable para guardar los selectores con id seleccion y seleccion1
const selectSed = document.getElementById('seleccion');
const selectGeneration = document.getElementById('seleccion1');

// definir las variables correspondientes a las opciones del selector con id seleccion1
let opt_1 = new Array('-', 'tercera', 'cuarta', 'quinta');
let opt_2 = new Array('-', 'tercera', 'cuarta', 'quinta');
let opt_3 = new Array('-', 'tercera', 'cuarta', 'quinta');
// crear una funcion que permita ejecutar el cambio dinamico
const cambia = ()=> {
// se toma el valor de "Sedes"
  let sedes;
  // se toma el valor de la Sede seleccionada
  sedes = document.formulario1.sedes[document.formulario1.sedes.selectedIndex].value;
  // se chequea si Sedes esta definida
  if (sedes != 0) {
  // seleccionamos las Sedes correctas
    mis_opts = eval('opt_' + sedes);
    // se calcula el numero de Sedes
    num_opts = mis_opts.length;
    // marco el numero de opt en el select
  document.formulario1.opt.length=num_opts;
    // para cada opt del array, la pongo en el select
    for (i = 0; i < num_opts; i++) {
      document.formulario1.opt.options[i].value = mis_opts[i];
      document.formulario1.opt.options[i].text = mis_opts[i];
    }
  } else {
  // si no habia ninguan opt seleccionada, elimino las cosas del select
    document.formulario1.opt.length = 1;
    // ponemos un guion en la unica opt que he dejado
    document.formulario1.opt.options[0].value = '-';
    document.formulario1.opt.options[0].text = '-';
  }
};
// //////////////////////////////////////declaro la funcion draw que corresponde al evento del elemento seccion
const drawSedes = (e) => {
  // guardo en una variable el indice especifico del elemento
  let index = e.target.selectedIndex;
  // guardo en una variable el valor del indice en minusculas
  let sed = e.target[index].innerText.toLowerCase();
  // convierto la cadena sed en un array
  let sedArray = sed.split('');

  // declaro el evento selectGeneracion
  selectGeneration.addEventListener('change', (event) => {
    // guardo en una variable el indice especifico del elemento con id seleccion1
    let indexGen = event.target.selectedIndex;
    // guardo en una variable el valor del indice con id seleccion1
    let gen = event.target[indexGen].innerText;
    // convierto la cadena gen en un array
    var genArray = gen.split('');

    fetch(json)
      .then(response => response.json())
      .then((res) => {
        // valido que en este punto se estè accediendo a la data correctamente y que las variables declaradas tienen el valor esperado de json
        // console.log(res);
        // console.log(sed);
        // console.log(gen);
        // const generations = computeGenerationsStats(res);
        const students = res[sed].generacion[gen].estudiantes;
        console.log(students);

         let imprime = '';

  for (i = 0; i < students.length; i++) {
    let alumna = students[i];
    // se crea una tabla que contiene 2 columnas, en la primera se imprime el correo de la alumna, en la segunda se imprime el turno
    imprime += `<tr>
                  <th scope="col" >${alumna.nombre}</th>
                  <th scope="col"> ${alumna.correo}</th>
                  <th scope="col"> ${alumna.progreso.porcentajeCompletado}</th>
                  <th scope="col"></th>
                  </tr>`;

  pintar.innerHTML = imprime;
    // console.log(result);
    // se crea una variable en la que se guarde cada una de las estudiantes, su progreso y temas
    // const porcentajeC= arrayEstudiantes[i].progreso.porcentajeCompletado;
  }
      })
      //.catch((error) => {
      //  console.log('error Judith');
      //});
  });
};

// declaramos funcion para imprimir el nombre de las estudiantes en la tabla
const drawAlumna = (students) => {
 
};

// declaramos funcion para obtener progreso de temas
const drawProgress = (students) => {
  const progress = students[i].progreso.temas;
  // se itera en la propiedad progreso
  for (key in progress) {
    temas = key;
    console.log(progress);
    console.log(temas);
  }
};
selectSed.addEventListener('change', drawSedes);
