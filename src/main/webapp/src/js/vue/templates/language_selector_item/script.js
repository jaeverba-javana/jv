

export default function (app) {
    app.component('template_language_selector_item', {
        data() {
            return {
                
            }
        },
        props: {
            elemento: Object,
            header: {default: false}
        },

        template: '<%@include file="template.html"%>'
    })

    //template_language_selector(app)
    //template_perfil(app)
}