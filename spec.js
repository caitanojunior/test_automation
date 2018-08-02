describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get(helper.path());
	element(by.name('usuario')).sendKeys('caitano');
    element(by.name('senha')).sendKeys('123456');
	element(by.id('botao')).click();
  });
});