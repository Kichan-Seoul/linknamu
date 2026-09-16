type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-28 w-28 rounded-full bg-zinc-200" />
      <div>
        <p className="text-lg font-semibold text-zinc-900">{name}</p>
        <p className="text-sm text-zinc-500">{bio}</p>
      </div>
    </div>
  );
}
