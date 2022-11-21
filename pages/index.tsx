import dynamic from "next/dynamic";
import AnimatedHero from "../components/AnimatedHero";

const Layout = dynamic(import("../components/Layout"), { ssr: false });
const Numbers = dynamic(import("../components/Numbers"), { ssr: false });
const HomePageHero = dynamic(import("../components/HomePageHero"), {
  ssr: false,
});
const Partners = dynamic(import("../components/Partners"), { ssr: false });
const SuConnect = dynamic(import("../components/SuConnect"), { ssr: false });
const Testimonial = dynamic(import("../components/Testimonial"), {
  ssr: false,
});
const WhyChooseTrSu = dynamic(import("../components/WhyChooseTrSu"), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <AnimatedHero />
      <HomePageHero />
      <Numbers />
      <SuConnect />
      <WhyChooseTrSu />
      <Testimonial />
      <Partners />
    </Layout>
  );
}
