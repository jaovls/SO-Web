const express = require('express')
const path = require('path')
const HomeController = require('./mvc/controller/HomeController')
const AuthController = require('./mvc/controller/AuthController')
const SystemController = require('./mvc/controller/SystemController')
class Server {

    app
    porta = 3000

    constructor() {
        this.app = express();
        this.porta = 3000
        
        this.configurarViewEngine()
        this.on()
    }

    configurarViewEngine()
    {
        this.app.set("view engine", "ejs")
        this.app.set("views", "mvc/views")
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())
        this.app.use(express.static(path.join(__dirname, 'mvc/views/public')));
    }

    on()
    {
        this.app.listen(this.porta)

            new SystemController(this.app);
            new HomeController(this.app)
            new AuthController(this.app)

            
            this.app.listen(this.porta, () => {
                console.log(`Servidor rodando na porta ${this.porta}`);
            });
    }
}

new Server()