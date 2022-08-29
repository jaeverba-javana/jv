package controller;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Idioma {
	public final String LANGUAGE_SPANISH = "es";
	public final String LANGUAGE_ENGLISH = "en";
	
	public static HttpServletResponse response;
	
	public Idioma() {
		
	}
	
	public static String getIdiomaCookie (Cookie[] cookies) {
		if (cookies != null) {
			for (Cookie cookie_temporal: cookies) {
				if ("idioma".equals(cookie_temporal.getName())) {
					return cookie_temporal.getValue();
				}
			}
		}
		return null;
	}
	
	public static void setIdiomaCookie (HttpServletResponse response, String Idioma) {
		Cookie cookie_idioma = new Cookie("idioma", Idioma);
		cookie_idioma.setMaxAge(60*60*24);
		response.addCookie(cookie_idioma);
	}
	
	public static String getNavigatorLanguage (HttpServletRequest request) {
		Matcher matc = Pattern.compile("(^[a-z]{2})").matcher(request.getHeader("Accept-Language"));
		if (matc.find()) {
			return matc.group(1);
		} else return "es";
	}
	
	public static String doAll(Cookie[] cookies, HttpServletRequest request, HttpServletResponse response) {
		String language = getIdiomaCookie(cookies);
		
		if (language != null) {
			
		} else {
			language = getNavigatorLanguage(request);
			setIdiomaCookie(response, language);
		}
		
		return language;
	}
}
