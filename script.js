var playlist = [
    {
        nome: "Lose Yourself",
        artista: "Eminem",
        img: "./Assets/Imagens/EminemLYS.jpg",
        src: "./Assets/Audios/Eminem - Lose Yourself.mp3" 
    },
    {
        nome: "Mustang Preto",
        artista: "TETO",
        img: "./Assets/Imagens/Teto_pic.jpg",
        src: "./Assets/Audios/teto_mustang_preto.mp3"
    },
    {
        nome: "Animais Traidores",
        artista: "Tz da Coronel",
        img: "./Assets/Imagens/Tz_da_Coronel.jpg",
        src: "./Assets/Audios/Animais Traidores.mp3"
    },
    {
        nome: "50 Cent",
        artista: "In Da Club",
        img: "./Assets/Imagens/50_cent.jpg",
        src: "./Assets/Audios//50_cent_in_da_club_official_music.mp3"
    },
];


var musica = document.querySelector("audio");

let duracaoMusica = document.querySelector('.total-time');

let progressobarra = document.querySelector('#progresso-barra');

let image = document.querySelector("img");

let musicName = document.querySelector("#playlist_status");

let artist = document.querySelector("#playlist_artist");

let indexMusica = 0;


renderizarMusica(indexMusica);


// Eventos
document.querySelector(".button-play").addEventListener('click', playMusic);

document.querySelector(".button-pause").addEventListener('click', stopMusic);

musica.addEventListener("timeupdate", duration);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
    indexMusica--;
    renderizarMusica(indexMusica);
    //musica.play(); ver dps isso
});
document.querySelector(".proximo").addEventListener("click", () => {
    indexMusica++;
    renderizarMusica(indexMusica);
    
    //musica.play(); ver dps isso
});


// Funções
function playMusic(){
    musica.play();
    document.querySelector(".button-pause").style.display = 'block';
    document.querySelector(".button-play").style.display = 'none';
}

function stopMusic(){
    musica.pause();
    document.querySelector(".button-pause").style.display = 'none';
    document.querySelector(".button-play").style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector("#progresso-barra");
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%";
    let tempoDecorrido = document.querySelector(".duration-time");
    tempoDecorrido.textContent = segundoParaMinuto(Math.floor(musica.currentTime));
}

function segundoParaMinuto(segundos){
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinuto + ':' + campoSegundos;
}

function duration(){
    duracaoMusica.textContent = segundoParaMinuto(Math.floor(musica.duration));
}

function renderizarMusica(index){
    musica.setAttribute('src', playlist[index].src);
    musica.addEventListener('loadeddata', () => {
        musicName.textContent = playlist[index].nome;
        artist.textContent = playlist[index].artista;
        image.src = playlist[index].img;

        musica.addEventListener("timeupdate", atualizarBarra);
        musica.addEventListener("timeupdate", duration);
    });
}