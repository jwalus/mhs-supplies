import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-auto flex justify-center bg-gray-200">
      <div className="flex flex-col tw-container-responsive">
        <div className="flex flex-row">
          <div>
            <a href="/" className="">
              <Image
                src="/content/home/images/MHSwoundcare.png"
                alt="MHS Logo"
                width={250}
                height={250}
                priority
                className="h-auto w-[220px] lg:w-[250px] object-contain"
              />
            </a>
          </div>
          <div>
            text
          </div>
          <div>
            text
          </div>
        </div>
      </div>
    </footer>
  );
}