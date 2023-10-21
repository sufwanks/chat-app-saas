interface IUserAvatarProps {
  name: string;
  image: string;
  className?: string;
}

interface IUserSession {
  session: Session | null;
}
