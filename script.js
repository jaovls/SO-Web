function abrirNavegador() {
    window.open(
      "https://www.google.com",      // URL
      "popupWindow",                 // Nome da janela
      "width=1000,height=700,resizable=yes,scrollbars=yes,status=yes" // Opções
    );
  }

function abrirEditortxt(){
    window.open(
        "editorTexto.html",
        "popupWindow",                 // Nome da janela
        "width=1000,height=700,resizable=yes,scrollbars=yes,status=yes"
    )
}

function abrirJoguinho(){
    window.open(
        "joguinho.html",
        "popupWindow",                 // Nome da janela
        "width=1000,height=700,resizable=yes,scrollbars=yes,status=yes"
    )
}

function abrirPaint(){
    window.open(
        "paint.html",
        "popupWindow",                 // Nome da janela
        "width=1000,height=700,resizable=yes,scrollbars=yes,status=yes"
    )
}

function abrirArquivos(){
    window.open(
        "arquivos.html",
        "popupWindow",
        "width=1000,height=700,resizable=yes,scrollbars=yes,staus=yes"
    )
}

function mostrarDataHora() {
  const agora = new Date();
  document.getElementById('horas-datas').textContent = agora.toLocaleString();
}

setInterval(mostrarDataHora, 1000);
mostrarDataHora(); // mostra na hora que carrega a página
