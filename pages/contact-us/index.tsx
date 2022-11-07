import dynamic from "next/dynamic";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const Hero = dynamic(import("../../components/Hero"), { ssr: false });
const Contact = dynamic(import("../../components/Contact"), { ssr: false });

const ContactUs = () => {
  return (
    <Layout>
      <Hero title="Contact Us" image="/images/background.png" />
      <Contact />
    </Layout>
  );
};

export default ContactUs;
