import { Outlet, useLocation, Link } from "react-router-dom";
import aceso from "@/assets/images/aceso.png";

function Layout() {
  const location = useLocation();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] bg-background/70 px-3 py-2 text-foreground backdrop-blur md:px-2 md:py-1">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center px-4">
          <div>
            <div className="flex select-none items-center justify-center gap-1">
              <img src={aceso} className="size-10" />
              <div className="font-semibold text-primary">ACESO</div>
            </div>
          </div>
          <ul className="hidden min-w-0 flex-1 items-center justify-end gap-4 md:flex">
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
