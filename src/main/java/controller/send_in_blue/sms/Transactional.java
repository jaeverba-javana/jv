package controller.send_in_blue.sms;

import sendinblue.ApiClient;
import sendinblue.ApiException;
import sendinblue.Configuration;
import sendinblue.auth.*;
import sibApi.TransactionalSmsApi;
import sibModel.SendSms;
import sibModel.SendTransacSms;
import sibModel.SendTransacSms.TypeEnum;

public class Transactional {
	public static String send() {
		ApiClient defaultClient = Configuration.getDefaultApiClient();

		// Configure API key authorization: api-key
		ApiKeyAuth apiKey = (ApiKeyAuth) defaultClient.getAuthentication("api-key");
		
		
		
		apiKey.setApiKey("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");
		// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
		//apiKey.setApiKeyPrefix("Token");

		// Configure API key authorization: partner-key
		ApiKeyAuth partnerKey = (ApiKeyAuth) defaultClient.getAuthentication("partner-key");
		partnerKey.setApiKey("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");
		// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
		// partnerKey.setApiKeyPrefix("57");
		
		System.out.println("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");

		TransactionalSmsApi apiInstance = new TransactionalSmsApi();
		SendTransacSms sendTransacSms = new SendTransacSms().content("Te amo").recipient("19712757076").sender("javier").type(TypeEnum.TRANSACTIONAL); // SendTransacSms | Values to send a transactional SMS
		try {
		    SendSms result = apiInstance.sendTransacSms(sendTransacSms);
		    System.out.println("Se ha producido el error");
		    System.out.println(result);
		    System.out.println("Se ha producido el error");
		} catch (ApiException e) {
		    System.err.println("Exception when calling TransactionalSmsApi#sendTransacSms");
		    e.printStackTrace();
		    
		    return "mal";
		}
		
		return "exitoso";
		
	}

}
