<%
	switch (request.getParameter("style")) {
	case "normal":
%>
		<!-- Incluyo Header Normal -->
		<%@include file="/src/js/vue/templates/header_normal/style.jsp" %>
<%
		break;
	}
%>