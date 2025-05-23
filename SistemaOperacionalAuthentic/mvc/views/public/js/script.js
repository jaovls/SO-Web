function abrirNavegador() {
    window.open("/navegador", "popupWindow", "width=1000,height=700");
}

function abrirEditortxt() {
    window.open("/editor-texto", "popupWindow", "width=1000,height=700");
}

function abrirPaint() {
    window.open("/paint", "popupWindow", "width=1000,height=700");
}

function abrirArquivos() {
    window.open("/arquivos", "popupWindow", "width=1000,height=700");
}

function abrirMusica() {
    window.open("/musicas", "popupWindow", "width=1000,height=700");
}

function abrirLixeira() {
    window.open("/lixeira", "popupWindow", "width=1000,height=700");
}

function abrirJoguinho() {
    window.open("/jogo", "popupWindow", "width=1000,height=700");
}

function mostrarDataHora() {
  const agora = new Date();
  document.getElementById('horas-datas').textContent = agora.toLocaleString();
}

setInterval(mostrarDataHora, 1000);
mostrarDataHora(); // mostra na hora que carrega 


