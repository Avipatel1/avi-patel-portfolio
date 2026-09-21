import { chromium, expect } from '@playwright/test'
import { mkdirSync } from 'node:fs'

mkdirSync('.artifacts', { recursive: true })
const browser = await chromium.launch(process.platform === 'win32' ? { channel: 'msedge' } : {})
const errors = []
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' })
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  const response = await page.goto('http://127.0.0.1:5173')
  expect(response.status()).toBe(200)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Understanding')
  await expect(page.locator('.project-card')).toHaveCount(2)
  const experimental = page.locator('#experimental-work')
  await expect(experimental.getByRole('article')).toHaveCount(4)
  expect(await page.locator('main > section').evaluateAll(sections => sections.map(section => section.id))).toEqual(['home', 'projects', 'experimental-work', 'about', 'resume', 'contact'])
  for (const link of await page.getByRole('navigation').getByRole('link').all()) {
    const anchor = await link.getAttribute('href')
    await expect(page.locator(anchor)).toHaveCount(1)
  }
  await page.getByRole('navigation').getByRole('link', { name: 'Experimental Work' }).focus()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#experimental-work$/)
  await expect(experimental.getByRole('heading', { level: 2 })).toBeInViewport()
  const expectedReports = [
    'Experiment_7__Speed_of_Light.pdf',
    'Experiment_11__Holographic_Interferometry_of_a_Cantilever_using_Instant_Holographic_Film.pdf',
    'Experiment_33__Electromotive_Response_to_Moving_Magnetic_Sources.pdf',
    'Experiment_47__Zeeman_Effect.pdf',
  ]
  const reportLinks = experimental.getByRole('link', { name: /^View report:/ })
  for (let index = 0; index < expectedReports.length; index++) {
    await expect(reportLinks.nth(index)).toHaveAttribute('href', 'https://github.com/Avipatel1/Lab_reports/blob/main/' + expectedReports[index])
  }
  for (const link of await experimental.getByRole('link').all()) {
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  }
  await reportLinks.first().focus()
  await page.keyboard.press('Tab')
  await expect(reportLinks.nth(1)).toBeFocused()
  expect(await reportLinks.nth(1).evaluate(link => getComputedStyle(link).outlineStyle)).toBe('solid')
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto')
  await experimental.screenshot({ path: '.artifacts/experimental-desktop.png' })
  await page.locator('#projects').scrollIntoViewIfNeeded()
  await expect.poll(() => page.locator('.project-figure img').evaluateAll(images => images.every(img => img.complete && img.naturalWidth > 0))).toBe(true)
  await page.getByText('Project notes', { exact: true }).first().click()
  const nbody = page.getByRole('article', { name: 'Gravity, one interaction at a time.' })
  await expect(nbody.getByRole('table')).toContainText('0.999989')
  await expect(nbody.getByRole('table')).toContainText('1.000030')
  const report = await page.request.get('http://127.0.0.1:5173/results/nbody-orbital-analysis.txt')
  expect(report.status()).toBe(200)
  expect(await report.text()).toContain('Insufficient coverage')
  const chaos = page.getByRole('article', { name: 'Learning the motion of chaos.' })
  await chaos.getByText('Project notes', { exact: true }).click()
  await expect(chaos.getByRole('table')).toBeVisible()
  await expect(chaos.getByRole('table')).toContainText('0.000368')
  for (const image of await chaos.locator('.result-figure img').all()) {
    await image.scrollIntoViewIfNeeded()
    await expect.poll(() => image.evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true)
  }
  for (const link of await chaos.getByRole('link', { name: 'Download metrics' }).all()) {
    const response = await page.request.get('http://127.0.0.1:5173' + await link.getAttribute('href'))
    expect(response.status()).toBe(200)
    expect((await response.json()).epochs).toBe(100)
  }
  await expect(page.getByRole('heading', { name: 'The question' }).first()).toBeVisible()
  const resume = await page.request.get('http://127.0.0.1:5173/Avi_Patel_Resume.pdf')
  expect(resume.status()).toBe(200)
  expect((await resume.body()).subarray(0, 5).toString()).toBe('%PDF-')
  await page.getByRole('button', { name: 'Prepare email' }).click()
  expect(await page.locator('form').evaluate(form => form.checkValidity())).toBe(false)
  await page.getByLabel('Your name').fill('Portfolio review')
  await page.getByLabel('Email address').fill('review@example.com')
  await page.getByLabel('Your message').fill('Local browser validation only.')
  expect(await page.locator('form').evaluate(form => form.checkValidity())).toBe(true)
  // Do not submit a valid form: that would request an external email application.
  await page.getByLabel('Your name').clear()
  await page.getByLabel('Email address').clear()
  await page.getByLabel('Your message').clear()
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({ path: '.artifacts/desktop.png', fullPage: true })
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    const fits = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    expect(fits, 'No horizontal overflow at ' + width + 'px').toBe(true)
    const columnCount = await page.locator('.research-grid').evaluate(grid => getComputedStyle(grid).gridTemplateColumns.split(' ').length)
    expect(columnCount).toBe(width < 768 ? 1 : 2)
  }
  await page.setViewportSize({ width: 390, height: 844 })
  await page.getByRole('button', { name: 'Menu' }).click()
  await expect(page.getByRole('navigation')).toBeVisible()
  await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click()
  await expect(page.getByRole('navigation')).toBeHidden()
  await expect(page).toHaveURL(/#projects$/)
  await page.getByRole('button', { name: 'Menu' }).click()
  await page.getByRole('navigation').getByRole('link', { name: 'Experimental Work' }).click()
  await expect(page.getByRole('navigation')).toBeHidden()
  await expect(page).toHaveURL(/#experimental-work$/)
  await expect(experimental.getByRole('heading', { level: 2 })).toBeInViewport()
  await experimental.screenshot({ path: '.artifacts/experimental-mobile.png' })
  await page.getByRole('button', { name: 'Menu' }).click()
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).focus()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('button', { name: 'Menu' })).toBeFocused()
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({ path: '.artifacts/mobile.png', fullPage: true })
  expect(errors).toEqual([])
  console.log('PASS: HTTP 200, React rendering, loaded figures and diagnostics, results table, metrics downloads, expandable notes, PDF, form validation, mobile menu, keyboard dismissal, and no overflow with results expanded at 320/390/768/1440px. No browser errors.')
} finally {
  await browser.close()
}
