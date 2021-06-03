const form = document.getElementById('form');
const pnombre = document.getElementById('pnombre');
const papellido = document.getElementById('papellido');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const ciudad = document.getElementById('ciudad');
const comuna = document.getElementById('comuna');
const direccion = document.getElementById('direccion');
const ndomicilio = document.getElementById('ndomicilio');
const ncontacto = document.getElementById('ncontacto');
const comentario = document.getElementById('comentario');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function checkInputs() {
	// Remover los espacios en blanco.
	const pnombreValue = pnombre.value.trim();
	const papellidoValue = papellido.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const ciudadValue = ciudad.value.trim();
	const comunaValue = comuna.value.trim();
	const direccionValue = direccion.value.trim();
	const ndomicilioValue = ndomicilio.value.trim();
	const ncontactoValue = ncontacto.value.trim();
	const comentarioValue = comentario.value.trim();
	
	
	if(pnombreValue === '') {
		setErrorFor(pnombre, 'El nombre no puede estar en blanco');
	} else {
		setSuccessFor(pnombre);
	}

	if(papellidoValue === '') {
		setErrorFor(papellido, 'El apellido no puede estar en blanco');
	} else {
		setSuccessFor(papellido);
	}

	if(emailValue === '') {
		setErrorFor(email, 'El correo no puede estar en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Correo no valido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'La contraseña no puede estar en blanco');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'La contraseña no puede estar en blanco');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Contraseñas no coinciden');
	} else{
		setSuccessFor(password2);
	}

	if(ciudadValue === '') {
		setErrorFor(ciudad, 'La ciudad no puede estar en blanco');
	} else {
		setSuccessFor(ciudad);
	}

	if(comunaValue === '') {
		setErrorFor(comuna, 'La comuna no puede estar en blanco');
	} else {
		setSuccessFor(comuna);
	}

	if(direccionValue === '') {
		setErrorFor(direccion, 'La direccion no puede estar en blanco');
	} else {
		setSuccessFor(direccion);
	}

	if(ndomicilioValue === '') {
		setErrorFor(ndomicilio, 'El numero de domicilio no puede estar en blanco');
	} else {
		setSuccessFor(ndomicilio);
	}

	if(ncontactoValue === '') {
		setErrorFor(ncontacto, 'El numero no puede estar en blanco');
	}else if(ncontactoValue.length> 9 || ncontactoValue.length < 9) {
		setErrorFor(ncontacto, 'Numero no cuenta con 9 digitos');
	}else {
		setSuccessFor(ncontacto);
	}

}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form2-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form2-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function count_down(obj) {
	var element = document.getElementById('count2');
	 
	element.innerHTML = 50 - obj.value.length;
	 
	if (50 - obj.value.length < 0) {
		setErrorFor(comentario, 'Sobrepasas limete de comentario');
	} 	
	else {
		setSuccessFor(comentario);		
	}    
}