import { NextRequest } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

import { projectItems } from "@/data/projects-mocks/projects";

export const runtime = "nodejs";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      slug: string;
    }>;
  },
) {
  const { slug } = await params;

  const project = projectItems.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return new Response(
      JSON.stringify({
        message: "Project not found",
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  let browser: Awaited<
    ReturnType<typeof puppeteer.launch>
  > | null = null;

  try {
    const origin = new URL(request.url).origin;

    const catalogUrl =
      `${origin}/projects/${encodeURIComponent(slug)}/catalog`;

    const isDevelopment =
      process.env.NODE_ENV === "development";

    const executablePath = isDevelopment
      ? process.env.CHROME_EXECUTABLE_PATH
      : await chromium.executablePath();

    if (!executablePath) {
      throw new Error(
        "Chrome executable path is not configured.",
      );
    }

    browser = await puppeteer.launch({
      executablePath,
      headless: true,

      args: isDevelopment
        ? [
            "--no-sandbox",
            "--disable-setuid-sandbox",
          ]
        : chromium.args,

      defaultViewport: {
        width: 1440,
        height: 900,
        deviceScaleFactor: 1,
      },
    });

    const page = await browser.newPage();

    await page.emulateMediaType("screen");

    await page.goto(catalogUrl, {
      waitUntil: "networkidle0",
    });

    await page.evaluate(async () => {
      await document.fonts.ready;
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
        "Content-Disposition":
          'attachment; filename="project-catalog.pdf"',
        "Cache-Control":
          "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error(
      "PROJECT_CATALOG_PDF_ERROR:",
      error,
    );

    return new Response(
      JSON.stringify({
        message: "خطا در ساخت کاتالوگ پروژه",
        error:
          error instanceof Error
            ? error.message
            : String(error),
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