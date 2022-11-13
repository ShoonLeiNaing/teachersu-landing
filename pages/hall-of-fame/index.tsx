import dynamic from "next/dynamic";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const Hero = dynamic(import("../../components/Hero"), { ssr: false });

const HallOfFame = () => {
  return (
    <Layout>
      <Hero title="Hall of fame" image="/images/halloffame.png" />
    </Layout>
  );
};

export default HallOfFame;
