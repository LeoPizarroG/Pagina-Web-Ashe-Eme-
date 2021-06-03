//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {

    //Obtener la api
    fetch('https://randomuser.me/api/?nat=es')
        .then(res => res.json())
        .then(data => {

            let author = data.results;
            let output = "<h3><center>Cliente 1</center></h3>";

             //Recorrer datos y seleccionarlos
            author.forEach(function (lists) {
                output += `
                
                <div class="container mt-15 mb-15">
                    <div class="card mb-2" style="max-width: width= "350px";"> 
                           <br>   
                           <ul class="list"><center><img src="${lists.picture.large}"></center></ul>
                            <div class="card-text1 color font-weight-bold">
                                    <li class="list-group-item">Nombre: ${lists.name.first} ${lists.name.last}</li>
                                    <li class="list-group-item">Edad: ${lists.dob.age}</li>
                                    <li class="list-group-item">Email: ${lists.email}</li>
                                    <li class="list-group-item">Genero: ${lists.gender}</li>
                                    <li class="list-group-item">Pais: ${lists.location.country}</li>
                            </div> 
                    </div>
                </div> 
                
                `;

                
            });

            //Mostrar en Pantalla con la variable Outputx
            document.getElementById('output').innerHTML = output;
            

        });
         //Obtener la api
        fetch('https://randomuser.me/api/?nat=es')
        .then(res => res.json())
        .then(data => {

            let author = data.results;
            let output = "<h3><center>Cliente 2</center></h3>";

             //Recorrer datos y seleccionarlos
            author.forEach(function (lists) {
                output += `
                
                <div class="container justify-content-center mt-15 mb-15">
                    <div class="card mb-1" style="max-width: width= "350px";"> 
                           <br> 
                           <ul class="list"><center><img src="${lists.picture.large}"></center></ul>
                            <div class="card-text1 color font-weight-bold">
                                    <li class="list-group-item">Nombre: ${lists.name.first} ${lists.name.last}</li>
                                    <li class="list-group-item">Edad: ${lists.dob.age}</li>
                                    <li class="list-group-item">Email: ${lists.email}</li>
                                    <li class="list-group-item">Genero: ${lists.gender}</li>
                                    <li class="list-group-item">Pais: ${lists.location.country}</li>
                            </div> 
                    </div>
                </div> 
                
                `;

                
            });

            //Mostrar en Pantalla con la variable Outputx
            document.getElementById('output2').innerHTML = output;
            

        });
         //Obtener la api
        fetch('https://randomuser.me/api/?nat=es')
        .then(res => res.json())
        .then(data => {

            let author = data.results;
            let output = "<h3><center>Cliente 3</center></h3>";

            //Recorrer datos y seleccionarlos
            author.forEach(function (lists) {
                output += `
                
                <div class="container justify-content-center mt-15 mb-15">
                    <div class="card mb-2" style="max-width: width= "350px";">
                           <br>  
                           <ul class="list"><center><img src="${lists.picture.large}  "></center></ul>
                            <div class="card-text1 color font-weight-bold">
                                    <li class="list-group-item">Nombre: ${lists.name.first} ${lists.name.last}</li>
                                    <li class="list-group-item">Edad: ${lists.dob.age}</li>
                                    <li class="list-group-item">Email: ${lists.email}</li>
                                    <li class="list-group-item">Genero: ${lists.gender}</li>
                                    <li class="list-group-item">Pais: ${lists.location.country}</li>
                            </div> 
                    </div>
                </div> 
                
                `;

                
            });

            //Mostrar en Pantalla con la variable Outputx
            document.getElementById('output3').innerHTML = output;
            

        });

        
};