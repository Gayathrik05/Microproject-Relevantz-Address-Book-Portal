package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class AdminAddDetailsTest {

	static WebDriver driver;
	@BeforeClass 
	  public void initializer() {
	  System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
	  driver = new ChromeDriver(); }
	  
	  @Test 
	  public void loadHomePage() {
	  driver.navigate().to("http://localhost:4200/admincomponent/"); }
	  
	@Test
	
	public void addDetailsTest() {
//		driver.findElement(By.name("openComponent")).click();
//		driver.navigate().to("http://localhost:4200/admincomponent/admindialog/");
		driver.findElement(By.cssSelector(".btn btn-outline-success")).click();
		
	    driver.findElement(By.id("mat-input-3")).click();
	    driver.findElement(By.id("mat-input-3")).sendKeys("11960");
	    driver.findElement(By.id("mat-input-4")).sendKeys("Devi");
	    driver.findElement(By.id("mat-input-5")).sendKeys("9789763644");
	    driver.findElement(By.id("mat-input-6")).sendKeys("Sivakasi");
	    driver.findElement(By.id("mat-input-7")).sendKeys("A Positive");
	    driver.findElement(By.id("mat-input-8")).sendKeys("12.06.2023");
	    driver.findElement(By.id("mat-input-9")).sendKeys("HR");
	    driver.findElement(By.name("insert")).click();
	    System.out.println("Employee Details inserted Successfully");
	}
	public static void main(String[] args) {
		
		AdminAddDetailsTest obj = new AdminAddDetailsTest();
		obj.loadHomePage();
		obj.addDetailsTest();
	}
		
}