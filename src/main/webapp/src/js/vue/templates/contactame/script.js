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

            methods: {
                submitForm() {
                    let vue_context = this

                    let nombre = document.getElementById("nom").value
                    let email = document.getElementById('dir').value
                    let mensaje = document.getElementById('men').value

                    console.log(nombre)
                    console.log(email)
                    console.log(mensaje)

                    $.ajax({
                        url: "<%=raiz %>/submit/FormContactame",
                        data: {
                            nom: nombre,
                            dir: email,
                            men: mensaje
                        },
                        type: "POST",
                        dataType: 'json',
                        success(json) {
                            console.log(json)
                        },

                        error() { }
                    })
                }
            },
            
            computed: {},

            template: '<%@include file="template.html"%>'
        })

        //contactame_inputs(app)
    }
