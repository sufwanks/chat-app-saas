interface IUserAvatarProps {
  name: string;
  image: string;
  className?: string;
}

interface IUserSession {
  session: Session | null;
}

interface IPricingCardsProps {
  redirect: boolean;
}

interface IPricingCardsTiers {
  name: string;
  id: string | null;
  href: string;
  priceMonthly: string | null;
  description: string;
  features: string[];
}
