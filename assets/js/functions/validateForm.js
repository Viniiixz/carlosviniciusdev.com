function validateForm(){

    var name = contact.nome.value;
	var email = contact.email.value;
    var phone = contact.phone.value;
    var message = contact.message.value;

    if(name == ""){
        alert('Preencha o campo NOME!');
        name.focus();
        return false;
    }
    
    if(email == "" || email.indexOf('@') == -1 ){
        alert('Preencha o campo E-MAIL!');
        email.focus();
        return false;
    }
    
    if(phone != "0123456789"){
        alert('Preencha o campo TELEFONE corretamente!');
        phone.focus();
        return false;
    }

}