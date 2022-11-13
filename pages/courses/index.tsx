import dynamic from "next/dynamic";
import AdultLearners from "../../components/AdultLearners";
import GrammerClasses from "../../components/GrammerClasses";
import InternationalSchool from "../../components/InternationalSchool";
import YoungLearners from "../../components/YoungLearners";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const Hero = dynamic(import("../../components/Hero"), { ssr: false });

const Courses = () => {
  return (
    <Layout>
      <Hero title="Courses" image="/images/halloffame.png" />
      <InternationalSchool />
      <YoungLearners />
      <GrammerClasses />
      <AdultLearners />
    </Layout>
  );
};

export default Courses;
