import Link from "next/link";
import React, { FC } from "react";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import cn from "classnames";

type Props = {
  className?: string;
  href: string;
  iconName: SemanticICONS;
  size?: IconSizeProp;
  children: React.ReactNode;
};

const NavLink: FC<Props> = ({ className, href, iconName, size = "large", children }) => {
  const navItemClasses = "flex items-center text-2xl py-2 px-4 rounded-lg transition-colors hover:bg-slate-200";

  return (
    <Link href={href}>
      <div className={cn(className, navItemClasses)}>
        <Icon name={iconName} size={size} />
        {children}
      </div>
    </Link>
  );
};

export default NavLink;
