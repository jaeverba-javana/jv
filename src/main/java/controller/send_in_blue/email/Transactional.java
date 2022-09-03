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
	public static void sendContactame(String email, String nombre) {
		
		
		ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure API key authorization: api-key
        ApiKeyAuth apiKey = (ApiKeyAuth) defaultClient.getAuthentication("api-key");
        apiKey.setApiKey("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");

	    // Configure API key authorization: partner-key
	    ////ApiKeyAuth partnerKey = (ApiKeyAuth) defaultClient.getAuthentication("partner-key");
	    ////partnerKey.setApiKey("YOUR PARTNER KEY");
	    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
	    //partnerKey.setApiKeyPrefix("Token");
		
        TransactionalEmailsApi apiInstance = new TransactionalEmailsApi();
	    SendSmtpEmail sendSmtpEmail = new SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email
	     
	    try {	    	
	    	SendSmtpEmailSender sender = new SendSmtpEmailSender();
	    	sender.setEmail("jaeverba@gmail.com");
	    	sender.setName("Javier Vergara");
	    	
	    	List<SendSmtpEmailTo> toList = new ArrayList<SendSmtpEmailTo>();
	    	SendSmtpEmailTo to = new SendSmtpEmailTo();
	    	to.setEmail(email);
	    	to.setName(nombre);
	    	toList.add(to);
	    	
	    	sendSmtpEmail.setSender(sender);
	    	sendSmtpEmail.setTo(toList);
	    	sendSmtpEmail.setHtmlContent("<html><body><h1>Hola " + nombre + " me perdonas?</h1></body></html>");
	    	
	    	
	    	
	        CreateSmtpEmail result = apiInstance.sendTransacEmail(sendSmtpEmail);
	        System.out.println(result);
	    } catch (ApiException e) {
	        System.err.println("Exception when calling TransactionalEmailsApi#sendTransacEmail");
	        e.printStackTrace();
	    }	
	    
	    
	}
}
