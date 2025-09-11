import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  transparent?: boolean;
}

export const Layout = ({ children, transparent }: LayoutProps) => {
  return (
    <div className={`layout`}>
      {transparent ? <div className="layout-t">{children}</div> : children}
    </div>
  );
};
