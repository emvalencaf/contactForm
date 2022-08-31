//import { public_key, service_id, template_id, api_url } from "../config.js"


export class ContatoService{

    validation(value, typeDomObject, minlength){

        if(!value) throw new Error(`por favor preencha um ${typeDomObject}`)

        if(value.length <= parseInt(minlength)) throw new Error(`por favor preencha um ${typeDomObject} com mais de ${minlength} caracteres`)

        if(!isNaN(value)) throw new Error(`por favor preencha um ${typeDomObject} válido`)

        if(typeDomObject === "email"){
            
            const regex = /\w+@.+/i

            if(!regex.test(inputEmail.value)) throw new Error(`por favor preencha um ${typeDomObject} válido`)

        }

    }

    sendEmail(formData, sucess, failure){
        
/*
        const body = {
            service_id: service_id,
            template_id: template_id,
            user_id: public_key,
            template_params: data
        }
        fetch(api_url, {
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(body)
        })
            .then(response => sucess())
            .catch(err => failure())*/
            
        fetch('/', {
            method: 'POST',
            headers: {"content-type":"application/json;charset=UTF-8"},
            body: JSON.stringify(formData)
        })
            .then(reponse => sucess())
            .catch(err => failure())
    }
}