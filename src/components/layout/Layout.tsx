import { Outlet } from "react-router-dom";
import aceso from "@/assets/images/aceso.png";
import react from "@/assets/images/react.svg";
import vite from "@/assets/images/vite.svg";
import tailwind from "@/assets/images/tailwind.svg";
import github from "@/assets/images/github.svg";

function Layout() {
  const currentYear = new Date().getFullYear();

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
      <footer className="bg-background py-8 text-foreground">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-4 px-4">
          <div>
            <div className="flex select-none items-center">
              <div className="mr-2">
                <img
                  alt="Aceso Logo"
                  loading="lazy"
                  width="30"
                  height="30"
                  decoding="async"
                  src={aceso}
                  className="size-10"
                />
              </div>
              <div className="text-xl font-semibold">ACESO</div>
            </div>
          </div>
          <p className="mx-auto max-w-2xl text-center text-base text-muted-foreground">
            Tubuh Lebih Kuat, Hidup Lebih Hebat
          </p>
          {/* <ul className="hidden min-w-0 flex-1 items-center justify-center gap-8 md:flex">
            <li>
              <a
                className="text-foreground hover:text-primary"
                href="#hero-section"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-foreground hover:text-primary"
                href="#product-section"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="text-foreground hover:text-primary"
                href="#about-section"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-foreground hover:text-primary"
                href="#contact-section"
              >
                Contacts
              </a>
            </li>
          </ul> */}
          <div className="flex flex-col items-center justify-center gap-1">
            <p>Made with:</p>
            <ul className="flex min-w-0 flex-1 items-center justify-center gap-2">
              <li>
                <a href="https://react.dev/" target="_blank">
                  <img src={react} alt="React" className="size-6" />
                </a>
              </li>
              <li>
                <a href="https://vite.dev/" target="_blank">
                  <img src={vite} alt="Vite" className="size-6" />
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank">
                  <img src={tailwind} alt="Tailwind" className="size-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © {currentYear} Aceso. All Rights Reserved.
          </div>
          <div>
            <a href="https://github.com/LinCie/Aceso" target="_blank">
              <img src={github} alt="Github" className="size-6" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
