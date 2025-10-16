import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";

// app/ecommerce/layout.tsx

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Ecommerce Navbar */}
      <Navbar />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
