import { Box, Typography } from "@mui/material";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { colors } from "../../data/colors";
import { homepageHeroText, homepageHeroTextSmall } from "../../data/data";
import styles from "./homepageHero.module.css";

const AnimatedText = () => {
  //   const textArray = ["Line Up", "Line Up 1", "Line Up 2"];

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === homepageHeroText.length) {
        next = 0;
      }
      setIndex(next);
    }, 4.1 * 1000);
  }, [index, setIndex]);

  return (
    <Box
      display="flex"
      alignItems="center"
      height="100%"
      justifyContent="center"
      //   width="100%"
      py={{ md: 4, xs: 0 }}
      pb={{ md: 0, sm: 2, xs: 2 }}
      px={{ sm: 0, xs: 1 }}
    >
      <Box mr={{ lg: 4, md: 4, sm: 2, xs: 1 }}>
        <img src="/images/hero.gif" className={styles.gif} />
      </Box>
      <Typography
        color={colors.blue}
        fontWeight={{ sm: 700, xs: 600 }}
        fontSize={{ lg: "50px", md: "50px", sm: "36px", xs: "24px" }}
        mr={3}
      >
        We
      </Typography>
      <Box position="relative">
        <div className={styles.line}>
          <Typography
            fontSize={{ lg: "30px", md: "30px", sm: "20px", xs: "16px" }}
            lineHeight={{ lg: "40px" }}
            width={{ md: "550px", sm: "350px", xs: "fit-content" }}
            display={{ sm: "block", xs: "none" }}
            color={colors.red}
            fontWeight={{ sm: 600, xs: 500 }}
            className={styles.lineUp}
            height={{ md: "100px" }}
          >
            {parse(homepageHeroText[index])}
          </Typography>

          <Typography
            fontSize={{ xs: "16px" }}
            maxWidth={{ xs: "250px" }}
            display={{ sm: "none", xs: "block" }}
            color={colors.red}
            fontWeight={{ xs: 500 }}
            className={styles.lineUp}
            maxHeight={{ xs: "80px" }}
          >
            {homepageHeroTextSmall[index]}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default AnimatedText;
