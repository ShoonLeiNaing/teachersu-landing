import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Title from "../Title";

const Numbers = () => {
  return (
    <Box
      py={{ lg: "80px", md: "60px", xs: "40px" }}
      maxWidth="1200px"
      margin="auto"
    >
      <Title title="Teacher Su in Numbers" />
      <Grid container pt={{ lg: "40px", md: "30px", xs: "20px" }}>
        <Grid item lg={4} md={4} sm={4} xs={4} px={{ sm: 2, xs: 1 }}>
          <Box
            height={{ lg: "200px", md: "150px", sm: "100px", xs: "70px" }}
            position="relative"
          >
            <Image src="/images/students.svg" fill alt="students" />
          </Box>
          <Typography
            my={1}
            fontWeight={600}
            fontSize={{ lg: "30px", md: "28px", sm: "24px", xs: "18px" }}
            textAlign="center"
          >
            5200 +
          </Typography>
          <Typography textAlign="center" fontSize={{ sm: "16px", xs: "14px" }}>
            Students we have taught
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4} px={{ sm: 2, xs: 1 }}>
          <Box
            height={{ lg: "200px", md: "150px", sm: "100px", xs: "70px" }}
            position="relative"
          >
            <Image src="/images/classes.svg" fill alt="students" />
          </Box>
          <Typography
            my={1}
            fontWeight={600}
            fontSize={{ lg: "30px", md: "28px", sm: "24px", xs: "18px" }}
            textAlign="center"
          >
            170 +
          </Typography>
          <Typography textAlign="center" fontSize={{ sm: "16px", xs: "14px" }}>
            Classes we have opened
          </Typography>
        </Grid>{" "}
        <Grid item lg={4} md={4} sm={4} xs={4} px={{ sm: 2, xs: 1 }}>
          <Box
            height={{ lg: "200px", md: "150px", sm: "100px", xs: "70px" }}
            position="relative"
          >
            <Image src="/images/stuffs.svg" fill alt="students" />
          </Box>
          <Typography
            my={1}
            fontWeight={600}
            fontSize={{ lg: "30px", md: "28px", sm: "24px", xs: "18px" }}
            textAlign="center"
          >
            70 +
          </Typography>
          <Typography textAlign="center" fontSize={{ sm: "16px", xs: "14px" }}>
            Staffs working together
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Numbers;
