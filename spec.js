var helper = require('./helper.js');

describe('registro de formulário da página inicial', function() {
	
	var NameField = null,
		PassField = null,
		Btn = null,
		alert_message = null;

	
	beforeEach(function () {
        browser.get(helper.path());
        browser.driver.manage().window().maximize();
        NameField = element(by.id('name'));
        PassField = element(by.id('password'));
        Btn = element(by.id('botao'));
    });
	
  it('write in the field user and password, then click ok', function() {
    browser.sleep(5000);
	NameField.sendKeys('admin');
    PassField.sendKeys('admin123');
    Btn.click();
	browser.sleep(5000);
	alert_message = element(by.id('alert_message'));
	
	expect(alert_message.getText()).toContain('Usuario: admin Senha: 123');
  });
});