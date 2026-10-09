type IconName =
  | "arrow-up-right"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "spark"
  | "sun"
  | "moon"
  | "system"
  | "check";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {name === "arrow-up-right" ? (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      ) : name === "arrow-down" ? (
        <>
          <path d="M12 4.5v15" />
          <path d="m5.5 13 6.5 6.5 6.5-6.5" />
        </>
      ) : name === "arrow-left" ? (
        <>
          <path d="M19.5 12h-15" />
          <path d="M11 5.5 4.5 12 11 18.5" />
        </>
      ) : name === "arrow-right" ? (
        <>
          <path d="M4.5 12h15" />
          <path d="m13 5.5 6.5 6.5-6.5 6.5" />
        </>
      ) : name === "spark" ? (
        <path
          d="m12 2.7 2.05 6.95L21 12l-6.95 2.35L12 21.3l-2.05-6.95L3 12l6.95-2.35L12 2.7Z"
          fill="currentColor"
          stroke="none"
        />
      ) : name === "sun" ? (
        <>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.8v2M12 19.2v2M2.8 12h2m14.4 0h2M5.5 5.5l1.4 1.4m10.2 10.2 1.4 1.4m0-13-1.4 1.4M6.9 17.1l-1.4 1.4" />
        </>
      ) : name === "moon" ? (
        <path d="M19.8 15.1A8.1 8.1 0 0 1 8.9 4.2 8.3 8.3 0 1 0 19.8 15.1Z" />
      ) : name === "system" ? (
        <>
          <rect height="13" rx="2" width="18" x="3" y="4" />
          <path d="M8 20h8M12 17v3" />
        </>
      ) : (
        <path d="m5 12.5 4.2 4.2L19 7" />
      )}
    </svg>
  );
}
