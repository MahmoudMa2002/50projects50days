const sounds = ['Sound1', 'Sound2', 'Sound3', 'Sound4', 'Sound5', 'Sound6'];

for (let i = 0; i < sounds.length; i++) {
    const sound = sounds[i];
    const btn = document.createElement('button');
    btn.classList.add('btn');

    const img = document.createElement('img');
    img.src = `Imgs/img${i + 1}.png`;
    img.alt = sound;

    btn.appendChild(img);

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
}

function stopSongs() {
    for (let sound of sounds) {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    }
}
