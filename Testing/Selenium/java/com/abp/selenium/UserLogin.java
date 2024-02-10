  package com.abp.selenium;
  
  
  import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; import
  org.openqa.selenium.chrome.ChromeDriver; import
  org.testng.annotations.BeforeClass; import org.testng.annotations.Test;
  
  
  public class UserLogin {
  
  static WebDriver driver;
  
  @BeforeClass 
  public void initializer() {
  System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
  driver = new ChromeDriver(); }
  
  @Test 
  public void loadHomePage() {
  driver.navigate().to("http://localhost:4200/"); }
  
  
  @Test 
  public void userLoginDetails() {
  driver.findElement(By.name("loginComponent")).click();
  driver.findElement(By.name("userEmail")).sendKeys("abi@gmail.com");
  driver.findElement(By.name("userPassword")).sendKeys("abi123");
  driver.findElement(By.id("login")).click();;
  System.out.println(driver.getTitle());
  System.out.println("Login Successfully");
  
  
  }
  

public static void main(String[] args) { UserLogin obj = new
  UserLogin(); obj.loadHomePage(); obj.userLoginDetails();
  
  } }
  
 
  