    //import header_perfil_normal from '<%=raiz %>/src/js/vue/templates/header_perfil_normal/'
    //import header_main_normal from '<%=raiz %>/src/js/vue/templates/header_main_normal'
    //import header_nav_normal from '<%=raiz %>/src/js/vue/templates/header_nav_normal'

    import {engine} from 'engine'

    export default function (app) {
        app.component('template_contactame_inputs', {
			props: [
				"elemento"
			],
            data() {
                return {
                    text: //<%@include file="text.json"%>,
                    
                }
            },

            template: '<%@include file="template.html"%>'
        })

        
    }
