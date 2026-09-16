export const LINK_IDS = ["github", "blog", "email"] as const;

export type LinkId = (typeof LINK_IDS)[number];

export function isLinkId(value: string): value is LinkId {
  return (LINK_IDS as readonly string[]).includes(value);
}
