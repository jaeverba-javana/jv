import {createApp} from 'vue'
import 'jquery'
import {engine} from 'engine'

//import {engine} from 'engine'
//import router from '/javier_vergara/router/'

import header_normal from '<%=raiz %>/src/js/vue/templates/header_normal/'
import footer_normal from '<%=raiz %>/src/js/vue/templates/footer_normal/'

var mainApp = createApp({
	data() {return{
		mensaje: "este es mi mensaje",
		engine
	}},

    template: '<%@include file="template.html"%>'
})

header_normal(mainApp)
footer_normal(mainApp)

mainApp.mount('#contenedor')


let ls = 0, abajo = false

window.addEventListener('scroll', function(e) {
	let as = window.scrollY
	
	if (abajo) {
		if (as < window.innerHeight-120) {
			$('#template_header_nav_contenedor').removeClass('paso')

			abajo = false
		}
	} else {
		if (as >= window.innerHeight-120) {
			$('#template_header_nav_contenedor').addClass('paso')

			abajo = true
		}
	}
	
	ls = as
})