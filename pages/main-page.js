class MainPage {
    constructor(page) {
        this.page = page;
        this.pageUrl = '/';
        this.linkKursy = page.locator('#main-nav').getByRole('link', { name: 'Kursy' });
        this.linkEventy = page.locator('#menu-item-916').getByRole('link', { name: 'Eventy' });
        this.linkDlaKursanta = page.getByRole('link', { name: 'Dla kursanta' });
        this.materialyDoPobrania = page.locator('#menu-item-145').getByRole('link', { name: 'Materiały do pobrania' });
    }
    async hoverAndClick() {
        await this.linkDlaKursanta.hover();
        await this.materialyDoPobrania.click();        
    }
}
module.exports = { MainPage };