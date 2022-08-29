<%@ page language="java" contentType="text/javascript; charset=UTF-8"
    pageEncoding="UTF-8"%>

    export default function (app) {
        app.component('template_header_normal', {
            data() {
                return {
                    mensaje: "Este mensajes"
                }
            },

            template: [
'<header id="header">','<div id="template_header_perfil_contenedor" class="template contenedor">','<template_header_perfil_normal></template_header_perfil_normal>','</div>','<div id="template_header_main_contenedor">','<template_header_main></template_header_main>','</div>','<div id="template_header_nav_contenedor">','<template_header_nav_normal></template_header_nav_normal>','</div>','</header>'
            	<%@include file="template.jsp"%>
            ].join('')
        })

        header_perfil_normal(app);
        header_main_normal(app)
        header_nav_normal(app)
    }
    