import { Box } from "@mui/system";
import dynamic from "next/dynamic";
import AchievementsInNumbers from "../../components/AchievementsInNumbers";
import HighAchiever from "../../components/HighAchiever";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const Hero = dynamic(import("../../components/Hero"), { ssr: false });

const HallOfFame = () => {
  return (
    <Layout>
      <Hero title="Hall of fame" image="/images/halloffame.png" />
      <Box maxWidth="1100px" margin="auto">
        <HighAchiever />
        <AchievementsInNumbers />
      </Box>
    </Layout>
  );
};

export default HallOfFame;
