import { expect } from '@playwright/test';

class Gdpr {
    constructor(page) {
        this.page = page;
        this.cookieConsentButton = page.locator('.fc-cta-consent');
    }

    async acceptCookies() {
        await this.cookieConsentButton.click();
        await expect (this.cookieConsentButton).not.toBeVisible();
    }
}

module.exports = { Gdpr };