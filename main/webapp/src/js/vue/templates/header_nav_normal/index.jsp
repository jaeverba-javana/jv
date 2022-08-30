<%@ page language="java" contentType="text/javascript; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@page import="controller.Idioma" %>
    
<%! String idioma; %>

<% idioma = Idioma.doAll(request.getCookies(), request, response); %>

<%@include file="/constants.jsp"%>
<%@include file="script.js"%>