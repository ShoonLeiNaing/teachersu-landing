import { Box, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { IoLocationSharp, IoMailUnread } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { colors } from "../../data/colors";
import styles from "./footer.module.css";
import { navbarData } from "../../data/data";
import Link from "next/link";
// import Image from "next/image";

const Footer: FunctionComponent = () => {
  return (
    <Box bgcolor={colors.blue} color="white">
      {/* <Box height={{ md: "80px" }} position="relative" width="100vw">
        <Image alt="footer" src="/images/footer.svg" fill />
      </Box> */}
      <img
        alt="footer"
        src="/images/footer.svg"
        className={styles.footer_image}
      />
      <Box pt="20px" pb="30px" borderBottom="1px solid #E0E0E0">
        <Box sx={{ width: "100%", position: "relative" }}>
          <Grid
            container
            rowGap={4}
            px={{ lg: "3%", md: "50px", sm: "30px", xs: "20px" }}
            justifyContent="space-between"
          >
            <Grid item md={8} sm={12} xs={12}>
              <Box display="flex" flexDirection="column" gap={3}>
                <Box display="flex" gap={1} className="pointer">
                  <IoLocationSharp fontSize="24px" />
                  <Typography fontSize={{ md: "16px", xs: "14px" }}>
                    129, Myo Ma Market, Zabuthiri Township, Naypyidaw
                    <br /> Myanmar. 15011
                  </Typography>
                </Box>
                <Box display="flex" gap={1} alignItems="center">
                  <BsFillTelephoneFill fontSize="18px" />
                  <Typography fontSize={{ md: "16px", xs: "14px" }}>
                    (270) 555-0117
                  </Typography>
                </Box>
                <Box display="flex" gap={1} alignItems="center">
                  <IoMailUnread fontSize="22px" />
                  <Typography fontSize={{ md: "16px", xs: "14px" }}>
                    info@example.com
                  </Typography>
                </Box>
                <Box display="flex" gap={2} fontSize="20px" className="pointer">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedin />
                </Box>
              </Box>
            </Grid>
            <Grid item md={1.5} sm={6} xs={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography mb="8px" fontWeight={600}>
                  Links
                </Typography>

                {navbarData?.map((item) => (
                  <Link href={item.link} key={item.title}>
                    <Typography fontSize="14px">{item.title}</Typography>
                  </Link>
                ))}
              </Box>
            </Grid>

            <Grid item md={1.5} sm={6} xs={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography mb="8px" fontWeight={600}>
                  Follow Us
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  className="pointer"
                >
                  <FaFacebookF />
                  <Typography fontSize="14px">Facebook</Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  className="pointer"
                >
                  <FaInstagram />
                  <Typography fontSize="14px">Instagram</Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  className="pointer"
                >
                  <FaTwitter />
                  <Typography fontSize="14px">Twitter</Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  className="pointer"
                >
                  <FaLinkedin />
                  <Typography fontSize="14px">LinkedIn</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
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

export default Footer;
