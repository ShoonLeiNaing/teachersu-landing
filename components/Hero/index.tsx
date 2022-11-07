import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";

interface IProps {
  title: string;
  image: string;
}

const Hero: FunctionComponent<IProps> = ({ title, image }) => {
  return (
    <Box height={{ lg: "70vh", md: "60vh", sm: "40vh", xs: "30vh" }}>
      <Box
        height={{ lg: "70vh", md: "60vh", sm: "40vh", xs: "30vh" }}
        position="relative"
        // sx={{
        //   backgroundImage:
        //     "linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)) url('/images/background.png')",
        // }}
      >
        <Image src={image} fill alt={title} />
      </Box>
      <Box
        position="absolute"
        height={{ lg: "70vh", md: "60vh", sm: "40vh", xs: "30vh" }}
        width="100%"
        color="white"
        top={0}
        marginTop={{ md: "70px", xs: "50px" }}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <Box
          height="100%"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            fontSize={{ lg: "46px", md: "40px", sm: "32px", xs: "24px" }}
            fontWeight={600}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
