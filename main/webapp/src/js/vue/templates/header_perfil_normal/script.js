    //import template_menu from '/templates/script.js?nombre=header_perfil_menu_animated'

//<?php if (isset($__SESSION['id'])) { ?>
//        import template_perfil from '/templates/script.js?nombre=header_perfil_perfil_session'
//<?php } else { ?>
//        import template_perfil from '/templates/script.js?nombre=header_perfil_perfil_nosession'
//<?php } ?>

import template_language_selector from '<%=raiz %>/src/js/vue/templates/language_selector/'
import { engine } from 'engine'

export default function (app) {
    app.component('template_header_perfil_normal', {
        data() {
            return {
            }
        },

        template: '<%@include file="template.html"%>'
    })

    template_language_selector(app)
    //template_perfil(app)
}