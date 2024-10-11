import { Button } from "@/components/ui/button";
import {
  ShoppingBagIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";
import healthyicon from "../assets/images/healthy.png";

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="flex h-auto min-h-screen items-center justify-center bg-white px-4 md:px-8"
    >
      <div className="relative w-full max-w-screen-xl before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-40 before:w-full before:max-w-md before:-translate-x-1/4 before:translate-y-1/2 before:bg-gradient-to-br before:from-primary/50 before:to-secondary/50 before:blur-[100px] after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-20 after:w-full after:max-w-md after:translate-y-1/2 after:bg-gradient-to-br after:from-primary/30 after:to-secondary/30 after:blur-[100px] md:after:translate-x-1/2">
        <div className="relative z-10 flex w-full flex-col items-center gap-8 md:flex-row">
          {/* Left content (Text) */}
          <div className="flex min-h-[25vh] flex-1 flex-col items-center justify-end text-center md:items-start md:justify-center md:text-left">
            <h1 className="mb-4 bg-gradient-to-r from-primary/80 to-primary/65 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
              Tubuh Lebih Kuat, Hidup Lebih Hebat
            </h1>
            <p className="mb-8 w-full text-base leading-7 text-zinc-700 sm:text-lg md:w-5/6 md:text-xl">
              Kami menyediakan minuman kesehatan terbaik dengan kualitas tinggi,
              guna meningkatkan kualitas hidup anda
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a href="#product-section">
                <Button size="lg">
                  <div className="flex items-center justify-center gap-1">
                    <ShoppingBagIcon className="size-6 pb-1" />
                    Lihat Produk
                  </div>
                </Button>
              </a>
            </div>
          </div>

          {/* Right content (Image) */}
          <div className="flex w-full flex-1 flex-col items-center justify-center gap-2">
            <img src={healthyicon} className="size-52 md:size-96" />
            <a
              href="https://www.flaticon.com/free-icons/vegan"
              title="vegan icons"
              className="text-sm text-primary/85"
            >
              Vegan icons created by Smashicons - Flaticon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        <div className="mb-10 flex flex-col items-center justify-center gap-y-6 max-md:mx-auto max-md:max-w-lg lg:mb-16 lg:flex-row lg:justify-between lg:gap-y-0">
          <div className="relative w-full text-center lg:w-2/4 lg:text-left">
            <h2 className="mx-auto max-w-max text-4xl font-bold leading-[3.25rem] text-primary lg:mx-0 lg:mb-6 lg:max-w-md">
              Minuman kami memiliki banyak manfaat!
            </h2>
          </div>
          <div className="relative w-full text-center lg:w-2/4 lg:text-left">
            <p className="mb-5 text-lg font-normal text-foreground">
              Kami menyediakan banyak produk minuman untuk menjaga kesehatan
              tubuh anda
            </p>
            <a
              href="#product-section"
              className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-primary hover:text-primary/70 lg:justify-start"
            >
              Lihat Produk
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-8 lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          <div className="group relative w-full rounded-2xl bg-muted p-4 transition-all duration-500 hover:bg-primary max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-background">
              <GlobeAsiaAustraliaIcon className="size-8" />
            </div>
            <h4 className="mb-3 text-xl font-semibold capitalize text-primary transition-all duration-500 group-hover:text-white">
              Bahan berkualitas
            </h4>
            <p className="text-sm font-normal leading-5 text-foreground transition-all duration-500 group-hover:text-white">
              Minuman kami terbuat dari bahan bahan terbaik untuk menjaga
              kualitas produk anda
            </p>
          </div>

          <div className="group relative w-full rounded-2xl bg-muted p-4 transition-all duration-500 hover:bg-primary max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-background">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h4 className="mb-3 text-xl font-semibold capitalize text-primary transition-all duration-500 group-hover:text-white">
              Lorem Ipsum
            </h4>
            <p className="text-sm font-normal leading-5 text-foreground transition-all duration-500 group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              id adipisci doloribus iure quam obcaecati, libero eveniet
            </p>
          </div>

          <div className="group relative w-full rounded-2xl bg-muted p-4 transition-all duration-500 hover:bg-primary max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-background">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h4 className="mb-3 text-xl font-semibold capitalize text-primary transition-all duration-500 group-hover:text-white">
              Lorem Ipsum
            </h4>
            <p className="text-sm font-normal leading-5 text-foreground transition-all duration-500 group-hover:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              suscipit, saepe, incidunt unde at molestiae error iusto
            </p>
          </div>

          <div className="group relative w-full rounded-2xl bg-muted p-4 transition-all duration-500 hover:bg-primary max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-background">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h4 className="mb-3 text-xl font-semibold capitalize text-primary transition-all duration-500 group-hover:text-white">
              Lorem Ipsum
            </h4>
            <p className="text-sm font-normal leading-5 text-foreground transition-all duration-500 group-hover:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos numquam, vitae nam magni iste sunt expedita nisi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
    </>
  );
}

export default HomePage;
