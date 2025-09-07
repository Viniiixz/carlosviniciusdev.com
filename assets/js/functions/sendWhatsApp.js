/*------------------------------------------------------------------
    File Name: formWhatsApp.js
    Autor: Carlos Vinícius - 2020.
    GitHub: https://github.com/Viniiixz
-------------------------------------------------------------------*/
function Send() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var message = document.getElementById("msg");

    var numUser = "5513981706688";

    if(name.value != ""){
        if(email.value != ""){
            if( phone.value != ""){
                if( message.value != ""){

                    window.open('https://wa.me/'+numUser+'?text=*Olá,%20meu%20nome%20é:*%20'+name.value+'.\n%20*Email:*%20'+email.value+'.%20*Telefone:*%20'+phone.value+'.%20*Mensagem:*%20'+message.value);

                }
            }
        }
    }else{
            alert("Erro! Preencha os campos corretamente!");
        }
   
   }