import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { achieverNumbers } from "../../data/data";
import Title from "../Title";

const AchievementsInNumbers = () => {
  return (
    <Box>
      <Title title="Achievements In Numbers" />
      <Box
        px={{ sm: 0, xs: 4 }}
        py={{ lg: "40px", md: "30px", xs: "20px" }}
        display="flex"
        rowGap={4}
        flexWrap={{ sm: "nowrap", xs: "wrap" }}
        justifyContent="center"
      >
        {achieverNumbers?.map((item) => (
          <Box
            key={item.title}
            width={{ lg: "300px", md: "250px", sm: "200px", xs: "50%" }}
            margin="auto"
          >
            <Box
              marginX="auto"
              position="relative"
              width={{ lg: "100px", md: "80px", sm: "60px", xs: "70px" }}
              height={{ lg: "100px", md: "80px", sm: "60px", xs: "70px" }}
            >
              <Image src={item.image} fill alt={item.image} />
            </Box>
            <Typography
              my={{ md: 1, xs: 0 }}
              mt={{ md: 2, sm: "20px", xs: "10px" }}
              textAlign="center"
              fontSize={{ lg: "28px", md: "24px", sm: "18px" }}
              fontWeight={600}
            >
              {item.number} +
            </Typography>
            <Typography
              //   width={{ sm: "100%", xs: "100%" }}
              fontSize={{ md: "16px", xs: "14px" }}
              textAlign="center"
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AchievementsInNumbers;
