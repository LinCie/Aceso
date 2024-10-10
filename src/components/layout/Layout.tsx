import { Outlet, useLocation, Link } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] bg-background/70 px-3 py-2 text-foreground backdrop-blur md:px-2 md:py-1">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center h-16">
          <div>
            <div className="select-none flex items-center">
              <div className="mr-2"></div>
              <div className="text-xl">Aceso</div>
            </div>
          </div>
          <ul className="hidden md:flex flex-1 min-w-0 justify-end items-center gap-4">
            <li>
              <Link
                className="text-foreground font-normal data-[active=true]:text-primary hover:text-primary/70"
                to="/"
                data-active={location.pathname === "/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-foreground font-normal data-[active=true]:text-primary hover:text-primary/70"
                to="products"
                data-active={location.pathname === "/products"}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                className="text-foreground font-normal data-[active=true]:text-primary hover:text-primary/70"
                to="about"
                data-active={location.pathname === "/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-foreground font-normal data-[active=true]:text-primary hover:text-primary/70"
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
