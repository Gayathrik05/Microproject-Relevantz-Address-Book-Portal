package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class AdminLogout {

	static WebDriver driver;
	@BeforeClass 
	  public void initializer() {
	  System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
	  driver = new ChromeDriver(); }
	  
	  @Test 
	  public void loadHomePage() {
	  driver.navigate().to("http://localhost:4200/admincomponent"); }
	  
	@Test
	
	public void userLogoutTest() {
		driver.get("http://localhost:4200/usercomponent/");
	driver.findElement(By.cssSelector("cdk-focused > .mdc-button__label")).click();
	    
	    System.out.println("Logout Successfully");
	}
	public static void main(String[] args) {
		
		AdminLogout obj = new AdminLogout();
		obj.loadHomePage();
		obj.userLogoutTest();
	}
		
}