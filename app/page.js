import Header from "@/components/reuseable/Header";
import Footer from "@/components/reuseable/Footer";
import BodyOne from "@/components/home/BodyOne";
import BodyTwo from "@/components/home/BodyTwo";
import BodyThree from "@/components/home/BodyThree";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div>
        <BodyOne />
        <BodyTwo />
        <BodyThree />
      </div>
    </div>
  );
}