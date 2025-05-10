export default function Button({ text }) {
    return (
      <div>
        <button className="bg-orangeOne hover:bg-orangeTwo text-white font-semibold rounded-3xl px-4 py-2 hover:scale-110 tw-transition-standard">
          {text}
        </button>
      </div>
    );
  }