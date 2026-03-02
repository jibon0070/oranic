export default function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={className}
    >
      <path
        d="M14.75 18.75V16.75C14.75 15.6891 14.3286 14.6717 13.5784 13.9216C12.8283 13.1714 11.8109 12.75 10.75 12.75H4.75C3.68913 12.75 2.67172 13.1714 1.92157 13.9216C1.17143 14.6717 0.75 15.6891 0.75 16.75V18.75M11.75 4.75C11.75 6.95914 9.95914 8.75 7.75 8.75C5.54086 8.75 3.75 6.95914 3.75 4.75C3.75 2.54086 5.54086 0.75 7.75 0.75C9.95914 0.75 11.75 2.54086 11.75 4.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
