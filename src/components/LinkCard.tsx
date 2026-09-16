import type { ReactNode } from "react";

type LinkCardProps = {
  label: string;
  href: string;
  icon?: ReactNode;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({
  label,
  href,
  icon,
  count,
  onClick,
}: LinkCardProps) {
  const isExternal = !href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="relative flex w-full items-center justify-center gap-3 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-center font-medium text-stone-700 shadow-[0_4px_20px_-6px_rgba(194,120,60,0.18)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_10px_28px_-8px_rgba(194,120,60,0.25)]"
    >
      {icon}
      <span>{label}</span>
      <span className="absolute right-5 text-xs font-normal tabular-nums text-stone-400">
        {count}회
      </span>
    </a>
  );
}
