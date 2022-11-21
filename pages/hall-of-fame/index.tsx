import { Box } from "@mui/system";
import dynamic from "next/dynamic";

const IELTSachievers = dynamic(import("../../components/IELTSachievers"), {
  ssr: false,
});
const HighAchiever = dynamic(import("../../components/HighAchiever"), {
  ssr: false,
});
const DuolingoAchievers = dynamic(
  import("../../components/DuolingoAchievers"),
  {
    ssr: false,
  }
);
const AchievementsInNumbers = dynamic(
  import("../../components/AchievementsInNumbers"),
  {
    ssr: false,
  }
);
const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const Hero = dynamic(import("../../components/Hero"), { ssr: false });

const HallOfFame = () => {
  return (
    <Layout>
      <Hero title="Hall of fame" image="/images/halloffame.png" />
      <Box maxWidth="1100px" margin="auto">
        <HighAchiever />
        <AchievementsInNumbers />
        <IELTSachievers />
        <DuolingoAchievers />
      </Box>
    </Layout>
  );
};

export default HallOfFame;
