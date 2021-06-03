//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    // console.log('test');

    //Get API
    fetch('https://randomuser.me/api/?nat=es')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Value
            let output = "<h3><center>Usuario 1</center></h3>";

            //Get Data Loop Through
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

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output;
            

        });

        fetch('https://randomuser.me/api/?nat=es')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Value
            let output = "<h3><center>Usuario 2</center></h3>";

            //Get Data Loop Through
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

            //Show On Our Screen All Data
            document.getElementById('output2').innerHTML = output;
            

        });

        fetch('https://randomuser.me/api/?nat=es')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Value
            let output = "<h3><center>Usuario 3</center></h3>";

            //Get Data Loop Through
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

            //Show On Our Screen All Data
            document.getElementById('output3').innerHTML = output;
            

        });

        
};