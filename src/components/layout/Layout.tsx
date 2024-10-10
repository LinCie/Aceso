import { Outlet } from "react-router-dom";
import aceso from "@/assets/images/aceso.png";

function Layout() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] bg-background/70 text-foreground backdrop-blur">
        <div className="mx-auto flex max-w-screen-2xl items-center px-2 py-1 md:px-4 md:py-2">
          <div>
            <div className="flex select-none items-center justify-center gap-1">
              <img src={aceso} className="size-10" />
              <div className="font-medium text-primary">ACESO</div>
            </div>
          </div>
          <ul className="hidden min-w-0 flex-1 items-center justify-end gap-4 text-sm md:flex">
            <li>
              <a
                className="font-normal text-foreground hover:text-primary/70"
                href="#hero-section"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-normal text-foreground hover:text-primary/70"
                href="#product-section"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="font-normal text-foreground hover:text-primary/70"
                href="#about-section"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-normal text-foreground hover:text-primary/70"
                href="#contact-section"
              >
                Contacts
              </a>
            </li>
          </ul>
          <div className="grow md:hidden"></div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;
