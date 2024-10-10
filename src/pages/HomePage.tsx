import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import healthyicon from "../assets/images/healthy.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="flex h-auto min-h-screen items-center justify-center bg-white px-4 md:px-8">
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
              <Link to="/products">
                <Button size="lg">
                  <div className="flex items-center justify-center gap-1">
                    <ShoppingBagIcon className="size-6 pb-1" />
                    Lihat Produk
                  </div>
                </Button>
              </Link>
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

function HomePage() {
  return (
    <>
      <HeroSection />
    </>
  );
}

export default HomePage;
