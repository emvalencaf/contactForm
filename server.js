const app = require('./src/app')

const PORT = process.env.PORT || 3000

const main = () =>{
    console.log("servidor rodando...")
    app.listen(PORT)
}

main()