export default function Banner({ text }) {
    return (
      <div className="w-full">
        <div className="tw-bg-blue-gradient flex justify-center items-center text-white h-[9rem] text-6xl font-semibold">
          {text}
        </div>
      </div>
    );
  }  