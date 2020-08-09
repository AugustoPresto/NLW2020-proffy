// Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', { //configurar nunjucks para enviar infos do back com front
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({ extended: true })) // receber dados do req.body
.use(express.static("public")) // configurar arquivos esetáticos (css, scripts, imagens)
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)




// Pegar uma dependência de dentro do projeto
 // Como express é uma função, é necessário o uso dos ()
 // .use() é uma configuração do servidor
 // .get() é para ele pegar a / e o servidor devolver dados da função
 // Listen é para chamar uma porta de servidor e o faz rodar no computador