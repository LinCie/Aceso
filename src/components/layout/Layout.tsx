import { Outlet, useLocation, Link } from "react-router-dom";
import aceso from "@/assets/images/aceso.png";

function Layout() {
  const location = useLocation();

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
              <Link
                className="font-normal text-foreground hover:text-primary/70 data-[active=true]:text-primary"
                to="/"
                data-active={location.pathname === "/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-foreground hover:text-primary/70 data-[active=true]:text-primary"
                to="products"
                data-active={location.pathname === "/products"}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-foreground hover:text-primary/70 data-[active=true]:text-primary"
                to="about"
                data-active={location.pathname === "/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-foreground hover:text-primary/70 data-[active=true]:text-primary"
                to="contacts"
                data-active={location.pathname === "/contacts"}
              >
                Contacts
              </Link>
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
