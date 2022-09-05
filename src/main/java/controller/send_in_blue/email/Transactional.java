package controller.send_in_blue.email;

import sendinblue.ApiClient;
import sendinblue.ApiException;
import sendinblue.Configuration;
import sendinblue.auth.ApiKeyAuth;
import sibApi.TransactionalEmailsApi;
import sibModel.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

public class Transactional {
	public static boolean sendContactame(String email, String nombre, String mensaje) {
		
		ApiClient defaultClient = Configuration.getDefaultApiClient();
		
		ApiKeyAuth apiKey = (ApiKeyAuth) defaultClient.getAuthentication("api-key");
        apiKey.setApiKey("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");
		
        //AllRouteExamples obj = new AllRouteExamples();
		//TransactionalEmailsApi apiInstance = new TransactionalEmailsApi();
		TransactionalEmailsApi api = new TransactionalEmailsApi();
		//SendSmtpEmail sendSmtpEmail = new SendSmtpEmail();
		SendSmtpEmail sendSmtpEmail = new SendSmtpEmail();
		
		
		
		SendSmtpEmailSender sender = new SendSmtpEmailSender();
    	sender.setEmail("jaeverba@gmail.com");
    	sender.setName("Javier Vergara");
    	
    	
    	List<SendSmtpEmailTo> toList = new ArrayList<SendSmtpEmailTo>();
    	
    	SendSmtpEmailTo to = new SendSmtpEmailTo();
    	to.setEmail("jaeverba@gmail.com");
    	to.setName("Javier Vergara");
    	toList.add(to);
        
    	
        SendSmtpEmailReplyTo replyTo = new SendSmtpEmailReplyTo();
        replyTo.setEmail(email);
        replyTo.setName(nombre);
		
    	sendSmtpEmail.setSender(sender);
    	sendSmtpEmail.setTo(toList);
    	
    	sendSmtpEmail.setHtmlContent("<html><body><h1>Nombre: " + nombre + " </h1><h3>Mensaje:</h3><p>"+mensaje+"</p></body></html>");
    	sendSmtpEmail.setSubject("Contact me: " + nombre);
    	
    	sendSmtpEmail.setReplyTo(replyTo);
		
		
		try {
			CreateSmtpEmail response = api.sendTransacEmail(sendSmtpEmail);
			
			
		    //CreateSmtpEmail result = apiInstance.sendTransacEmail(sendSmtpEmail);
		    System.out.println(response);
		    
		    return true;
		} catch (ApiException e) {
		    System.err.println("Exception when calling TransactionalEmailsApi#sendTransacEmail");
		    e.printStackTrace();
		    
		    return false;
		} 
	}
}
