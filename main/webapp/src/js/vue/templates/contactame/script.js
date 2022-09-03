    //import social_media from '<%=raiz %>/src/js/vue/templates/contactame_inputs/'
    //import header_main_normal from '<%=raiz %>/src/js/vue/templates/header_main_normal'
    //import header_nav_normal from '<%=raiz %>/src/js/vue/templates/header_nav_normal'

    import {engine} from 'engine'

    export default function (app) {
        app.component('template_contactame', {
            data() {
                return {
                    text: //<%@include file="text.json"%>,
                    engine,
                    exe: 'men'
                }
            },
            
            computed: {
				capitalize(texto) {
					
				}
			},

            template: '<%@include file="template.html"%>'
        })

        //contactame_inputs(app)
    }
