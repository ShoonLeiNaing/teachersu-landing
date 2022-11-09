import dynamic from "next/dynamic";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const Hero = dynamic(import("../../components/Hero"), { ssr: false });
const AboutUs = dynamic(import("../../components/AboutUs"), { ssr: false });

const AboutUsPage = () => {
  return (
    <Layout>
      <Hero title="About Us" image="/images/aboutus.png" />
      <AboutUs />
    </Layout>
  );
};

export default AboutUsPage;
