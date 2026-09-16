type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      className="block w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-center font-medium text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:shadow-md"
    >
      {label}
    </a>
  );
}
