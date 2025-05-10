import BodyOne from "@/components/contact/BodyOne";
import Banner from "@/components/reuseable/Banner";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div>
        <Banner text="Contact Us" />
        <BodyOne />
      </div>
    </div>
  );
}