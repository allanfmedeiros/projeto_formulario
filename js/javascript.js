function valida_campos(){
	var nome = document.getElementById("nome");
	var telefone = document.getElementById("telefone");
	var empresa = document.getElementById("empresa");
	var msg = document.getElementById("msg");
	
	if(nome.value==""){
		alert("Preencha o campo nome!");
		nome.focus();
		return false;	
	}
	if(telefone.value==""){
		alert("Preencha o campo telefone!");
		telefone.focus();
		return false;	
	}	
	if(empresa.value==""){
		alert("Preencha o campo empresa!");
		empresa.focus();
		return false;	
	}
	if(msg.value==""){
		alert("Preencha o campo de mensagem!");
		msg.focus();
		return false;	
	}
	
	alert("Dados enviados com suceeso!!!")
	return true;
}

function limpa_campos(){
	document.forms[0].reset();
	
}