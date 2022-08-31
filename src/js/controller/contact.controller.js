export class ContatoController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    submit(dataDOM){
        const fields = [...dataDOM.querySelectorAll("[data-contato-type]")]
        
        fields.forEach(field => {

            let minlength = 3

            if(field.getAttribute("data-contato-type") !== "mensagem"){

                minlength = parseInt(field.getAttribute("minlength")) < 3? 3: parseInt(field.getAttribute("minlength"))

            } else {

                minlength = parseInt(field.getAttribute("minlength")) < 50? 50: parseInt(field.getAttribute("minlength"))

            }


            this.validation(field.value, field.getAttribute("data-contato-type"), minlength)
        })

        if(fields.every(field => field.classList.contains("error"))) return console.log("deu errado")

        const from_name = dataDOM.querySelector('[data-contato-type="nome"]').value
        const from_email = dataDOM.querySelector('[data-contato-type="email"').value
        const assunto =  dataDOM.querySelector('[data-contato-type="assunto"]').value
        const textarea = dataDOM.querySelector('[data-contato-type="mensagem"]').value
        const message = `Assunto:${assunto}.      ${textarea}`
        
        const mail = {
            from_name,
            from_email,
            message
        }

        this.service.sendEmail(mail, () => this.view.renderSucess(), () => this.view.renderFailure())

    }

    validation(domObject, typeDomObject, minlength){

        try{

            this.service.validation(domObject, typeDomObject, minlength)

        } catch (e){

            this.view.renderError(e.message, typeDomObject)
        }

    }

    outError(domObject){

        this.view.outError(domObject)

    }
}