import { test, expect } from '@playwright/test';

test('API test 1 get', async ({ request }) => {
    const response = await request.get('api/users/2');

    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('janet.weaver@reqres.in');

})

test('API test get single user', async ({ request }) => {

    const odpowiedzSerwera = await request.get('api/users/2');

    expect(odpowiedzSerwera.status()).toBe(200);
    expect(await odpowiedzSerwera.text()).toContain('janet.weaver@reqres.in');

})

// test('API test get single user', async ({ request }) => {

//     const odpowiedzSerwera = await request.post('api/users/2');

//     expect(odpowiedzSerwera.status()).toBe(200);
//     expect(await odpowiedzSerwera.text()).toContain('janet.weaver@reqres.in');

// })

test('API test POST', async ({ request }) => {
    const response = await request.post('api/users', {
        data: {
            name: "morpheus",
            job: "leader",
        }
    });
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.name).toBe('morpheus')
})

test('API test PUT', async ({ request }) => {
    const response = await request.put('api/users/2', {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.updatedAt).toBeDefined();
})

test('API test DELETE', async ({ request }) => {
    const response = await request.delete('api/users/2');
    expect(response.status()).toBe(204);
})

test('API test GET with delayed response', async ({ request }) => {
    const response = await request.get('api/users?delay=3');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.page).toBe(1);
    expect(responseBody.total_pages).toBe(2);
});