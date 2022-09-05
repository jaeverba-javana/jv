    //import header_perfil_normal from '<%=raiz %>/src/js/vue/templates/header_perfil_normal/'
    //import header_main_normal from '<%=raiz %>/src/js/vue/templates/header_main_normal'
    //import header_nav_normal from '<%=raiz %>/src/js/vue/templates/header_nav_normal'

    import {engine} from 'engine'
    import 'jquery'
    
    function sub_componente(app) {
		app.component('sub_componente', {
			template: '<%@include file="template2.html"%>',
			props: [
				"item"
			],
			
			methods: {
				hover(e) {
					console.log(e)
				}
			},
			
			mounted() {
				let elemento_social_media = $('.social_media_item').hover(
					function() {
						$(this).addClass('sobre')
					}, 
					function () {
						$(this).removeClass('sobre')
					}
				)
			}
		})
	}

    export default function (app) {
		app.component('template_social_media', {
            data() {
                return {
                   	icons: {
						fa: {
							url: "/jv/src/img/icons/social_media_icons_collection/SVG/facebook_filled_darkgray.svg",
							user: "Javier Vergara"
						},
						in: {
							url: "/jv/src/img/icons/social_media_icons_collection/SVG/instagram_filled_darkgray.svg",
							user: "Javier Vergara"
						},
						tw: {
							url: "/jv/src/img/icons/social_media_icons_collection/SVG/twitter_filled_darkgray.svg",
							user: "Javier Vergara"
						}
					}
                }
            },

            template: '<%@include file="template.html"%>'
        })
        
        sub_componente(app)
    }