package models;

public class Pages {
	public static final String name = "pages";
	public static String column_view_name;
	
	public Pages (String column_view_name) {
		Pages.column_view_name = column_view_name;
	}
	
	public static String get_column_view_name () {
		return Pages.column_view_name;
	}
}
