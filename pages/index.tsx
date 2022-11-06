import dynamic from "next/dynamic";
import SuConnect from "../components/SuConnect";
import Testimonial from "../components/Testimonial";
import WhyChooseTrSu from "../components/WhyChooseTrSu";

const Layout = dynamic(import("../components/Layout"), { ssr: false });
const Numbers = dynamic(import("../components/Numbers"), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <Numbers />
      <SuConnect />
      <WhyChooseTrSu />
      <Testimonial />
    </Layout>
  );
}
