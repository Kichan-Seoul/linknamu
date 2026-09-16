type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="rounded-full bg-gradient-to-br from-white via-white to-orange-50 p-[3px] shadow-[0_10px_28px_-10px_rgba(194,120,60,0.5)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className="h-28 w-28 rounded-full object-cover ring-1 ring-black/5 sm:h-32 sm:w-32"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-xl font-bold tracking-tight text-stone-800">{name}</p>
        <p className="text-sm leading-relaxed text-stone-500">{bio}</p>
      </div>
    </div>
  );
}
