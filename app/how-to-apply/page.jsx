import BodyOne from "@/components/how-to-apply/BodyOne";
import Banner from "@/components/reuseable/Banner";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div>
        <Banner text="How To Apply" />
        <BodyOne />
      </div>
    </div>
  );
}