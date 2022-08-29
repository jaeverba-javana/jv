<%
	switch (request.getParameter("style")) {
	case "normal":
%>
		<% //TODO: Incluyo estilo del template actual%>
		<%@include file="/src/css/vue/apps/main/style.css" %>
		<% //TODO: Incluyo Header Normal%>
		<%@include file="/src/js/vue/templates/header_normal/style.jsp" %>
<%
		break;
	}
%>