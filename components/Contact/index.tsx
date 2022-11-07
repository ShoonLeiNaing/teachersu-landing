import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Title from "../Title";

const Contact = () => {
  return (
    <Box
      py={{ lg: "80px", md: "60px", xs: "40px" }}
      maxWidth="1100px"
      margin="auto"
      px={{ sm: "10px", xs: "20px" }}
    >
      <Title title="Our Campuses" />

      <Box
        display="flex"
        flexDirection={{ sm: "row", xs: "column" }}
        pt={{ lg: "40px", md: "30px", xs: "20px" }}
        justifyContent="center"
        alignItems="center"
        gap={{ lg: 8, md: 6, sm: 0 }}
      >
        <Box
          height={{ lg: "300px", md: "250px", sm: "180px", xs: "200px" }}
          width={{ lg: "300px", md: "250px", sm: "180px", xs: "200px" }}
          position="relative"
        >
          <Image src="/images/location.gif" fill alt="location" />
        </Box>
        <Box
          py={{ md: 4, sm: 2 }}
          maxWidth={{ sm: "fit-content", xs: "350px" }}
        >
          <Typography
            fontSize={{ md: "16px", xs: "14px" }}
            fontWeight={500}
            mb={1}
          >
            Yangon Campus 1
          </Typography>
          <Typography
            fontSize={{ md: "16px", xs: "14px" }}
            display={{ sm: "block", xs: "none" }}
          >
            105(B), Yadanar Myaing Street, Yadanar Myaing Housing,
            <br /> Near San Yeik Nyein Bus Stop, Hledan, Kamayut
          </Typography>
          <Typography
            fontSize={{ xs: "14px" }}
            display={{ sm: "none", xs: "block" }}
          >
            105(B), Yadanar Myaing Street, Yadanar Myaing Housing, Near San Yeik
            Nyein Bus Stop, Hledan, Kamayut
          </Typography>
          <Typography
            fontSize={{ md: "16px", xs: "14px" }}
            fontWeight={500}
            mt={3}
            mb={1}
          >
            Yangon Campus 2
          </Typography>
          <Typography
            fontSize={{ md: "16px", xs: "14px" }}
            display={{ sm: "block", xs: "none" }}
          >
            95, Yadanar Myaing Street, Yadanar Myaing Housing,
            <br /> Near San Yeik Nyein Bus Stop, Hledan, Kamayut
          </Typography>
          <Typography
            fontSize={{ xs: "14px" }}
            display={{ sm: "none", xs: "block" }}
          >
            95, Yadanar Myaing Street, Yadanar Myaing Housing, Near San Yeik
            Nyein Bus Stop, Hledan, Kamayut
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection={{ sm: "row", xs: "column-reverse" }}
        pt={{ lg: "40px", md: "30px", xs: "20px" }}
        justifyContent="center"
        alignItems="center"
        gap={{ lg: 8, md: 6, sm: 4 }}
      >
        <Box py={{ md: 8, sm: 2 }}>
          <Box mb={3} display="flex" fontSize={{ md: "16px", xs: "14px" }}>
            <Typography
              width={{ md: "180px" }}
              fontSize={{ md: "16px", xs: "14px" }}
              fontWeight={500}
            >
              Contact number 1 :
            </Typography>
            +95 940080680
          </Box>
          <Box mb={3} display="flex" fontSize={{ md: "16px", xs: "14px" }}>
            <Typography
              width={{ md: "180px" }}
              fontSize={{ md: "16px", xs: "14px" }}
              fontWeight={500}
            >
              Contact number 2 :
            </Typography>
            +95 9422490839
          </Box>
        </Box>
        <Box
          height={{ lg: "250px", md: "200px", sm: "150px", xs: "180px" }}
          width={{ lg: "250px", md: "200px", sm: "150px", xs: "180px" }}
          position="relative"
        >
          <Image src="/images/phone.gif" fill alt="telephone" />
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection={{ sm: "row", xs: "column" }}
        pt={{ lg: "40px", md: "30px", xs: "20px" }}
        justifyContent="center"
        alignItems="center"
        gap={{ lg: 8, md: 6, sm: 4 }}
      >
        <Box
          height={{ lg: "250px", md: "200px", sm: "150px", xs: "180px" }}
          width={{ lg: "250px", md: "200px", sm: "150px", xs: "180px" }}
          position="relative"
        >
          <Image src="/images/mail.gif" fill alt="mail" />
        </Box>
        <Box py={{ md: 8, sm: 2 }}>
          <Box mb={3} display="flex" fontSize={{ md: "16px", xs: "14px" }}>
            <Typography
              width={{ md: "180px" }}
              fontSize={{ md: "16px", xs: "14px" }}
              fontWeight={500}
            >
              General enquiry :
            </Typography>
            hello@teachersucenter.com
          </Box>
          <Box mb={3} display="flex" fontSize={{ md: "16px", xs: "14px" }}>
            <Typography
              width={{ md: "180px" }}
              fontSize={{ md: "16px", xs: "14px" }}
              fontWeight={500}
            >
              IT enquiry :
            </Typography>
            hello@teachersucenter.com
          </Box>
          <Box mb={3} display="flex" fontSize={{ md: "16px", xs: "14px" }}>
            <Typography
              width={{ md: "180px" }}
              fontSize={{ md: "16px", xs: "14px" }}
              fontWeight={500}
            >
              Career enquiry :
            </Typography>
            hr@teachersucenter.com
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
