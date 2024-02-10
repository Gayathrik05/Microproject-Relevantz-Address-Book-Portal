package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class UserInsert {

	static WebDriver driver;
	@BeforeClass 
	  public void initializer() {
	  System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
	  driver = new ChromeDriver(); }
	  
	  @Test 
	  public void loadHomePage() {
	  driver.navigate().to("http://localhost:4200/usercomponent"); }
	  
	@Test
	
	public void userAddDetailsTest() {
		
	    driver.findElement(By.name("openComponent")).click();
	    driver.findElement(By.id("mat-input-1")).click();
	    driver.findElement(By.id("mat-input-1")).sendKeys("22999");
	    driver.findElement(By.id("mat-input-2")).sendKeys("Sutha");
	    driver.findElement(By.id("mat-input-3")).sendKeys("7777890123");
	    driver.findElement(By.id("mat-input-4")).sendKeys("Cnai");
	    driver.findElement(By.id("mat-input-5")).sendKeys("B Negative");
	    driver.findElement(By.id("mat-input-6")).sendKeys("10.10.2010");
	    driver.findElement(By.id("mat-input-7")).sendKeys("Ad");
	    driver.findElement(By.name("insert")).click();
	    System.out.println("Data Saved Successfully");
	}
	public static void main(String[] args) {
		
		UserInsert obj = new UserInsert();
		obj.loadHomePage();
		obj.userAddDetailsTest();
	}
		
}