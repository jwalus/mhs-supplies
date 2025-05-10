import BodyOne from "@/components/products/BodyOne";
import Banner from "@/components/reuseable/Banner";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div>
        <Banner text="Products" />
        <BodyOne />
      </div>
    </div>
  );
}