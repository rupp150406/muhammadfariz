import type { ReactNode } from "react";

type Entry = {
  school: string;
  degree: string;
  period: string;
  slug?: string;
  logoUrl?: string;
};

const ENTRIES: Entry[] = [
  {
    school: "IDN Polytechnic",
    degree: "Diploma IV, Computer Engineering",
    period: "2024 – 2028",
    logoUrl: "https://chwjmwuqdbcmgnascxfg.supabase.co/storage/v1/object/sign/just%20me/idn.svg?token=eyJraWQiOiIwOGQ0ZmUxMi1lYmVhLTQwMTUtODg1NS1hMjQ1NjEyYjU5NzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJqdXN0IG1lL2lkbi5zdmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkxMTgzOTM5LCJleHAiOjI0MjE5MDM5Mzl9.k_uMb3MFpd47In9303UZ3konsKf9l89Qvr23MZ60pL4", // Place idn.png in your /public folder or use an external URL
  },
];

const ROW_HEIGHT = 64;

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Education
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {ENTRIES.map((entry) => (
            <li
              key={`${entry.school}-${entry.period}`}
              className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
              style={{ minHeight: ROW_HEIGHT }}
            >
              <SchoolLogo entry={entry} />
              <div className="flex min-w-0 flex-col">
                <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                  {entry.school}
                </span>
                <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                  {entry.degree}
                  <span className="text-foreground/30 mx-2">•</span>
                  <span className="text-foreground/55">{entry.period}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SchoolLogo({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.school.charAt(0);
  const iconSrc =
    entry.logoUrl ??
    (entry.slug ? `https://cdn.simpleicons.org/${entry.slug}` : undefined);

  return (
    <span
      className="border-foreground/15 bg-foreground/3 inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border"
      aria-hidden="true"
      style={{ borderRadius: 14 }}
    >
      {iconSrc ? (
        <img
          src={iconSrc}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
          draggable={false}
        />
      ) : (
        <span className="text-foreground/60 text-[18px] font-semibold tracking-tight">
          {initials}
        </span>
      )}
    </span>
  );
}
