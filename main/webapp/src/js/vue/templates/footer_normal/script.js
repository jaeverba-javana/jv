    import contactame from '<%=raiz %>/src/js/vue/templates/contactame'
    import social_media from '<%=raiz %>/src/js/vue/templates/social_media'
    //import header_nav_normal from '<%=raiz %>/src/js/vue/templates/header_nav_normal'

    import {engine} from 'engine'

    export default function (app) {
        app.component('template_footer_normal', {
            data() {
                return {
                    mensaje: "Este mensajes"
                }
            },

            template: '<%@include file="template.html"%>'
        })

        contactame(app)
        social_media(app)
    }
