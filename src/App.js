import express from "express"
import CategoriaController from "./Controllers/CategoriaController.js"
import Docecontroller from "./Controllers/Docecontroller.js"


const server = express ()

server.use(express.json())

server.get("/", (req,res)=>{
    res.status(200).json("Servidor Funcionando")
})

server.post("/categorias",CategoriaController.create)
server.get("/categorias",CategoriaController.read)
server.put("/categorias/:id_categoria",CategoriaController.update)
server.delete("/categorias/:id_categoria",CategoriaController.delete)


server.post("/doces",Docecontroller.create)
server.get("/doces",Docecontroller.read)
server.put("/doces/:id_doces",Docecontroller.update)
server.delete("/doces/:id_doces",Docecontroller.delete)


server.listen(5000)