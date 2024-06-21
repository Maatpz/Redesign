// duvidas frequentes acordeon

// Seleciona a classe
let d_perguntas = document.querySelectorAll('.pergunta');

// evento de clique para pergunta
d_perguntas.forEach(pergunta => {
  pergunta.addEventListener('click', () => {

    // Seleciona o elemento pai do elemento 'pergunta'
    let pai = pergunta.parentElement;
    // Seleciona o elemento com a classe 'resp' dentro do elemento pai
    let d_resposta = pai.querySelector('.resp');

    // ver se esta mostrando a resposta
    if (d_resposta.classList.contains('mostrar')) {
      //remove a classe mostrar da resposta para esconder
      d_resposta.classList.remove('mostrar');
      // Remove a classe ativa da pergunta pq esta fechada
      pergunta.classList.remove('ativa');
    } else {
      // Se nao ve as perguntas para fechar todas as respostas abertas
      d_perguntas.forEach(p => {
        let p_pai = p.parentElement;
        let p_resposta = p_pai.querySelector('.resp');
        p_resposta.classList.remove('mostrar');
        p.classList.remove('ativa');
      });
      // Adiciona a classe mostrar na resposta da pergunta clicada
      d_resposta.classList.add('mostrar');
      // Adiciona a classe ativa na pergunta clicada e mostra q esta aberta
      pergunta.classList.add('ativa');
    }
  });
});


// Formulario select
// func do mapa 
(function () {
    var setting = {"query":"Rua Voluntários da Pátria, 340 - loja f - Botafogo, Rio de Janeiro - RJ, Brasil","width":500,"height":400,"satellite":false,"zoom":17,"placeId":"EltSLiBWb2x1bnTDoXJpb3MgZGEgUMOhdHJpYSwgMzQwIC0gbG9qYSBmIC0gQm90YWZvZ28sIFJpbyBkZSBKYW5laXJvIC0gUkosIDIyMjcwLTAxNiwgQnJhemlsIiIaIAoWChQKEglxIRKf4H-ZABE9TAwaHFDHERIGbG9qYSBm","cid":"0xb33e457c0e6a65c8","coords":[-22.9546476,-43.193846],"cityUrl":"/brazil/rio-de-janeiro","cityAnchorText":"Mapa de Rio de Janeiro, Rio de Janeiro, Brasil","lang":"pt","queryString":"Rua Voluntários da Pátria, 340 - loja f - Botafogo, Rio de Janeiro - RJ, Brasil","centerCoord":[-22.9546476,-43.193846],"id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"1118777"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=1118777';
    s.async = true;
    s.onload = function (e) {
      window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
  })();


// dropdown do forms
// seleciona a classe
const dropdowns = document.querySelectorAll('.dropdown')

// Para cada item selecionado, adiciona uma funçao
  dropdowns.forEach(dropdown =>{
    // adiciando os itens para o drppdwn.
    const select = dropdown.querySelector('.selectt')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelectorAll('.menu li')
    const selected = dropdown.querySelector('.selected')
    
     // adicinando evento de click e usando a troca em cada 
    select.addEventListener('click',()=>{
        select.classList.toggle('selectt-clicked')
        caret.classList.toggle('caret-rotate') 
        menu.classList.toggle('menu-open')
    });
    // evento de click para cada option
    options.forEach(option =>{
        option.addEventListener('click', () =>{
            selected.innerText = option.innerText;
            select.classList.remove('selectt-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')
          
          // Remove a classe de todas as opções
            options.forEach(option=>{
                option.classList.remove('active')
            });
           // Adiciona a classe na opção clicada
            option.classList.add('active')

        });
    });
});

// radio button forms
// selecionando a classe 
let circulos = document.querySelectorAll('.circulo_b');

// para cada circulo selecionado adiciona um evento de clique
  circulos.forEach(circulo => {
    circulo.addEventListener("click", function() {
      // Para cada circulo selecionado retira a classe
      circulos.forEach(c => c.classList.remove('selectedd'));
    // adiciona a classe depois de clicado
      this.classList.add('selectedd');
    });
  });



// validaçao do forms 
let cad=document.getElementById("cad")
cad.addEventListener("click",cadastro)

  function cadastro(){
    
  let nome =document.getElementById("nome_form").value
    if(nome.length>0 && nome.length>3){
      console.log("nome ok")
    }
    let email=document.getElementById("email_form").value
    let aroba = email.indexOf("@")
    if(aroba !==-1){
      console.log("email ok")
    }
    let telefone=document.getElementById("tel_form").value
    if(telefone.length<10){
      console.log("tel ok")
    }
    let todos=document.getElementById("t_meios")
    let sms=document.getElementById("sms")
    let mail=document.getElementById("mail")
    let ligacao=document.getElementById("liga")
    if(!todos.checked && !sms.checked && !mail.checked && !ligacao.checked){
      alert("escolha aonde deseja receber informaçoes")
    }
  }