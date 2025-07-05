// import Footer from "@/components/shared/footer";
// import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import Tabbar from "@/components/shared/Tabbar";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main
      className={`h-svh flex flex-col sm:flex-row overflow-y-hidden bg-background gap-2 2xl:gap-2.5 3xl:gap-3  p-2 2xl:p-2.5 3xl:p-3 `}
    >
      <Sidebar />
      <main className="flex relative flex-col  items-start  w-full">
        <section className="  h-full pb-[150px]  overflow-y-auto  max-h-svh md:pb-0 w-full relative ">
          {children}
        </section>
        <div className="fixed bottom-0 w-full md:hidden  z-50">
          <div className="w-full ">
            <Tabbar />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Layout;
