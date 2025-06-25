class NewHome {
    constructor(page) {
        this.page = page;
        this.pageUrl = 'home/';
        this.itemPriceButton = page.getByRole('button', { name: '₹ 109.95' });
        this.checkCartHasText = expect(page.locator('span.mx-2'));
    }
    async navigateTo() {
        await this.page.goto(this.pageUrl)
    }
    async homePageCheckTitleAndURL(){
        await expect(page).toHaveTitle('Fake Store | LetCode with Koushik');
        await expect(page).toHaveURL('/');
    }
    async productPageCheckTitleAndURL(){
        await expect(page).toHaveTitle('Product - Fake Store | LetCode with Koushik');
        await expect(page).toHaveURL('/product/1');
    }
    async cartPageCheckTitleAndURL(){
        await expect(page).toHaveTitle('Cart - Fake Store | LetCode with Koushik');
        await expect(page).toHaveURL('/cart');
    }
    async addToCartAndNavigateToIt() {
        await this.addToCart()
        await this.navigateToCart()
    }
    async addToCart() {
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
    }
    async navigateToCart() {
        await this.page.getByRole('button', { name: '' }).click();
    }
}
module.exports = { NewHome };
