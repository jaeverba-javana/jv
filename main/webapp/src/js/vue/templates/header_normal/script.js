    import header_perfil_normal from '<%=raiz %>/src/js/vue/templates/header_perfil_normal/'
    import header_main_normal from '<%=raiz %>/src/js/vue/templates/header_main_normal'
    import header_nav_normal from '<%=raiz %>/src/js/vue/templates/header_nav_normal'

    export default function (app) {
        app.component('template_header_normal', {
            data() {
                return {
                    mensaje: "Este mensajes"
                }
            },

            template: [
				<%@include file="template.jsp"%>
            ].join('')
        })

        header_perfil_normal(app);
        header_main_normal(app)
        header_nav_normal(app)
    }
