import clsx from "clsx";
import Link, { LinkProps } from "next/link";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<"a"> &
  LinkProps;

export default function UnstyledLink({
  children,
  href,
  className,
  openNewTab,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith("/") && !href.startsWith("#");

  if (!isNewTab) {
    return (
      <Link href={href}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
      className={clsx(className, "cursor-newtab")}
    >
      {children}
    </a>
  );
}
