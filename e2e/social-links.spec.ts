import { expect, test } from '@playwright/test';

test('Link to GitHub opens on a new tab and finds profile', async ({ page, context }) => {
	await page.goto('/');

	const [newPage] = await Promise.all([context.waitForEvent('page'), page.locator('a:has-text("GitHub")').click()]);
	await newPage.waitForLoadState();
	await expect(newPage).toHaveURL(/github\.com/);
	await expect(newPage.locator('strong:has-text("fredericoo") >> nth=1')).toBeVisible();
});

test('Link to Twitter opens on a new tab and finds profile', async ({ page, context }) => {
	await page.goto('/');

	const [newPage] = await Promise.all([context.waitForEvent('page'), page.locator('a:has-text("Twitter")').click()]);
	await newPage.waitForLoadState();
	await expect(newPage).toHaveURL(/twitter\.com/);
	await expect(newPage.locator('text=@fredoiq')).toBeVisible();
});

test('Link to LinkedIn opens on a new tab', async ({ page, context }) => {
	await page.goto('/');

	const [newPage] = await Promise.all([context.waitForEvent('page'), page.locator('a:has-text("LinkedIn")').click()]);
	await newPage.waitForLoadState();
	await expect(newPage).toHaveURL(/linkedin\.com/);
});
