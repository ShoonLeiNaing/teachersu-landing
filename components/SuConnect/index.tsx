import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const SuConnect = () => {
  return (
    <Box
      sx={{ backgroundColor: "#F6F9FE" }}
      py={{ lg: "80px", md: "60px", xs: "40px" }}
      px={{ lg: "0", md: "50px", sm: "30px", xs: "20px" }}
    >
      <Box
        maxWidth="1150px"
        margin="auto"
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        gap={{ md: 6, xs: 2 }}
      >
        <Box
          sx={{
            height: { lg: "300px", md: "220px", sm: "250px", xs: "200px" },
            width: { lg: "300px", md: "220px", sm: "250px", xs: "200px" },
          }}
          position="relative"
          margin="auto"
        >
          <Image src="/images/suconnect.svg" fill alt="suconnect" />
        </Box>
        <Box flex={1}>
          <Box
            sx={{
              height: { lg: "100px", md: "80px", xs: "70px" },
              width: { lg: "200px", md: "160px", xs: "140px" },
            }}
            position="relative"
          >
            <Image alt="suconnect logo" src="/images/suconnect-logo.svg" fill />
          </Box>
          <Typography fontSize={{ md: "16px", xs: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Typography>
          <Box mt={{ md: 4, xs: 2 }}>
            <img alt="btn" src="/images/learnmoreBtn.svg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SuConnect;
