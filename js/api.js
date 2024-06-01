// // function obtenerClima() {
// //     // Hacer una solicitud a la API de clima (sustituye 'API_KEY' con tu propia clave)
// //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=0f74f5f77543aa793dec16603ef48b81&lang=es&units=metric`)
// //         .then(response => response.json())
// //         .then(data => {
// //             // Mostrar la información del clima en el div 'clima-info'
// //             document.getElementById('clima-info').innerHTML = `
// //                 <p> Clima en Buenos Aires <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">ST: ${data.main.feels_like} °C Humedad: ${data.main.humidity}%</p>
// //             `;
// //         //     setTimeout(() => {
// //         //       document.getElementById('clima-info').style.display = 'none';
// //         //   }, 3000);
// //         })
// //         .catch(error => console.log('Error al obtener el clima', error));
// // }

// // // Cargar el clima cuando la página se cargue
// // window.onload = function() {
// //     obtenerClima();
// // }

// document.addEventListener("DOMContentLoaded", () => {
//     const climaInfo = document.querySelector("#clima-info");

//     // Ejemplo de datos del clima
//     const climaData = [
//         {
//             ciudad: "Buenos Aires",
//             temperatura: "20°C",
//             humedad: "60%",
//             icono: "https://openweathermap.org/img/wn/01d.png",
//             foto: "../images/ba.jpg"
//         },
//         {
//             ciudad: "Washington DC",
//             temperatura: "25°C",
//             humedad: "50%",
//             icono: "https://openweathermap.org/img/wn/02d.png",
//             foto: "ruta/a/la/foto-de-washington-dc.jpg"
//         },
//         {
//             ciudad: "Buenos Aires",
//             temperatura: "20°C",
//             humedad: "60%",
//             icono: "https://openweathermap.org/img/wn/01d.png",
//             foto: "ruta/a/la/foto-de-buenos-aires.jpg"
//         },
//         {
//             ciudad: "Washington DC",
//             temperatura: "25°C",
//             humedad: "50%",
//             icono: "https://openweathermap.org/img/wn/02d.png",
//             foto: "ruta/a/la/foto-de-washington-dc.jpg"
//         },
//         // Más datos de ejemplo
//     ];

//     climaData.forEach(data => {
//         const card = document.createElement("div");
//         card.className = "col-md-4";
//         card.innerHTML = `
//             <div class="card">
//                 <img src="${data.foto}" class="card-img-top" alt="${data.ciudad}">
//                 <div class="card-body">
//                     <h5 class="card-title">${data.ciudad}</h5>
//                     <p class="card-text">Temperatura: ${data.temperatura}</p>
//                     <p class="card-text">Humedad: ${data.humedad}</p>
//                     <img src="${data.icono}" alt="Icono del clima">
//                 </div>
//             </div>
//         `;
//         climaInfo.appendChild(card);
//     });
// });

const cities =["Montevideo", "Santiago", "Brasilia", "Washington", "Madrid", "Paris", "Londres","Tokio","Delhi"]
const climaInfo = document.querySelector("#clima-info");
cities.forEach(city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f74f5f77543aa793dec16603ef48b81&lang=es&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card mb-3" style="min-height:50vh">
                <img src="../images/${city}.jpg" class="card-img-top h-50" alt="${city}">
                <div class="card-body">
                    <p class="card-title">${city}</p>
                    <p class="card-text">ST: ${data.main.feels_like} °C</p>
                    <p class="card-text">Humedad: ${data.main.humidity} %</p>
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Icono del clima">
                </div>
            </div>
        `;
        climaInfo.appendChild(card);
    }).catch(error => console.log('Error al obtener el clima', error));
})
    
        