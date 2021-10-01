const $btnPerritos = document.querySelector('#btnPerritos');
const $perritos = document.querySelector('#perritos');

$btnPerritos.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json().then (data => {
        console.log(data);
        const imgDog = document.createElement('img');
        imgDog.src = data.message;
        //imgDog.width='300';
        imgDog.height='300';
        $perritos.appendChild(imgDog);
    }));
});