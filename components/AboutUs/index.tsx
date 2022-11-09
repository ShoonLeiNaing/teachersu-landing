import { Box, Typography } from "@mui/material";
import Title from "../Title";
import Mission from "../Mission/Mission";
import Roadmap from "../Roadmap";

const AboutUs = () => {
  return (
    <Box
      py={{ lg: "80px", md: "60px", xs: "40px" }}
      maxWidth="1200px"
      margin="auto"
      px={{ sm: "10px", xs: "20px" }}
    >
      <Title title="Overview" />
      <Typography
        fontSize={{ md: "16px", xs: "14px" }}
        textAlign="center"
        py={{ lg: "40px", md: "30px", xs: "20px" }}
        px={{ sm: "20px", xs: "0" }}
      >
        Under the leadership of our young and talented founder
        <span style={{ fontWeight: 600 }}> Su Htet Zaw</span>, the school
        quickly developed a massive online profile. As of October 2022, the
        school has over <span style={{ fontWeight: 600 }}> 170 classes</span>{" "}
        offering as many as <span style={{ fontWeight: 600 }}>30 </span>
        different courses including personal development courses and additional
        services to its students and staff members. Over
        <span style={{ fontWeight: 600 }}> 5200 </span> students are currently
        attending Teacher Su International School from all over the nation.
      </Typography>
      <Mission />
      <Roadmap />
    </Box>
  );
};

export default AboutUs;
