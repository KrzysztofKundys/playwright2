// @ts-check
import { test, expect } from '@playwright/test';
import { request } from '@playwright/test';

test('API GET tests', async ({ request }) => {
    const response = await request.get('api/productsList');
    expect(response).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('products');
    expect(data.products.length).toBeGreaterThan(0);
)};

test('API POST Test', async ({ request }) => {
    const response = await request.post('api/productsList'){
        form: {
            search_product: 'top'
        }
    });
      expect(response.ok()).toBeTruthy();
      const data = await response.json();
      expect(data).toHaveProperty('products');
      expect(data.products.length).toBeGreaterThan(0);
      expect(data.products[0].name.toLowerCase()).toContain('top');
});
