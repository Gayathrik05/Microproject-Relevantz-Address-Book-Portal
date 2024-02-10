package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class AdminViewMessage {

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
	
	public void viewMessageTest() {
		
	    driver.findElement(By.cssSelector(".btn-outline-warning")).click(); 
	
		System.out.println("Message displayed Successfully");
	}
	public static void main(String[] args) {
		
		AdminViewMessage obj = new AdminViewMessage();
		obj.loadHomePage();
		obj.viewMessageTest();
	}
		
}