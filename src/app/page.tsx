import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  {
    label: "깃허브",
    href: "https://github.com/Kichan-Seoul",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 shrink-0 fill-current"
      >
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.34-3.84-1.34-.52-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.39-1.23.71-1.51-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.66 5.34-5.2 5.62.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "블로그",
    href: "https://assetstory.net/story",
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/AppLogo unfill.png" alt="" className="h-5 w-5 shrink-0" />
    ),
  },
  {
    label: "이메일",
    href: "mailto:kimkc30@icloud.com",
    icon: (
      <span className="shrink-0" aria-hidden="true">
        ✉️
      </span>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-20 sm:py-24">
      <div className="flex w-full max-w-[420px] flex-col items-center gap-12">
        <ProfileHeader
          name="김기찬"
          bio="풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요"
          imageUrl="/kichan.png"
        />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard
              key={link.label}
              label={link.label}
              href={link.href}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
