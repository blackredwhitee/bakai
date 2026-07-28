/*
  Реестр иконок. Контент хранит строковое имя иконки (IconName),
  здесь оно резолвится в компонент Lucide. Подобраны по смыслу под каждый пункт;
  размеры/цвет задаёт вызывающая сторона через className/props (см. README Design Tokens).
*/

import {
  Landmark, Send, Smartphone, Globe, ArrowLeftRight, Wallet, Nfc, AppWindow,
  Banknote, IdCard, FileText, Mail, Phone, MapPin, Briefcase, GraduationCap,
  Laptop, UserRound, CreditCard, Lock, LifeBuoy, BookOpen,
  type LucideIcon,
} from "lucide-react";

export type IconName =
  | "landmark" | "send" | "smartphone" | "globe" | "arrows" | "wallet"
  | "nfc" | "appwindow" | "banknote" | "idcard" | "filetext" | "mail"
  | "phone" | "pin" | "briefcase" | "graduation" | "laptop" | "user"
  | "card" | "lock" | "support" | "book";

const REGISTRY: Record<IconName, LucideIcon> = {
  landmark: Landmark,
  send: Send,
  smartphone: Smartphone,
  globe: Globe,
  arrows: ArrowLeftRight,
  wallet: Wallet,
  nfc: Nfc,
  appwindow: AppWindow,
  banknote: Banknote,
  idcard: IdCard,
  filetext: FileText,
  mail: Mail,
  phone: Phone,
  pin: MapPin,
  briefcase: Briefcase,
  graduation: GraduationCap,
  laptop: Laptop,
  user: UserRound,
  card: CreditCard,
  lock: Lock,
  support: LifeBuoy,
  book: BookOpen,
};

export function Icon({
  name,
  size = 22,
  color,
  strokeWidth = 1.7,
  className,
}: {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}) {
  const Cmp = REGISTRY[name];
  return (
    <Cmp
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden
    />
  );
}
