package translations;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.api.services.translate.Translate;
import com.google.api.services.translate.model.TranslationsListResponse;
import com.google.api.services.translate.model.TranslationsResource;

public class Translation {
	public String singleTranslate(String text, String sourceLanguage, String targetLanguage) {
        try {           
            // See comments on 
            //   https://developers.google.com/resources/api-libraries/documentation/translate/v2/java/latest/
            // on options to set
            Translate t = new Translate.Builder(
                    com.google.api.client.googleapis.javanet.GoogleNetHttpTransport.newTrustedTransport()
                    , com.google.api.client.json.gson.GsonFactory.getDefaultInstance(), null)                                   
                    //Need to update this to your App-Name
                    .setApplicationName("SU-translation-app")                    
                    .build();
            List<String> toTranslate = new ArrayList<String>();
            toTranslate.add(text);
            Translate.Translations.List list = t.new Translations().list(
                    toTranslate,
                        //Target language   
                    targetLanguage);  
            list.setSource(sourceLanguage);
            //Set your API-Key from https://console.developers.google.com/
            list.setKey("AIzaSyBtZRs69JJZhIoxQG3mzv_YZuk7g-aHEZs");
            TranslationsListResponse response = list.execute();
            for(TranslationsResource tr : response.getTranslations()) {
                return tr.getTranslatedText();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
	}
	
	public String detectTranslate(String text, String targetLanguage) {
        try {           
            // See comments on 
            //   https://developers.google.com/resources/api-libraries/documentation/translate/v2/java/latest/
            // on options to set
            Translate t = new Translate.Builder(
                    com.google.api.client.googleapis.javanet.GoogleNetHttpTransport.newTrustedTransport()
                    , com.google.api.client.json.gson.GsonFactory.getDefaultInstance(), null)                                   
                    //Need to update this to your App-Name
                    .setApplicationName("SU-translation-app")                    
                    .build();
            List<String> toTranslate = new ArrayList<String>();
            toTranslate.add(text);
            Translate.Translations.List list = t.new Translations().list(
                    toTranslate,
                        //Target language   
                    targetLanguage);  
            //Set your API-Key from https://console.developers.google.com/
            list.setKey("AIzaSyBtZRs69JJZhIoxQG3mzv_YZuk7g-aHEZs");
            TranslationsListResponse response = list.execute();
            for(TranslationsResource tr : response.getTranslations()) {
                return tr.getTranslatedText();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
	}
	
	
	public String detect(String text) {
        try {           
            // See comments on 
            //   https://developers.google.com/resources/api-libraries/documentation/translate/v2/java/latest/
            // on options to set
            Translate t = new Translate.Builder(
                    com.google.api.client.googleapis.javanet.GoogleNetHttpTransport.newTrustedTransport()
                    , com.google.api.client.json.gson.GsonFactory.getDefaultInstance(), null)                                   
                    //Need to update this to your App-Name
                    .setApplicationName("SU-translation-app")                    
                    .build();
            List<String> toTranslate = new ArrayList<String>();
            toTranslate.add(text);
            Translate.Translations.List list = t.new Translations().list(
                    toTranslate,
                        //Target language   
                    "en"); 
            //Set your API-Key from https://console.developers.google.com/
            list.setKey("AIzaSyBtZRs69JJZhIoxQG3mzv_YZuk7g-aHEZs");
            TranslationsListResponse response = list.execute();
            for(TranslationsResource tr : response.getTranslations()) {
                return tr.getDetectedSourceLanguage();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
	}
	
}
