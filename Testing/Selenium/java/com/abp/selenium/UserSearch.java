package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class UserSearch {

	static WebDriver driver;
	@BeforeClass 
	  public void initializer() {
	  System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
	  driver = new ChromeDriver(); }
	  
	  @Test 
	  public void loadHomePage() {
	  driver.navigate().to("http://localhost:4200/usercomponent"); }
	  
	@Test
	
	public void userSearchTest() {
//		 driver.findElement(By.id("mat-input-0")).click();
		    driver.findElement(By.id("mat-input-0")).sendKeys("swetha");
	    System.out.println("Data Searched Successfully");
	}
	public static void main(String[] args) {
		
		UserSearch obj = new UserSearch();
		obj.loadHomePage();
		obj.userSearchTest();
	}
		
}