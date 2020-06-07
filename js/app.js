document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarRest);
//document.getElementById('testBTN').addEventListener('click', callTest);



function cargarTXT() {
    document.getElementById("resultado").innerHTML = ""; //limpia el div
    fetch('datos.txt')
        //conexion y definimos como queremos extraer (.text)
        .then((r) => {
            return r.text();
        })
        .then((r) => {
            //console.log(r);
            for (var i = 0; i < r.length; i++) {
                document.getElementById("resultado").innerHTML += r[i];
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

function cargarJSON() {
    {
        document.getElementById("resultado").innerHTML = "";
    }
    fetch('empleados.json')
        .then((r) => {
            return r.json();
        })
        .then((r) => {
            let html = '';
            r.forEach((data) => {
                html += `${(data.nombre)} ${(data.puesto)}<br>`; //Object.values()
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch((error) => {
            console.log(error)
        })
}

function cargarRest() {
    document.getElementById("resultado").innerHTML = "";
    fetch('https://picsum.photos/v2/list')
        .then((r) => {
            return r.json();
        })
        .then((r) => {

            r.forEach((r) => {
                    console.log(r)
                    var img = new Image(250, 250);
                    var url = r.download_url;
                    img.src = url;
                    document.getElementById('resultado').appendChild(img);
                    //document.getElementById("resultado").innerHTML = "";
                    //return img;
                })
                //document.getElementById('resultado').appendChild(img);
        })

    .catch((error) => {
        console.log(error)
    })
}
/* /////Funcion asincrona
async function test() {
    //primer await espera la respuesta
    const r = await fetch('https://jsonplaceholder.typicode.com/todos');
    //segundo await espera la la respuesta hecha
    const datos = await r.json();
    return datos;
}

function callTest() {
    test()
        .then((fotos) => {
            console.log(fotos)
        })
        .catch((error) => {
            console.log(error)
        })
} */