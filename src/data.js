<<<<<<< HEAD
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
      });
    // .catch((error) => {
    //  console.log('error Judith');
    // });
  });
};
=======
//let btngeneracion = document.getElementsByClassName("seleccion1");

window.sortStudents=()=>{}

window.filterStudents=()=>{}

window.computeStudentsStats=(laboratoria) =>{

  const st = {
    name :"",
    email : "",
    campus : "",
    generation: "",
    stats :{
      status :"",
      completedPercentage :"",
      topics :{
        completedPercentage :"",
        percentageDuration : 0,
        subtopics : {
            completedPercentage:0 ,
          type:0,
            duration:0
        }
      }
    }
  }
}
>>>>>>> 95dff5e4c05036055441fdd55670d32384a9d1fb


<<<<<<< HEAD


// let btngeneracion = document.getElementsByClassName("seleccion1");

window.sortStudents = ()=>{};

window.filterStudents = ()=>{};

window.computeStudentsStats = (laboratoria) =>{
  const st = {
    name: '',
    email: '',
    campus: '',
    generation: '',
    stats: {
      status: '',
      completedPercentage: '',
      topics: {
        completedPercentage: '',
        percentageDuration: 0,
        subtopics: {
          completedPercentage: 0,
          type: 0,
          duration: 0
        }
      }
    }
  };
};

window.computeGenerationsStats = (laboratoria) => {
  const generationsArray = [];
=======
  const generationsArray =[];
>>>>>>> 95dff5e4c05036055441fdd55670d32384a9d1fb

  const obj = {
    campus: '',
    generation: '',
    average: 0,
    count: 0,
  };

<<<<<<< HEAD
  // console.log(obj);
  let average = 0;
=======
  //console.log(obj);
  let average =0;

  for(key in laboratoria) {
>>>>>>> 95dff5e4c05036055441fdd55670d32384a9d1fb

  for (key in laboratoria) {
    obj.campus = key;
<<<<<<< HEAD
    // console.log(obj.campus);
=======
    //console.log(obj.campus);
>>>>>>> 95dff5e4c05036055441fdd55670d32384a9d1fb

    average = 0;
    const generations = Object.keys(laboratoria[key].generacion);
    console.log(generations);


<<<<<<< HEAD
    generations.forEach((generation) => {
      obj.generation = generation;
      // console.log(obj.generation);
      const students = laboratoria[key].generacion[generation].estudiantes;
      // console.log(students);

      // console.log(studentsStats);
      const studentsStats = students.map((student, i, array)=>{
        average += array[i].progreso.porcentajeCompletado;
        average = average / array.lenght;
        obj.campus = key;
        obj.generation = generation;
        obj.average = average;
        obj.count = array.length;
        // console.log(student);
        generationsArray.push(student);
      });
=======

      generations.forEach((generation) => {
        obj.generation = generation;
       // console.log(obj.generation);
        const students = laboratoria[key].generacion[generation].estudiantes;
      //console.log(students);

//console.log(studentsStats);
        const studentsStats = students.map((student,i,array)=>{
          average += array[i].progreso.porcentajeCompletado;
          average = average / array.lenght;
            obj.campus= key;
        obj.generation= generation;
            obj.average = average;
            obj.count= array.length;
            //console.log(student);
            generationsArray.push(student);
        })
>>>>>>> 95dff5e4c05036055441fdd55670d32384a9d1fb


      /* for (student in students) {
          average += students[student].progreso.porcentajeCompletado;
          average = average / students.lenght;
          obj.average = average;
          obj.count = students.lenght;
          console.log(obj.average);
          console.log(obj.count);
        }*/
      //  console.log(generationsArray);
<<<<<<< HEAD
      // console.log(generationsArray.push(obj));
    });
=======
// console.log(generationsArray.push(obj));
      })
>>>>>>> 95dff5e4c05036055441fdd55670d32384a9d1fb

    // console.log(generationsArray.push(obj));
  }

<<<<<<< HEAD
  // console.log(generationsArray);
  return generationsArray;
};
// console.log(generationsArray);
=======
//console.log(generationsArray);
return generationsArray;
}
//console.log(generationsArray);
>>>>>>> 95dff5e4c05036055441fdd55670d32384a9d1fb
