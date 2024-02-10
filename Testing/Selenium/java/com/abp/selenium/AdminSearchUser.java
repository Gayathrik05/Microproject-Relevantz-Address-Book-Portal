package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class AdminSearchUser {

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
	
	public void searchuserTest() {
		driver.findElement(By.cssSelector(".btn-outline-info")).click();
		 driver.findElement(By.id("mat-input-1")).sendKeys("Mahesh");
	     
	
		System.out.println("User searched Successfully");
	}
	public static void main(String[] args) {
		
		AdminSearchUser obj = new AdminSearchUser();
		obj.loadHomePage();
		obj.searchuserTest();
	}
		
}