package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class UserSendMessage {

	static WebDriver driver;
	@BeforeClass 
	  public void initializer() {
	  System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
	  driver = new ChromeDriver(); }
	  
	  @Test 
	  public void loadHomePage() {
	  driver.navigate().to("http://localhost:4200/usercomponent"); }
	  
	@Test
	
	public void userSendMessageTest() {
		  driver.findElement(By.cssSelector(".btn-outline-warning")).click();
		    driver.findElement(By.id("mat-input-1")).click();
		    driver.findElement(By.id("mat-input-1")).sendKeys("11960");
		    driver.findElement(By.id("mat-input-2")).click();
		    driver.findElement(By.id("mat-input-2")).sendKeys("Mahesh");
		    driver.findElement(By.id("mat-input-3")).click();
		    driver.findElement(By.id("mat-input-3")).sendKeys("mahesh@gmail.com");
		    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-10 .ng-tns-c1205077789-6:nth-child(1)")).click();
		    driver.findElement(By.id("mat-input-4")).sendKeys("Need to change");
		    driver.findElement(By.cssSelector(".mat-primary  .mdc-button__label")).click();
		   
	
		System.out.println("Message Sent Successfully");
	}
	public static void main(String[] args) {
		
		UserSendMessage obj = new UserSendMessage();
		obj.loadHomePage();
		obj.userSendMessageTest();
	}
		
}