    export default function(app) {
        app.component('template_header_main', {
            data() {
                return {
                    mensaje: "Este mensajes"
                }
            },

            template: [
				<%@include file="template.html"%>
            ].join('') 
        })
    }