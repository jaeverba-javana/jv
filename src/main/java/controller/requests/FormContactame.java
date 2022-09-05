package controller.requests;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import controller.send_in_blue.email.Transactional;

/**
 * Servlet implementation class FormContactame
 */
public class FormContactame extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormContactame() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter salida = response.getWriter();
		
		//Transactional.sendContactame(request.getParameter("dir"), request.getParameter("nom"));
		
		salida.println("{\"estado\":"+Transactional.sendContactame(request.getParameter("dir"), request.getParameter("nom"), request.getParameter("men"))+"}");
		
	}

}
