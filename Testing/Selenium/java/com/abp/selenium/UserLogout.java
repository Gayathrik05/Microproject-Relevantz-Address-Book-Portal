package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class UserLogout {

	static WebDriver driver;
	@BeforeClass 
	  public void initializer() {
	  System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
	  driver = new ChromeDriver(); }
	  
	  @Test 
	  public void loadHomePage() {
	  driver.navigate().to("http://localhost:4200/usercomponent"); }
	  
	@Test
	
	public void userLogoutTest() {
//		driver.get("http://localhost:4200/usercomponent/");
	driver.findElement(By.name("loginComponent")).click();
	    
	    System.out.println("Logout Successfully");
	}
	public static void main(String[] args) {
		
		UserLogout obj = new UserLogout();
		obj.loadHomePage();
		obj.userLogoutTest();
	}
		
}