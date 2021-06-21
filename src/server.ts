import express from "express";


const app = express();

//Rotas
app.get("/teste", (request, response) =>{
    return response.send("Olá testers do BRASIL")
})

app.post("/test-post", (request, response) => {
    return response.send("Olá testers do BRAZIL que utilizam post")
})
//====

app.listen(3000, () => console.log("server is running"));