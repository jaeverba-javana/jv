package models;

import config.Const;

public class Idiomas {
	public static final String nombre = "idiomas";
	
	private String idioma;
	private String id;
	private String bandera;
	
	private Idiomas(String idioma, String id, String bandera) {
		this.idioma = idioma;
		this.id = id;
		if (this.bandera.length() > 0)
			this.bandera = "bandera";
		else
			this.bandera = "";
	}
	
	private Idiomas[] listado() {
		Idiomas[] idiomas = {
				new Idiomas("spanish", "es", ""),
				new Idiomas("english", "en", "")
		};
		
		return idiomas;
	}
	
	private Idiomas[] listadoConBanderas() {
		Idiomas[] idiomas = {
				new Idiomas("spanish", "es", Const.ROOT+"/src/img/svg/banderas/SVG/Espana_cuadrado_sin_escudo.svg"),
				new Idiomas("english", "en", Const.ROOT+"/src/img/svg/banderas/SVG/Inglaterra_cuadrado.svg")
		};
		
		return idiomas;
	}
}
