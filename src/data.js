window.laboratoria={};
window.getData= async () =>{
  const url =
  const primiseData= await fetch(url);
  laboratoria= await promiseData.json();
}

window.computeStudentsStats = () => {};
window.conputeGenerationsStats = {};
window.sortStudents = () => {};
window.filterStudents = () => {};


var api = 'https://api.myjson.com/bins/6s8za';
var request = new XMLHttpRequest();
request.open('GET', api);
request.responseType = 'json';
request.send();
request.onload = primera => {

  let sedes = request.response;
  mostrarSedes(sedes);

        function mostrarSedes(sedes) {
            /*let sedes = "";*/
            let contador=0;
            for (let i in sedes) {
                /*sedes += i;*/
                contador++;

                if(contador==1){
                  document.getElementById("1").innerHTML=i;
                              }
                else if(contador==2){
                    document.getElementById("2").innerHTML=i;
                                    }
                else if(contador==3){
                    document.getElementById("3").innerHTML=i;
                                    }

              }
}
}
                //const currentInventory = {
                    //'designer' : []

                 //}

              /*   let name = '';
                 let average = 0;
                 inventory.forEach( (designer) =>{
                   name = designer['name'];
                   designer.shoes.forEach( (shoes) =>{
                     average += shoes.price;

                 })
                      average = average / designer.shoes.length;
                      currentInventory.designer.push({'name': name, 'averagePrice':average })

                   })
                   console.log(currentInventory);

                }*/
      //function mostrarGeneracion(generaciones){
    //    let generaciones=request.response;
      //  mostrar generaciones=
      //  let contador1=0;


//function mostrarGeneraciones(generaciones) {

//  name = generaciones['generacion'];
//   sedes.generacion.forEach( (generacion) =>{
            /*let sedes = "";*/
            /*let contador=0;
            for (let j in generaciones) {
                /*sedes += i;*/
              /*  contar++;

                if(contar==1){
                  document.getElementById("3").innerHTML=j;

                  }
                else if(contar==2){
                    document.getElementById("4").innerHTML=j;
                }
                else if(contar==3){
                    document.getElementById("5").innerHTML=j;
                }
}
*/

/*for ( let i = 0; i<  inventory.length ; i++ ){
     designer = inventory[i]['name'];
     shoes = inventory[i]['shoes'];

     for (let j = 0; j < shoes.length; j = j + 1){
     //  console.log(shoes(j)['name']);
     shoesName = shoes[j]['name'];
     price = shoes[j]['price'];
     newInventory.push([designer,shoesName,price])

     }
 }

return newInventory;
}*/
/*    var myArticle = document.createElement('article');

let generacion ="generacion";
let generaciones = a[generacion];

    for (let j in a) {
      generacion += j + ":" + a[j];
      var listItem = document.createElement('li');
      listItem.textContent = generacion[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
*/
