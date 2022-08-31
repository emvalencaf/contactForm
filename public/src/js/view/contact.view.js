export class ContatoView{

    constructor(container){
        this.container = container
    }

    renderSucess(){
        this.container.innerHTML = "Sua mensagem foi enviada com sucesso, em breve entrarei com o retorno."
    }

    renderFailure(){
        this.container.innerHTML = "Houve um erro e, portanto, sua mensagem não foi possível ser enviada."
    }

    renderError(msg, attribute){
        
        const element = this.container.querySelector(`[data-contato-type="${attribute}"]`)
        const spanError = this.container.querySelector(`#error-${attribute}`)
        
        console.log(element)
        console.log(spanError)

        spanError.textContent = msg

        spanError.classList.add("active")

        element.classList.add("error")
        element.classList.add("active")

        element.blur()
    }

    outError(domObject){

        const spanError = this.container.querySelector(`#error-${domObject.getAttribute("data-contato-type")}`)

        spanError.textContent = ""
        spanError.classList.remove("active")

        domObject.classList.remove("error")
        domObject.classList.remove("active")
    }

}