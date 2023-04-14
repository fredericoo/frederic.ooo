import { expect, test } from '@playwright/test';

test('Link to GitHub opens on a new tab', async ({ page, context }) => {
	await page.goto('/');

	const socialButton = page.getByRole('link', { name: 'GitHub' });

	const [newPage] = await Promise.all([context.waitForEvent('page'), socialButton.click()]);
	await newPage.waitForLoadState();

	await expect(newPage).toHaveURL(/github\.com/);
});

test('Link to Twitter opens on a new tab', async ({ page, context }) => {
	await page.goto('/');

	const socialButton = page.getByRole('link', { name: 'Twitter' });

	const [newPage] = await Promise.all([context.waitForEvent('page'), socialButton.click()]);
	await newPage.waitForLoadState();
	await expect(newPage).toHaveURL(/twitter\.com/);
});

test('Link to LinkedIn opens on a new tab', async ({ page, context }) => {
	await page.goto('/');

	const socialButton = page.getByRole('link', { name: 'Linkedin' });

	const [newPage] = await Promise.all([context.waitForEvent('page'), socialButton.click()]);
	await newPage.waitForLoadState();
	await expect(newPage).toHaveURL(/linkedin\.com/);
});
