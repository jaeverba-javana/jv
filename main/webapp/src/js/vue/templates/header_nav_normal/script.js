// <%@ page pageEncoding="UTF-8" %>

import 'jquery'
import {engine} from 'engine'

export default function(app) {
    app.component('template_header_nav_normal', {
        data() {
            return {
                mensaje: "Este mensajes",
				json: //<%@ include file="text.json" %>,
				engine
			};
        },
        
        methods: {
			mouseHover() {
				console.log('segundo intento de darle click, exitoso')
			},
		},

		beforeUpdate() {
			//this.cambios()
			console.log('cambio')
		},

        template: '<%@include file="template.html"%>'
    })
}