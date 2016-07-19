var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var expect = require('chai').expect;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

    driver.get('http://www.google.com/ncr');
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    driver.sleep(10000);
    driver.quit();
