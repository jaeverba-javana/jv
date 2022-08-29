<%@page import="controller.Idioma" %>

<%@ 
	page 
	language="java" 
	contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@page import="models.Pages" %>

<%@include file="/constants.jsp" %>

<%! 
	String cab = "", idioma;
	Pages page = new Pages("JV - Inicio");
	String idioma_page_title;
%>

<%
	idioma = Idioma.doAll(request.getCookies(), request, response); 
	switch (idioma) {
	case "es":
		idioma_page_title = "JV - Inicio";
		break;
		
	case "en":
		idioma_page_title = "JV - Home";
		break;
	}
%>



<!DOCTYPE html>

<html lang="<%=idioma %>" translate="no">
	<head>
		<title><%= idioma_page_title %></title>
		
		<!-- TODO: Metadata -->
		<%@ include file="WEB-INF/templates/meta.jsp" %>
		
		<!-- TODO: Favicon -->
		<%@ include file="WEB-INF/templates/favicon.jsp" %>
		
		<!-- TODO: Styles -->
		<link rel="stylesheet" href="https://use.typekit.net/yym2vzw.css">
		<link rel="stylesheet" href="<%=cab %>styles.jsp?tipo=general&style=normal">
	</head>
	
	<body id="body">
		<div id="contenedor_principal">
			<div id="contenedor"></div>
		</div>
		
		
		<% //TODO: Scripts %>
		<!-- TODO: Scripts -->
		<!-- script type="text/javascript" src="<%=raiz %>/node_modules/jquery/dist/jquery.js"></script-->
		
		<script type="importmap">
		{
			"imports": {
				"jquery": "<%=raiz %>/mods/jquery/dist/jquery.js",
				"vue": "<%=raiz %>/mods/vue/dist/vue.esm-browser.js"
			}
		}
		</script>
		
		
		<script type="module" src="scripts.jsp?app=main"></script>
        <script nomodule src="no_module.js"></script>
	</body>
</html>