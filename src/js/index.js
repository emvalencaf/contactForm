    //módulos
import { ContatoController } from "./controller/contact.controller.js"
import { ContatoService } from "./services/contact.service.js"
import { ContatoView } from "./view/contact.view.js"



    //DOM
const form = document.querySelector(".form")
const fields = form.querySelectorAll("[data-contato-type]")




    //instância dos módulos
const contatoService = new ContatoService()
const contatoView = new ContatoView(form)
const contatoController = new ContatoController(contatoView, contatoService)


    //formulário da seção contato

form.addEventListener("submit", submitForm)

function submitForm(evt){
    
    evt.preventDefault()
    
    contatoController.submit(evt.currentTarget)
    
}
        //retirando a classe error dos fields do formulário da seção contato
    
fields.forEach( field => field.addEventListener("focus", outError))
    
function outError(evt){
    
     contatoController.outError(evt.currentTarget)
    
}