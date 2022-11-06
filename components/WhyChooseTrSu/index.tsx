import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { whyTrSu } from "../../data/data";
import Title from "../Title";

const WhyChooseTrSu = () => {
  return (
    <Box
      maxWidth="1200px"
      margin="auto"
      py={{ lg: "80px", md: "60px", xs: "40px" }}
      px={{ lg: "0", md: "20px", sm: "100px", xs: "20px" }}
    >
      <Title title="Why Choose Teacher Su ?" />
      <Grid container pt={{ lg: "40px", md: "30px", xs: "20px" }} rowGap={4}>
        {whyTrSu?.map((item) => (
          <Grid
            key={item.title}
            item
            lg={4}
            md={4}
            px={{ lg: 8, md: 4 }}
            margin="auto"
          >
            <Box
              position="relative"
              height={{ lg: "250px", md: "150px", sm: "200px", xs: "180px" }}
              width={{ lg: "250px", md: "150px", sm: "200px", xs: "180px" }}
              margin="auto"
            >
              <Image src={item.image} alt="tech" fill />
            </Box>
            <Typography
              textAlign="center"
              fontWeight={500}
              fontSize={{ md: "18px", xs: "16px" }}
              mb={2}
            >
              {item.title}
            </Typography>
            <Typography
              textAlign="center"
              fontSize={{ md: "16px", xs: "14px" }}
            >
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseTrSu;
