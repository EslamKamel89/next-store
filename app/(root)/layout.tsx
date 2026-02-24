import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
