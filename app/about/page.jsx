import BodyOne from "@/components/about/BodyOne";
import Banner from "@/components/reuseable/Banner";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div>
        <Banner text="About" />
        <BodyOne />
      </div>
    </div>
  );
}