import {createApp} from 'vue'
//import router from '/javier_vergara/router/'

import header_normal from '<%=raiz %>/src/js/vue/templates/header_normal/'

var mainApp = createApp({
	data() {return{
		mensaje: "este es mi mensaje"
	}},

    template: '<%@include file="template.html"%>'
})

header_normal(mainApp)

mainApp.mount('#contenedor')