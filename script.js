function obtenerInformacion() {
  var codigo = document.getElementById("codigoInput").value;
  var informacionDiv = document.getElementById("informacion");
  var codigoLowercase = codigo.toLowerCase();
	var codigoValido = false;
  
  // SP
  if (codigoLowercase.startsWith("sp") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: Cainiao y 4PX Express</p> <p>Transportista en Chile: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
codigoValido = true;
 
  // 128
  } else if (codigo.length === 26 && codigo.startsWith("128")) {
   informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
codigoValido = true;

  // EX-RB
  } else if (codigoLowercase.endsWith("sg") && codigoLowercase.startsWith("ex") || codigoLowercase.startsWith("rb") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 1 a 4 meses<p/>";
codigoValido = true;

  // 713
  } else if (codigo.length === 12 && codigo.startsWith("713")) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Chilexpress<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
codigoValido = true;

  // 74, 75, 76
  } else if (codigo.length === 10 && (codigo.startsWith("74") || codigo.startsWith("75") || codigo.startsWith("76"))) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Bluexpress<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
codigoValido = true;

  // 99M
  } else if (codigo.length === 12 && codigoLowercase.startsWith("99m")) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: 99Minutos<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";
codigoValido = true;

  // MIAE
  } else if (codigoLowercase.startsWith("miae") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
   informacionDiv.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Reparte: Mia Express<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";
codigoValido = true;

  // MIA
  } else if (codigoLowercase.startsWith("mia") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Mia Express<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";
codigoValido = true;
  
  // SM
  } else if (codigoLowercase.startsWith("sm") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";
codigoValido = true;
  
  // 132
  } else if (codigo.length === 26 && codigo.startsWith("132")) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";
codigoValido = true;

  // LP
  } else if (codigo.length === 16 && codigoLowercase.startsWith("lp")) {
    informacionDiv.innerHTML = "<p>Para saber más información sobre este envío, pon el código en una de las dos páginas recomendadas<p/> <p>Estando ahí, busca otro código. Pon ese código en esta página para saber más información</p>";
codigoValido = true;
  
  // WSHDO
  } else if (codigoLowercase.startsWith("wshdo") && codigoLowercase.endsWith("yq") && codigo.length === 17) {
    informacionDiv.innerHTML = "<p>Método de envío: 360Lion Standard Packet<p/> <p>Reparte: Correos o Chilexpress*<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/> <p>*Para determinar que empresa repartirá, pon el código en Postal Ninja y busca el código alternativo que salga. Cópialo y pégalo en esta página</p>";
codigoValido = true;

      // 712
    } else if (codigo.length === 12 && codigo.startsWith("712")) {
	informacionDiv.innerHTML = "<p>Reparte: Chilexpress<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
	codigoValido = true;

      // 8800
    } else if (codigo.length === 12 && codigo.startsWith("8800")) {
	informacionDiv.innerHTML = "<p>Reparte: Correos<p/> <p>Seguimiento en Chile: Sí (algunas veces por sucursal virtual solamente)<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";
	codigoValido = true;
	
//WSHCL
	} else if (codigoLowercase.startsWith("wshcl") && codigoLowercase.endsWith("yq") && codigo.length === 17) {
    informacionDiv.innerHTML = "<p>Método de envío: 360Lion Standard Packet<p/> <p>Reparte: Chilexpress*, Starken o FedEx<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/> <p>*Para determinar que empresa repartirá, pon el código en Postal Ninja y busca el código alternativo que salga. Cópialo y pégalo en esta página</p> <h5>(Starken y FedEx no están soportados en la página</h5>";
	codigoValido = true;

//UN
	} else if (codigoLowercase.startsWith("un") && codigoLowercase.endsWith("mu") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: Cainiao Super Economy Global<p/> <p>Reparte: Desconocido (pueden ser varias)<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 12 meses<p/>";
	codigoValido = true;
		
//s0
	} else if (codigo.length === 15 && codigoLowercase.startsWith("s00")) {
    informacionDiv.innerHTML = "<p>Método de envío: Cainiao Super Economy Global<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 1 a 5 meses<p/>";
	codigoValido = true;

//sy e (por corregir)
	} else if (codigo.length === 13 && codigoLowercase.startsWith("syaet") || (codigoLowercase.startsWith("sy"))) {
	informacionDiv.innerHTML = "<p>Método de envío: SunYou Economic<p/> <p>Reparte: *Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 1 a 6 semanas<p/> <p>*Para saber el código de Correos Chile, pon el código en Postal Ninja y busca el código alternativo que salga.</p>";
	codigoValido = true;

//sy s (por corregir)
	} else if (codigo.length === 13 && codigoLowercase.startsWith("syae") || codigoLowercase.startsWith("sycl") || codigoLowercase.startsWith("syrm")) {
	informacionDiv.innerHTML = "<p>Método de envío: SunYou Standard<p/> <p>Reparte: *Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (algunas veces solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/> <p>*Para saber el código de Correos Chile, pon el código en Postal Ninja y busca el código alternativo que salga.</p>";
	codigoValido = true;
	
//ups
	} else if (codigo.length === 18 && codigoLowercase.startsWith("1z")) {
    informacionDiv.innerHTML = "<p>Método de envío: UPS<p/> <p>Reparte: Chilexpress<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 1 a 3 semanas<p/>";
	codigoValido = true;
		
//correos postales
	//china
		//r
		} else if (codigoLowercase.endsWith("cn") && codigoLowercase.startsWith("r") || codigoLowercase.startsWith("c") && codigo.length === 13) {
			informacionDiv.innerHTML = "<p>Método de envío: China Post Registered<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";
			codigoValido = true;
		//ems
			} else if (codigoLowercase.endsWith("cn") && codigoLowercase.startsWith("e") && codigo.length === 13) {
			informacionDiv.innerHTML = "<p>Método de envío: China Post EMS<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";
			codigoValido = true;
			
		//ep (comprobar seguimiento en chile)
			} else if (codigoLowercase.endsWith("cn") && codigoLowercase.startsWith("l") && codigo.length === 13) {
			informacionDiv.innerHTML = "<p>Método de envío: China Post ePacket<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";
			codigoValido = true;
			
		//ec
			} else if (codigoLowercase.endsWith("cn") && codigoLowercase.startsWith("u") && codigo.length === 13) {
			informacionDiv.innerHTML = "<p>Método de envío: China Post Economy<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";
			codigoValido = true;
				
		//or
			} else if (codigoLowercase.endsWith("cn") && codigoLowercase.startsWith("a") && codigo.length === 13) {
			informacionDiv.innerHTML = "<p>Método de envío: China Post Ordinary<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";
			codigoValido = true;
  
    }
  // invalido
if (!codigoValido) {
    informacionDiv.innerHTML = "Código de seguimiento inválido o desconocido.";
	}
}
