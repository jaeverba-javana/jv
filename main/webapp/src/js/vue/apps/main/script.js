import {createApp} from 'vue'
//import router from '/javier_vergara/router/'

import header_normal from '<%=raiz %>/src/js/vue/templates/header_normal/'

var mainApp = createApp({
	data() {return{
		mensaje: "este es mi mensaje",

		engine: {
			idiomas: [
				{
					id: "es",
					idioma: "español",
					img: "jv/src/img/svg/banderas/SVG/Espana_cuadrado_sin_escudo.svg"
				} , {
					id: "en",
					idioma: "english",
					img: "jv/src/img/svg/banderas/SVG/Inglaterra_cuadrado.svg"
				}
			]
		}
	}},

    template: '<%@include file="template.html"%>'
})

header_normal(mainApp)

mainApp.mount('#contenedor')