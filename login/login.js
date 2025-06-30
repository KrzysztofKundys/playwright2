class Login {
    constructor(page){
        this.page = page;
        this.url = '/login';
        this.loginEmailField = page.locator('[data-qa="login-email"]');
        this.loginPasswordField = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
    }
    async goto() {
        await this.page.goto(this.url);
    }

    async fillLoginForm(email, password) {
        await this.loginEmailField.fill(email);
        await this.loginPasswordField.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async loginCredential(email, password) {
        await this.fillLoginForm(email, password);
        await this.clickLoginButton();
    }
}

module.exports = { Login };