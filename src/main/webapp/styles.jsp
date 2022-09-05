<%@ 
	page language="java" 
	contentType="text/css; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%
	switch (request.getParameter("tipo")) {
	case "general":
%>
		<%@include file="/src/css/general.css"  %>
		<%@include file="/src/js/vue/apps/main/style.jsp"  %>
<%
		break;
	}
%>
