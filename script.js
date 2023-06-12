function obtenerInformacion() {
  var codigo = document.getElementById("codigoInput").value;
  var informacionDiv = document.getElementById("informacion");
  var codigoLowercase = codigo.toLowerCase();
  
  // SP.CL
  if (codigoLowercase.startsWith("sp") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
 
  // 128.
  } else if (codigo.length === 26 && codigo.startsWith("128")) {
   informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";

  // EX-RB.SG
  } else if (codigoLowercase.startsWith("ex") || (codigoLowercase.startsWith("rb")) && codigoLowercase.endsWith("sg") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 1 a 4 meses<p/>";

  // 713
  } else if (codigo.length === 12 && codigo.startsWith("713")) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Chilexpress<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";

  // 74, 75, 76
  } else if (codigo.length === 10 && (codigo.startsWith("74") || codigo.startsWith("75") || codigo.startsWith("76"))) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Bluexpress<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";

  // 99M
  } else if (codigo.length === 12 && codigoLowercase.startsWith("99m")) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: 99Minutos<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";

  // MIAE
  } else if (codigoLowercase.startsWith("miae") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
   informacionDiv.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Reparte: Mia Express<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";

  // MIA
  } else if (codigoLowercase.startsWith("mia") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Reparte: Mia Express<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";
  
  // SM.CL
  } else if (codigoLowercase.startsWith("sm") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";
  
  // 132
  } else if (codigo.length === 26 && codigo.startsWith("132")) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Reparte: Correos Chile<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";

  // LP
  } else if (codigo.length === 16 && codigoLowercase.startsWith("lp")) {
    informacionDiv.innerHTML = "<p>Para saber más información sobre este envío, pon el código en una de las dos páginas recomendadas<p/> <p>Estando ahí, busca otro código. Pon ese código en esta página para saber más información</p>";
  
  // WSHDO
  } else if (codigoLowercase.startsWith("wshdo") && codigoLowercase.endsWith("yq") && codigo.length === 17) {
    informacionDiv.innerHTML = "<p>Método de envío: 360Lion Standard Packet<p/> <p>Reparte: Correos o Chilexpress*<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/> <p>*Para determinar que empresa repartirá, pon el código en Postal Ninja y busca el código alternativo que salga. Cópialo y pégalo en esta pagina</p>";

      // 712
    } else if (codigo.length === 12 && codigo.startsWith("712")) {
      informacionDiv.innerHTML = "<p>Reparte: Chilexpress<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
  
      // 8800
    } else if (codigo.length === 12 && codigo.startsWith("8800")) {
      informacionDiv.innerHTML = "<p>Reparte: Correos<p/> <p>Seguimiento en Chile: Sí (algunas veces por sucursal virtual solamente)<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";
  
    }
  // Mensaje de código de seguimiento inválido
  informacionDiv.innerHTML = informacionDiv.innerHTML || "Código de seguimiento inválido.";
}