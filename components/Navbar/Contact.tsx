import { Box, Grid, Typography } from "@mui/material";
import { IoLocationSharp, IoMailUnread } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Box>
      <Box
        borderBottom="1px solid #E0E0E0"
        px={{ lg: "3%", md: "50px", sm: "30px", xs: "20px" }}
        py={{ md: "30px", xs: "30px" }}
      >
        <Grid container rowGap={3}>
          <Grid item lg={6} sm={12} xs={12}>
            <Typography fontWeight={600} className="pointer">
              Where we are
            </Typography>
            <Box
              pt={{ sm: 2, xs: 1 }}
              display="flex"
              gap={1}
              className="pointer"
            >
              <IoLocationSharp fontSize="24px" />
              <Typography fontSize={{ md: "16px", xs: "14px" }}>
                129, Myo Ma Market, Zabuthiri Township, Naypyidaw
                <br /> Myanmar. 15011
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} sm={8} xs={12}>
            <Typography fontWeight={600} className="pointer">
              Contact Us
            </Typography>
            <Box
              className="pointer"
              pt={{ sm: 2, xs: 1 }}
              gap={3}
              display="flex"
            >
              <Box display="flex" gap={1} alignItems="center">
                <BsFillTelephoneFill fontSize="20px" />
                <Typography fontSize={{ md: "16px", xs: "14px" }}>
                  (270) 555-0117
                </Typography>
              </Box>
              <Box display="flex" gap={1} alignItems="center">
                <IoMailUnread fontSize="24px" />
                <Typography fontSize={{ md: "16px", xs: "14px" }}>
                  info@example.com
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={2} sm={4} xs={12}>
            <Typography fontWeight={600}> Follow Us</Typography>
            <Box
              pt={{ sm: 2, xs: 1 }}
              display="flex"
              gap={2}
              fontSize="20px"
              className="pointer"
            >
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        px={{ lg: "3%", md: "50px", sm: "30px", xs: "20px" }}
        py={{ md: 3, xs: 2 }}
      >
        <Typography fontSize={{ md: "14px", xs: "12px" }} textAlign="center">
          ©2022, All right reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
