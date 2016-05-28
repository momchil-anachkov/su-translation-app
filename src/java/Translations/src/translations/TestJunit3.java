package translations;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestJunit3 {

	private static final long EXPECTED_TIME_PER_RESULT=2000;

	
	   @Test
	   public void testPerformance5() {	
		  long start = System.currentTimeMillis();
	      Translation toTest = new Translation();
	      String[] res = new String[5];
	      for (int i=0;i<res.length;i++) {
	    	  res[i]=toTest.detectTranslate("This is a cat.", "de");
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
	    	  res[i]=toTest.detectTranslate("This is a cat.", "de");
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
	    	  res[i]=toTest.detectTranslate("This is a cat.", "de");
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
	    	  res[i]=toTest.detectTranslate("This is a cat.", "de");
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
	    	  res[i]=toTest.detectTranslate("This is a cat.", "de");
	      }
	      long end = System.currentTimeMillis();
	      long totalTime = end-start;
	      assertTrue(totalTime<EXPECTED_TIME_PER_RESULT*200);
	   }
}