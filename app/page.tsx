import CarouselTextBaner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/featured-products";
import BannerDiscount from "@/components/ui/banner-discount";
import BannerProducts from "@/components/ui/banner-products";
import ChooseCategory from "@/components/ui/choose-category";

export default function Home() {
  return (
   <main>
    <CarouselTextBaner/>
    <FeaturedProducts/>
    <BannerDiscount />
    <ChooseCategory />
    <BannerProducts />
   </main>
  );
}
