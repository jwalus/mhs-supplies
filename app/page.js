import Header from "@/components/reuseable/Header";
import Footer from "@/components/reuseable/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <Footer />
    </div>
  );
}