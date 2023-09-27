import { $, browser } from '@wdio/globals'

class LoginPage {

    get loginButton() {
        return $('#login-button');
    }

    get errorMessage() {
        return $('*[data-test="error"]');
    }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login() {
        await this.loginButton.click();
    }

}

export default new LoginPage();