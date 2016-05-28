package translations;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestJunit1 {

	private static final long EXPECTED_TIME_PER_RESULT=400;

	
	   @Test
	   public void testPerformance5() {	
		  long start = System.currentTimeMillis();
	      Translation toTest = new Translation();
	      String[] res = new String[5];
	      for (int i=0;i<res.length;i++) {
	    	  res[i]=toTest.singleTranslate("This is a cat.", "en","de");
	      }
	      long end = System.currentTimeMillis();
	      long totalTime = end-start;
	      assertTrue(totalTime<EXPECTED_TIME_PER_RESULT*5);
	   }
	   @Test
	   public void testPerformance15() {	
		  long start = System.currentTimeMillis();
	      Translation toTest = new Translation();
	      String[] res = new String[15];
	      for (int i=0;i<res.length;i++) {
	    	  res[i]=toTest.singleTranslate("This is a cat.", "en","de");
	      }
	      long end = System.currentTimeMillis();
	      long totalTime = end-start;
	      assertTrue(totalTime<EXPECTED_TIME_PER_RESULT*15);
	   }
	   @Test
	   public void testPerformance25() {	
		  long start = System.currentTimeMillis();
	      Translation toTest = new Translation();
	      String[] res = new String[25];
	      for (int i=0;i<res.length;i++) {
	    	  res[i]=toTest.singleTranslate("This is a cat.", "en","de");
	      }
	      long end = System.currentTimeMillis();
	      long totalTime = end-start;
	      assertTrue(totalTime<EXPECTED_TIME_PER_RESULT*25);
	   }
	   @Test
	   public void testPerformance40() {	
		  long start = System.currentTimeMillis();
	      Translation toTest = new Translation();
	      String[] res = new String[40];
	      for (int i=0;i<res.length;i++) {
	    	  res[i]=toTest.singleTranslate("This is a cat.", "en","de");
	      }
	      long end = System.currentTimeMillis();
	      long totalTime = end-start;
	      assertTrue(totalTime<EXPECTED_TIME_PER_RESULT*40);
	   }
	   @Test
	   public void testPerformance200() {	
		  long start = System.currentTimeMillis();
	      Translation toTest = new Translation();
	      String[] res = new String[200];
	      for (int i=0;i<res.length;i++) {
	    	  res[i]=toTest.singleTranslate("This is a cat.", "en","de");
	      }
	      long end = System.currentTimeMillis();
	      long totalTime = end-start;
	      assertTrue(totalTime<EXPECTED_TIME_PER_RESULT*200);
	   }
	   
	   @Test
	   public void testHugeText() {
			  long start = System.currentTimeMillis();
		      Translation toTest = new Translation();
		      String[] res = new String[1];
		      for (int i=0;i<res.length;i++) {
		    	  res[i]=toTest.singleTranslate("We are introduced to the major families through the vehicle of a soiree at the Anna Pavlovna's home, a name-day celebration at the Rostovs, and a description of the isolated existence of the Bolkonskys at their country seat. Prince Andrey and Pierre discuss their futures and what they seek in life, both young men idealizing the man of destiny who is soon to invade Russia. Old Count Bezuhov dies, leaving Pierre wealthy, titled, and the most eligible bachelor in Petersburg.", "en","de");
		      }
		      long end = System.currentTimeMillis();
		      long totalTime = end-start;
		      assertTrue(totalTime<EXPECTED_TIME_PER_RESULT*200);
	   }
}
