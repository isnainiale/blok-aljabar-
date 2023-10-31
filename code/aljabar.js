const button1 = document.querySelector('td#td1tabel1 button');
button1.addEventListener('click', function(){
    const tr = document.getElementById('tr1tabel2');
    const tdBaru = document.createElement('td');
    const gambar = new Image( 200,200);
    gambar.src = 'img/hijau.png';
    tdBaru.appendChild(gambar);
    tr.appendChild(tdBaru);

});

const button2 = document.querySelector('td#td2tabel1 button');
button2.addEventListener('click', function(){
    const tr = document.getElementById('tr2tabel2');
    const tdBaru = document.createElement('td');
    const gambar = new Image(70,200);
    gambar.src = 'img/merah.png';
    tdBaru.appendChild(gambar);
    tr.appendChild(tdBaru);
});

const button3 = document.querySelector('td#td3tabel1 button');
button3.addEventListener('click', function(){
    const tabel = document.getElementById('subtabel1');
    const trBaru = document.createElement('tr');
    const gambar = new Image(200,70);
    gambar.src = 'img/biru.png';
    trBaru.appendChild(gambar);
    tabel.appendChild(trBaru);
});

const button4 = document.querySelector('td#td4tabel1 button');
button4.addEventListener('click', function(){
    const tr = document.getElementById('tr4tabel2');
    const tdBaru = document.createElement('td');
    const gambar = new Image(70,70);
    gambar.src = 'img/kuning.png';
    tdBaru.appendChild(gambar);
    tr.appendChild(tdBaru);
});


// const button5 = document.querySelector('td#td5tabel1 button');
// button5.addEventListener('click', function(){
//     const tabel = document.getElementById('tabel2');
//     const trKuning = document.getElementById('trTabel2')
//     const tabelBaru = document.createElement('table');
//     const gambar = new Image (70,70);
//     gambar.src = 'img/kuning.png';
//     tabelBaru.appendChild(gambar);
//     trKuning.appendChild(tabelBaru);
//     tabel.appendChild(trKuning);
// });

const button5 = document.querySelector('td#td5tabel1 button');
button5.addEventListener('click', function(){
    const tabel = document.getElementById('subtabel2');
    const trBaru = document.createElement('tr');
    const gambar = new Image (70,70);
    gambar.src = 'img/kuning.png';
    trBaru.appendChild(gambar);
    tabel.appendChild(trBaru);
});
