package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class AdminManageUsersTest {

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
	
	public void userSendMessageTest() {	    
	    driver.findElement(By.cssSelector(".btn-outline-info")).click();
		System.out.println("Manage Users displayed Successfully");
	}
	public static void main(String[] args) {
		
		AdminManageUsersTest obj = new AdminManageUsersTest();
		obj.loadHomePage();
		obj.userSendMessageTest();
	}
		
}