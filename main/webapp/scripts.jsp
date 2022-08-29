<%@page import="controller.Idioma"%>
<%@page import="java.util.regex.Matcher"%>
<%@page import="java.util.regex.Pattern"%>
<%@ 
	page language="java" 
	contentType="text/javascript; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%!
	String idioma;
%>

<% //TODO: Manejar el idioma
	idioma = Idioma.doAll(request.getCookies(), request, response);
	
	//out.println(idioma);
%>

<%
	switch (request.getParameter("app")) {
	case "main":
%>
<%@include file="/constants.jsp" %>

<%@include file="/src/js/vue/apps/main/script.js" %>	
<% } %>
