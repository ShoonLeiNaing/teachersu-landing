import dynamic from "next/dynamic";
import SuConnect from "../components/SuConnect";

const Layout = dynamic(import("../components/Layout"), { ssr: false });
const Numbers = dynamic(import("../components/Numbers"), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <Numbers />
      <SuConnect />
    </Layout>
  );
}
