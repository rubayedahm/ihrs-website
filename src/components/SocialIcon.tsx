import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";

export type SocialKey = "instagram" | "facebook" | "linkedin" | "x" | "youtube" | "whatsapp";

export const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
} satisfies Record<SocialKey, unknown>;

export function SocialIcon({ name }: { name: SocialKey }) {
  const Icon = socialIcons[name];
  return <Icon className="size-4" aria-hidden />;
}
