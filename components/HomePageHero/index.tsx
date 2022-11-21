import { Box } from "@mui/material";
import AnimatedText from "./AnimatedText";
// import styles from "./homepageHero.module.css";

const HomePageHero = () => {
  return (
    <Box width="100vw">
      {/* <Box>
        <img src="/images/homepageHero.svg" className={styles.hero_image} />
      </Box> */}
      <Box maxWidth="1100px" margin="auto">
        <AnimatedText />
      </Box>
    </Box>
  );
};

export default HomePageHero;
