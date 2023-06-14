function obtenerInformacion() {
	var codigo = document.getElementById("codigoInput").value;
	var informacionDiv = document.getElementById("informacion");
	var codigoLowercase = codigo.toLowerCase();
	var codigoValido = false;
  
//sp
	if (codigoLowercase.startsWith("sp") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
	informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
	codigoValido = true;
 
//128
	} else if (codigo.length === 26 && codigo.startsWith("128")) {
	informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a> <p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
	codigoValido = true;

//713
	} else if (codigo.length === 12 && codigo.startsWith("713")) {
	informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
	codigoValido = true;

//75
	} else if (codigo.length === 10 && (codigo.startsWith("74") || codigo.startsWith("75") || codigo.startsWith("76"))) {
	informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.blue.cl'>BluExpress</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
	codigoValido = true;

//99m
	} else if (codigo.length === 12 && codigoLowercase.startsWith("99m")) {
	informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.99minutos.com'>99minutos</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";
	codigoValido = true;

//miae
	} else if (codigoLowercase.startsWith("miae") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
	informacionDiv.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='http://kd.hyuusoft.com/wxorder/new_detail_miya.jsp'>Mia Express</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";
	codigoValido = true;

//mia
	} else if (codigoLowercase.startsWith("mia") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='http://kd.hyuusoft.com/wxorder/new_detail_miya.jsp'>Mia Express</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";
	codigoValido = true;
  
//sm
	} else if (codigoLowercase.startsWith("sm") && codigoLowercase.endsWith("cl") && codigo.length === 13) {
	informacionDiv.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";
	codigoValido = true;
  
//132
	} else if (codigo.length === 26 && codigo.startsWith("132")) {
	informacionDiv.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";
	codigoValido = true;

//lp
	} else if (codigo.length === 16 && codigoLowercase.startsWith("lp")) {
	informacionDiv.innerHTML = "<p>Para saber más información sobre este envío, pon el código en una de las dos páginas recomendadas<p/> <p>Estando ahí, busca otro código. Pon ese código en esta página para saber más información</p>";
	codigoValido = true;
  
//wshdo
	} else if (codigoLowercase.startsWith("wshdo") && codigoLowercase.endsWith("yq") && codigo.length === 17) {
	informacionDiv.innerHTML = "<p>Método de envío: 360Lion Standard Packet<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://customer.360lion.com/track'>360Lion</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a> o <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/> <p>Para determinar que empresa repartirá, pon el código en Postal Ninja y busca el código alternativo que salga. Cópialo y pégalo en esta página</p>";
	codigoValido = true;

	//712
		} else if (codigo.length === 12 && codigo.startsWith("712")) {
		informacionDiv.innerHTML = "<p>Transportista en Chile: <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a><p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas (para entregas internacionales)<p/>";
		codigoValido = true;

	// 8800
		} else if (codigo.length === 12 && codigo.startsWith("8800")) {
		informacionDiv.innerHTML = "<p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento en Chile: Sí (algunas veces por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas (para entregas internacionales)<p/>";
		codigoValido = true;
	
//wshcl
	} else if (codigoLowercase.startsWith("wshcl") && codigoLowercase.endsWith("yq") && codigo.length === 17) {
	informacionDiv.innerHTML = "<p>Método de envío: 360Lion Standard Packet<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://customer.360lion.com/track'>360Lion</a></p> <p>Transportista en Chile: <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a>, <a href='https://starken.cl/'>Starken</a> y <a href='https://www.fedex.com/es-cl/home.html'>FedEx</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/> <p>Para determinar que empresa repartirá, pon el código en Postal Ninja y busca el código alternativo que salga. Cópialo y pégalo en esta página</p> <h5>(Starken y FedEx no están soportados en la página)</h5>";
	codigoValido = true;

//un
	} else if (codigoLowercase.startsWith("un") && codigoLowercase.endsWith("mu") && codigo.length === 13) {
    informacionDiv.innerHTML = "<p>Método de envío: Cainiao Super Economy Global<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a>, <a href='https://track.4px.com'>4PX Express</a> y <a href='https://mailamericas.com/tracking'>Mail Americas</a></p> <p>Transportista en Chile: Desconocido<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 12 meses<p/>";
	codigoValido = true;
		
//s0
	} else if (codigo.length === 15 && codigoLowercase.startsWith("s00")) {
    informacionDiv.innerHTML = "<p>Método de envío: Cainiao Super Economy Global<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a>, <a href='https://track.4px.com'>4PX Express</a> y/o <a href='https://www.yw56.com.cn/en'>Yanwen Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 1 a 5 meses<p/>";
	codigoValido = true;

//sy e
	} else if (codigo.length === 13 && codigoLowercase.startsWith("syaet")) {
	informacionDiv.innerHTML = "<p>Método de envío: SunYou Economic Air Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.sypost.net'>SunYou</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Aveces<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 1 a 6 meses<p/> <p>Para saber el código de Correos Chile, pon el código en Postal Ninja y el código alternativo que salga será el de ellos.</p>";
	codigoValido = true;

//sy s
	} else if (codigo.length === 13 && codigoLowercase.startsWith("syae") || codigoLowercase.startsWith("sycl") || codigoLowercase.startsWith("syrm")) {
	informacionDiv.innerHTML = "<p>Método de envío: SunYou Standard<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.sypost.net'>SunYou</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Aveces<p/> <p>Seguimiento en Chile: Sí (algunas veces solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/> <p>Para saber el código de Correos Chile, pon el código en Postal Ninja y busca el código alternativo que salga.</p>";
	codigoValido = true;
		
//sy e
	} else if (codigo.length === 13 && codigoLowercase.startsWith("sy")) {
	informacionDiv.innerHTML = "<p>Método de envío: SunYou Economic Air Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.sypost.net'>SunYou</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Aveces<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 1 a 6 meses<p/> <p>Para saber el código de Correos Chile, pon el código en Postal Ninja y el código alternativo que salga será el de ellos.</p>";
	codigoValido = true;
	
//ups
	} else if (codigo.length === 18 && codigoLowercase.startsWith("1z")) {
    informacionDiv.innerHTML = "<p>Método de envío: UPS<p/> <p>Transportista en China: <a href='https://www.ups.com/cl/es'>UPS</a></p> <p>Transportista en Chile: <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 1 a 3 semanas<p/>";
	codigoValido = true;
		
//correos postales
	//china
		//r
		} else if (codigoLowercase.endsWith("cn") && codigoLowercase.startsWith("r") || codigoLowercase.startsWith("c") && codigo.length === 13) {
		informacionDiv.innerHTML = "<p>Método de envío: China Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.aftership.com/carriers/china-post'>China Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";
		codigoValido = true;
		
		//e
		} else if (codigoLowercase.endsWith("cn") && codigoLowercase.startsWith("e") && codigo.length === 13) {
		informacionDiv.innerHTML = "<p>Método de envío: China Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.aftership.com/carriers/china-post'>China Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";
		codigoValido = true;
		
		//ep
		} else if (codigoLowercase.endsWith("cn") && codigoLowercase.startsWith("l") && codigo.length === 13) {
		informacionDiv.innerHTML = "<p>Método de envío: China Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.aftership.com/carriers/china-post'>China Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";
		codigoValido = true;
			
		//ec
		} else if (codigoLowercase.endsWith("cn") && codigoLowercase.startsWith("u") && codigo.length === 13) {
		informacionDiv.innerHTML = "<p>Método de envío: China Post Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.aftership.com/carriers/china-post'>China Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";
		codigoValido = true;
				
		//or
		} else if (codigoLowercase.endsWith("cn") && codigoLowercase.startsWith("a") && codigo.length === 13) {
		informacionDiv.innerHTML = "<p>Método de envío: China Post Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.aftership.com/carriers/china-post'>China Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";
		codigoValido = true;
				
	//sing
		//r
		} else if (codigoLowercase.endsWith("sg") && codigoLowercase.startsWith("r") && codigo.length === 13) {
		informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping / Singapore Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.singpost.com/track-items'>Singapore Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";
		codigoValido = true;
				
		//e
		} else if (codigoLowercase.endsWith("sg") && codigoLowercase.startsWith("e") && codigo.length === 13) {
		informacionDiv.innerHTML = "<p>Método de envío: AliExpress Standard Shipping / Singapore Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.singpost.com/track-items'>Singapore Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";
		codigoValido = true;
				
		//ep
		} else if (codigoLowercase.endsWith("sg") && codigoLowercase.startsWith("l") && codigo.length === 13) {
		informacionDiv.innerHTML = "<p>Método de envío: Singapore Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.singpost.com/track-items'>Singapore Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";
		codigoValido = true;
				
		//ec
		} else if (codigoLowercase.endsWith("sg") && codigoLowercase.startsWith("u") && codigo.length === 13) {
		informacionDiv.innerHTML = "<p>Método de envío: Singapore Post Economic Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.singpost.com/track-items'>Singapore Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";
		codigoValido = true;
  
    }
// invalido
	if (!codigoValido) {
    informacionDiv.innerHTML = "Código de seguimiento inválido o desconocido.";
	}
}
