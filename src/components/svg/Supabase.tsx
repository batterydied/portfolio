export default function SupabaseSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className + " group-hover:text-[#3ecf8e]"}
      viewBox="0 0 128 128"
      width={24}
      height={24}
      fill="currentColor"
    >
      <path
        d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
        transform="translate(-27.722 -60.338)"
      ></path>
      <path
        d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z"
      ></path>
    </svg>
  );
}
