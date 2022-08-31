# contactForm
 
Nesse projeto foi desenvolvido um formulário de contato que manda um e-mail a um e-mail previamente cadastrado sem um back-end. Para isto foi consumida a [API EmailJS](https://www.emailjs.com/).

Essa aplicação foi desenvolvida no modelo MVC para separar as funcionalidades de tratar os dados vindos do DOM, realizar validação neles, fazer a requisição a API EmailJS e, por fim, renderizar eventuais erros (caso não tenha sido passado na validação) e o resultado se foi, ou não, encaminhado o e-mail.

## Como funciona

O processo de validação é feito com base em dois fatores para área de texto e os campos de nome e assunto, são eles: 1 - tamanho da string e 2 - se foi passado uma string. Por sua vez, no campo de verificação também é feito uma validação utilizando regex para verificar se a string possui formatação de e-mail.

Para cada falha na validação será renderizado um span com mensagem de error logo abaixo do campo. Neste span será acusado qual foi o erro ocorrido para aquele campo. Para cada campo é feito uma validação que se for malsucedida renderizará o respectivo erro.

Ao final será verificado no DOM se há algum campo que possui a classe error, se não houver será encaminhada a requisição a API EmailJS.

### AJAX na API EmailJS

Para fazer a AJAX na API EmailJS é preciso usar a seguinte url "https://api.emailjs.com/api/v1.0/email/send" e passar no objeto de configuração da requisição o método HTTP POST e no corpo da requisição (body) o service_id, template_id, a public_key e as informações extraída do DOM - lembrando que o body deve ser convertido para uma string (JSON.stringify()). Ademais, também é necessário configurar a propriedade content-type do header da requisição para "application/json".

No meu projeto a url da API, os dados do service_id, template_id e public_key, estão presente em um documento config.js, o qual não foi versionado por uma questão de segurança.


O efeito linear-gradient do background foi criado usando o app [Animated Gradient Background Generator](https://animated-gradient-background-generator.netlify.app/) desenvolvido por [John Polacek](https://github.com/johnpolacek/animated-gradient-background-generator).
