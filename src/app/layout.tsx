import type { Metadata } from "next";
import "./globals.css";
import { yekan } from "@/lib/font/font";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import HeaderMobile from "@/components/layout/Header/HeaderMobile";

export const metadata: Metadata = {
  title: "دریای خروشان لیان | خدمات فنی و مهندسی نیروگاهی و دریایی",
  description:
    "دریای خروشان لیان، ارائه‌دهنده خدمات فنی و مهندسی در حوزه دیزل ژنراتور، تولید برق اضطراری، تعمیر و نگهداری تجهیزات نیروگاهی و خدمات فنی و مهندسی دریایی.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${yekan.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <div className="lg:hidden">
          <HeaderMobile />
        </div>

        <div className="hidden lg:block">
          <Header />
        </div>

        <main className=" w-full flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
