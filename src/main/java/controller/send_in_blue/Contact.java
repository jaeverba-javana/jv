package controller.send_in_blue;

import sendinblue.ApiClient;
import sendinblue.Configuration;
import sendinblue.auth.ApiKeyAuth;
import sibApi.ContactsApi;
import sibModel.*;
import java.util.*;
import java.util.List;

public class Contact {
	
	
	
	public static void addContact() {
		ApiClient defaultClient = Configuration.getDefaultApiClient();
		
	    // Configure API key authorization: i-key
	    ApiKeyAuth apikey = (ApiKeyAuth) defaultClient.getAuthentication("api-key");
	    
	    apikey.setApiKey("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");
	    
	    ContactsApi api = new ContactsApi();
	    
	    try {
	        CreateContact createContact = new CreateContact();
	        createContact.setEmail("example@example.com");
	        Properties attributes = new Properties();
	        attributes.setProperty("FIRSTNAME", "John");
	        attributes.setProperty("LASTNAME", "Doe");
	        attributes.setProperty("SMS", "+573135813535");
	        createContact.setAttributes(attributes);
	        List<Long> listIds = new ArrayList<Long>();
	        listIds.add(2l);
	        createContact.setListIds(listIds);
	        createContact.setEmailBlacklisted(false);
	        createContact.setSmsBlacklisted(false);
	        createContact.setUpdateEnabled(false);
	        List<String> smtpBlacklistedSender = new ArrayList<String>();
	        smtpBlacklistedSender.add("example@example.com");
	        createContact.setListIds(listIds);
	        createContact.setSmtpBlacklistSender(smtpBlacklistedSender);
	        CreateUpdateContactModel response = api.createContact(createContact);
	        System.out.println(response.toString());
	    } catch (Exception e) {
	        System.out.println("Exception occurred:- " + e.getMessage());
	    }
	}
	
	
    
    
}
