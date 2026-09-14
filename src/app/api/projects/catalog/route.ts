import { NextRequest } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";


export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export async function GET(request: NextRequest) {
  let browser: Awaited<ReturnType<typeof puppeteer.launch>> | null = null;

  try {
    const origin = new URL(request.url).origin;

    const catalogUrl = `${origin}/projects/catalog?pdf=${Date.now()}`;

    const isDevelopment = process.env.NODE_ENV === "development";

    const executablePath = isDevelopment
      ? process.env.CHROME_EXECUTABLE_PATH
      : await chromium.executablePath();

    if (!executablePath) {
      throw new Error("Chrome executable path is not configured.");
    }

    browser = await puppeteer.launch({
      executablePath,
      headless: true,

      args: isDevelopment
        ? ["--no-sandbox", "--disable-setuid-sandbox"]
        : chromium.args,

      defaultViewport: {
        width: 794,
        height: 1123,
        deviceScaleFactor: 1,
      },
    });

    const page = await browser.newPage();

    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 1,
    });

    await page.emulateMediaType("print");
    await page.goto(catalogUrl, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    await page.evaluate(async () => {
      await document.fonts.ready;

      const images = Array.from(document.images);

      await Promise.all(
        images.map((image) => {
          if (image.complete) {
            return Promise.resolve();
          }

          return new Promise<void>((resolve) => {
            image.addEventListener("load", () => resolve(), { once: true });

            image.addEventListener("error", () => resolve(), { once: true });
          });
        }),
      );
    });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,

      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });

    return new Response(Buffer.from(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="projects-catalog.pdf"',
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("PROJECTS_CATALOG_PDF_ERROR:", error);

    return new Response(
      JSON.stringify({
        message: "خطا در ساخت کاتالوگ پروژه‌ها",

        error: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,

        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
