export default function CircleChevronRight({ className = "w-6 h-6" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M10 8l4 4-4 4" />
        </svg>
    );
}  