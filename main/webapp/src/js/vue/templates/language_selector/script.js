import template_language_selector_item from '<%=raiz %>/src/js/vue/templates/language_selector_item/'
import {engine, cookieManager} from 'engine'

export default function (app) {
    app.component('template_language_selector', {
        data() {
            return {
                classes: {
                    oscuro: {
                        activo: false
                    }
                },

                engine,

                activo: false,

                menu_style: {
                    height: ""
                }
            }
        },

        methods: {
            click() {
                this.activo? (
                    this.activo = false,
                    this.classes.oscuro.activo = false,
                    this.menu_style.height = 60 + 'px'
                ):(
                    this.activo = true,
                    this.classes.oscuro.activo = true,
                    this.menu_style.height = (60 + 20 + (40 * engine.idiomas.length)) + 'px'
                );
            },

            cambiar(idioma) {
                console.log(idioma);
                cookieManager.add({
                    key: 'idioma',
                    value: idioma,
                    max_age: 3600 * 24 * 7
                })

                this.click()

                engine.setIdiomaId(idioma)
                
                
                document.getElementById('html').lang = engine.idiomaId
            }
        },

        template: '<%@include file="template.html"%>'
    })

    template_language_selector_item(app)
    //template_perfil(app)
}

