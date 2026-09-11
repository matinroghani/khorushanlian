import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  serverExternalPackages: [
    "@sparticuz/chromium",
    "puppeteer-core",
  ],

  outputFileTracingIncludes: {
    "/api/projects/[slug]/catalog": [
      "./node_modules/@sparticuz/chromium/**/*",
    ],
  },
};

export default nextConfig;