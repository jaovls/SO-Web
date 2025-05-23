// controllers/SystemController.js
class SystemController {
    constructor(app) {
      // Rotas para cada aplicativo
      app.get("/navegador", (req, res) => {
        res.redirect("https://www.google.com");
      });
  
      app.get("/editor-texto", (req, res) => {
        res.render("Home/editorTexto.ejs");
      });
  
      app.get("/paint", (req, res) => {
        res.render("Home/paint.ejs");
      });
  
      app.get("/arquivos", (req, res) => {
        res.render("Home/arquivos.ejs");
      });
  
      app.get("/musicas", (req, res) => {
        res.render("Home/playerMusica.ejs");
      });
  
      app.get("/lixeira", (req, res) => {
        res.render("Home/lixeira.ejs");
      });
  
      app.get("/jogo", (req, res) => {
        res.render("Home/joguinho.ejs");
      });
    }
  }
  
  module.exports = SystemController;