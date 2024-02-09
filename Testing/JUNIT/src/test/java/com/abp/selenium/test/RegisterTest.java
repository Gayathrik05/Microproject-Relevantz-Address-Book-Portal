/*
 * package com.abp.selenium.test;
 * 
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; import
 * org.openqa.selenium.chrome.ChromeDriver; import
 * org.testng.annotations.BeforeClass; import org.testng.annotations.Test;
 * 
 * 
 * public class RegisterTest {
 * 
 * static WebDriver driverInsert;
 * 
 * @BeforeClass public void initializer() {
 * System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
 * driverInsert = new ChromeDriver(); }
 * 
 * @Test public void loadHomePage() {
 * driverInsert.navigate().to("http://localhost:4200/"); }
 * 
 * 
 * @Test public void registerDetails() {
 * driverInsert.findElement(By.name("loginComponent")).click();
 * driverInsert.findElement(By.name("movetoregister")).click();
 * driverInsert.findElement(By.name("userName")).sendKeys("Abi");
 * driverInsert.findElement(By.name("userEmail")).sendKeys("abi@gmail.com");
 * driverInsert.findElement(By.name("userPassword")).sendKeys("abi123");
 * driverInsert.findElement(By.name("userConfirmPassword")).sendKeys("abi123");
 * driverInsert.findElement(By.name("clickregister")).click();
 * System.out.println(driverInsert.getTitle());
 * System.out.println("Register Successfully");
 * 
 * }
 * 
 * 
 * public static void main(String[] args) { RegisterTest obj = new
 * RegisterTest(); obj.loadHomePage(); obj.registerDetails();
 * 
 * } }
 * 
 */