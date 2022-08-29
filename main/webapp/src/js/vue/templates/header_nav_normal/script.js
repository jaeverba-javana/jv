import 'jquery'

export default function(app) {
    app.component('template_header_nav_normal', {
        data() {
            return {
                mensaje: "Este mensajes"
                }
        },
        
        methods: {
			mouseHover() {
				console.log('segundo intento de darle click, exitoso')
			}
		},
		
		mounted() {
			let nab_items = $(".nab_items");
			let itemp = $("#prueba")
				console.log(itemp)
			itemp.click(function() {console.log('segundo intento de darle click, exitoso')})
			
				console.log(nab_items)
			
			for (let item of nab_items) {
				console.log(item)
				item.click(function() {console.log('segundo intento de darle click, exitoso')})
			}
			
			nab_items[1].click(function() {console.log('segundo intento de darle click, exitoso')})
		},

        template: '<%@include file="template.html"%>'
    })
}