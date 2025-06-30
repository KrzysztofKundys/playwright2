class Login {
    constructor(page){
        this.page = page;
        this.url = '/login';
        this.loginEmailField = '[data-qa="login-email"]';
        this.loginPasswordField = '[data-qa="login-password"]';
        this.loginButton = '[data-qa="login-button"]';
    }
    async goto() {
        await this.page.goto(this.url);
    }

    async fillLoginForm(email, password) {
        await this.page.locator(this.loginEmailField).fill(email);
        await this.page.locator(this.loginPasswordField).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(this.loginButton).click();
    }

    async loginCredential(email, password) {
        await this.fillLoginForm(email, password);
        await this.clickLoginButton();
    }
}

module.exports = { Login };