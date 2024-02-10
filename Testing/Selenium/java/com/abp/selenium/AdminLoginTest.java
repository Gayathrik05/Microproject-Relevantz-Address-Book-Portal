package com.abp.selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AdminLoginTest {

	static WebDriver driver;

	@BeforeClass
	public void initializer() {
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}

	@Test
	public void loadHomePage() {
		driver.navigate().to("http://localhost:4200/login");
	}

	@Test
	public void loginAdminDetails() { 
		
    driver.findElement(By.id("mat-input-0")).click();
    driver.findElement(By.id("mat-input-0")).sendKeys("admin@gmail.com");
    driver.findElement(By.id("mat-input-1")).click();
    driver.findElement(By.id("mat-input-1")).sendKeys("admin123");
    driver.findElement(By.id("login")).click();
//    driver.navigate().to("http://localhost:4200/admincomponent/");
//    driver.navigate().to("http://localhost:4200/login");
		System.out.println("Admin Login Successfully");
		

	}


	public static void main(String[] args) {
		AdminLoginTest obj = new AdminLoginTest();
		obj.loadHomePage();
		obj.loginAdminDetails();

	}
}
