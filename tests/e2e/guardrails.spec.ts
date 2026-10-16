import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const sizes = [
  { name: "desktop-1280x800", width: 1280, height: 800 },
  { name: "mobile-390x844", width: 390, height: 844 },
] as const;

const accessibilityRoutes = [
  {
    name: "home",
    path: "/",
    heading: "Big ideas. Software that gets to the point.",
  },
  {
    name: "project detail",
    path: "/projects/peerovo",
    heading: "Peerovo",
  },
  {
    name: "not-found",
    path: "/guardrail-page-that-does-not-exist",
    heading: "Looks like this page wandered off.",
    status: 404,
  },
] as const;
const colorSchemes = [
  { name: "light", colorScheme: "light" },
  { name: "dark", colorScheme: "dark" },
] as const;

async function prepareScreenshot(page: Page) {
  const revealable = await page.locator("[data-reveal]").all();

  for (const element of revealable) {
    await element.scrollIntoViewIfNeeded();
    await expect(element).toHaveAttribute("data-visible", "true");
  }

  await page.evaluate(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  for (const element of revealable) {
    await expect(element).toHaveCSS("opacity", "1");
  }
  await page.locator("img").evaluateAll((images) => {
    images.forEach((image) => {
      if (image instanceof HTMLImageElement) {
        image.loading = "eager";
      }
    });
  });
  await page.waitForFunction(() =>
    Array.from(document.images).every(
      (image) => image.complete && image.naturalWidth > 0,
    ),
  );
}

for (const route of accessibilityRoutes) {
  test(`${route.name} page has no WCAG A/AA violations in either theme`, async ({
    page,
  }) => {
    for (const theme of colorSchemes) {
      await page.emulateMedia({
        colorScheme: theme.colorScheme,
        reducedMotion: "reduce",
      });
      const response = await page.goto(route.path);
      await expect(
        page.getByRole("heading", { level: 1, name: route.heading }),
      ).toBeVisible();

      if ("status" in route) {
        expect(response?.status()).toBe(route.status);
      }

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(
        results.violations,
        `${route.name} page in ${theme.name} theme`,
      ).toEqual([]);
    }
  });
}

test("home page matches the reviewed desktop and mobile layouts", async ({
  page,
}) => {
  for (const size of sizes) {
    await page.setViewportSize({ width: size.width, height: size.height });
    await page.goto("/");
    await expect(page.locator("main").first()).toBeVisible();
    await prepareScreenshot(page);
    await expect(page).toHaveScreenshot("home-" + size.name + ".png", {
      fullPage: true,
      animations: "disabled",
      caret: "hide",
    });
  }
});

test("project detail and not-found pages match reviewed desktop and mobile layouts", async ({
  page,
}) => {
  const routes = [
    { name: "project-detail", path: "/projects/peerovo" },
    {
      name: "not-found",
      path: "/guardrail-page-that-does-not-exist",
    },
  ] as const;

  for (const route of routes) {
    for (const size of sizes) {
      await page.setViewportSize({ width: size.width, height: size.height });
      await page.goto(route.path);
      await expect(page.locator("main").first()).toBeVisible();
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await prepareScreenshot(page);
      await expect(page).toHaveScreenshot(`${route.name}-${size.name}.png`, {
        fullPage: true,
        animations: "disabled",
        caret: "hide",
      });
    }
  }
});
