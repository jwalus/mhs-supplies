import BodyOne from "@/components/privacy/BodyOne";
import Banner from "@/components/reuseable/Banner";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div>
        <Banner text="Privacy" />
        <BodyOne />
      </div>
    </div>
  );
}