package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class AdminDeleteDetails {

	static WebDriver driver;
	@BeforeClass 
	  public void initializer() {
	  System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
	  driver = new ChromeDriver(); }
	  
	  @Test 
	  public void loadHomePage() {
		  driver.get("http://localhost:4200/admincomponent");
	  }
	  
	@Test
	
	public void deletedetailsTest() {
	    
	    driver.findElement(By.name("delete")).click();
	    
	
		System.out.println("Employee deleted details Successfully");
	}
	public static void main(String[] args) {
		
		AdminDeleteDetails obj = new AdminDeleteDetails();
		obj.loadHomePage();
		obj.deletedetailsTest();
	}
		
}