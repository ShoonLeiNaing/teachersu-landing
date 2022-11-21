import { Box, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { colors } from "../../data/colors";
import styles from "./animatedHero.module.css";

const textData = [
  "Start your education journey at Myanmar’s leading international school",
  "Myanmar’s leading international school Start your education journey at",
  "Start your education journey at Myanmar’s leading international school",
  "Myanmar’s leading international school Start your education journey at",
];

const imagesData = [
  "/images/animatedHero.png",
  "/images/animatedHero1.png",
  "/images/animatedHero.png",
  "/images/animatedHero1.png",
];

const AnimatedHero = () => {
  const [index, setIndex] = useState<number>(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 290);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === textData.length) {
        next = 0;
      }
      setIndex(next);
      setProgress(0);
    }, 3 * 1000);
    console.log(index);
  }, [index, setIndex]);
  return (
    <Box
      display="flex"
      alignItems="center"
      maxWidth="1250px"
      margin="auto"
      py={{ lg: 10, md: 6, sm: 4, xs: 4 }}
      height={{ lg: "fit-content" }}
      px={{ lg: 4, md: 4, sm: 4, xs: 2 }}
    >
      <Box flex="0.5" position="relative">
        <Box
          //   marginTop={{ lg: "-16%", md: "-20%" }}
          className={styles.heroText}
          position="absolute"
          borderLeft={`4px solid ${colors.blue}`}
          pl={{ lg: 4, md: 3, xs: 2 }}
        >
          <Typography
            // fontSize={{ lg: "36px", md: "32px", sm: "24px" }}
            fontWeight={600}
            color={colors.blue}
            mb={{ sm: 2, xs: 1 }}
            className={styles.heroSentence}

            // width="100%"
          >
            {textData[index]}
          </Typography>
          <BsFillArrowRightCircleFill
            className={styles.heroIcon}
            color={colors.blue}
          />
        </Box>
      </Box>
      <Box flex="0.5">
        <img src={imagesData[index]} className={styles.hero_image} alt="hero" />
        <Box display="flex" justifyContent="center" mt={2} color={colors.blue}>
          <Typography
            px={{ md: 2, sm: 2, xs: 1 }}
            fontSize={{ md: "18px", sm: "14px", xs: "12px" }}
            fontWeight={500}
            sx={{ opacity: index === 0 ? 1 : 0.7 }}
          >
            01
          </Typography>

          {index === 0 && (
            <Box
              flex={{ lg: 0.25, sm: 0.4, xs: 0.7 }}
              marginY="auto"
              px={{ lg: 2, xs: 1 }}
            >
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          )}
          <Typography
            px={{ md: 2, sm: 2, xs: 1 }}
            fontSize={{ md: "18px", sm: "14px", xs: "12px" }}
            fontWeight={500}
            sx={{ opacity: index === 1 ? 1 : 0.7 }}
          >
            02
          </Typography>
          {index === 1 && (
            <Box
              flex={{ lg: 0.25, sm: 0.4, xs: 0.7 }}
              marginY="auto"
              px={{ lg: 2, xs: 1 }}
            >
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          )}
          <Typography
            px={{ md: 2, sm: 2, xs: 1 }}
            fontSize={{ md: "18px", sm: "14px", xs: "12px" }}
            fontWeight={500}
            sx={{ opacity: index === 2 ? 1 : 0.7 }}
          >
            03
          </Typography>
          {index === 2 && (
            <Box
              flex={{ lg: 0.25, sm: 0.4, xs: 0.7 }}
              marginY="auto"
              px={{ lg: 2, xs: 1 }}
            >
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          )}
          <Typography
            px={{ md: 2, sm: 2, xs: 1 }}
            fontSize={{ md: "18px", sm: "14px", xs: "12px" }}
            fontWeight={500}
            sx={{ opacity: index === 3 ? 1 : 0.7 }}
          >
            04
          </Typography>
          {index === 3 && (
            <Box
              flex={{ lg: 0.25, sm: 0.4, xs: 0.7 }}
              marginY="auto"
              px={{ lg: 2, xs: 1 }}
            >
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AnimatedHero;
