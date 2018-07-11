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

window.computeGenerationsStats = (laboratoria) => {

  const generationsArray =[];

  const obj = {
    campus: "",
    generation: "",
    average: 0,
    count: 0,
  };

  //console.log(obj);
  let average =0;

  for(key in laboratoria) {

    obj.campus = key;
    //console.log(obj.campus);

    average = 0;
    const generations = Object.keys(laboratoria[key].generacion);
    console.log(generations);



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


      /* for (student in students) {
          average += students[student].progreso.porcentajeCompletado;
          average = average / students.lenght;
          obj.average = average;
          obj.count = students.lenght;
          console.log(obj.average);
          console.log(obj.count);
        }*/
      //  console.log(generationsArray);
// console.log(generationsArray.push(obj));
      })

//console.log(generationsArray.push(obj));
  }

//console.log(generationsArray);
return generationsArray;
}
//console.log(generationsArray);
