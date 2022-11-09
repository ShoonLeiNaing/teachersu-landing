import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { colors } from "../../data/colors";
import { FiMenu } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
// import SearchInput from "../SearchInput";
// import styles from "./navbar.module.css";
import { navbarData } from "../../data/data";
import Contact from "./Contact";
import Link from "next/link";

const Navbar: FunctionComponent = () => {
  // const [language, setLanguage] = useState<string>(router.locale || "en");
  const [open, setOpen] = useState<boolean>(false);

  // const changeLanguageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setLanguage(e.target.value);
  //   router.push(router.pathname, router.pathname, {
  //     locale: e.target.value,
  //   });
  // };
  return (
    <Box
      position="sticky"
      boxShadow="0 2px 2px 0 rgba(0,0,0,.1)"
      bgcolor="white"
      overflow="hidden"
      top="0"
      zIndex="1000"
      height={open ? "100vh" : { md: "70px", xs: "50px" }}
      display="flex"
      flexDirection="column"
      sx={{ transition: "height 0.2s linear" }}
      // justifyContent="center"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={{ lg: "3%", md: "30px", sm: "20px", xs: "10px" }}
        height={{ md: "70px", xs: "50px" }}
      >
        {open ? (
          <Box
            display="flex"
            alignItems="center"
            color={colors.blue}
            sx={{ cursor: "pointer" }}
            fontSize={{ md: "18px", sm: "16px", xs: "14px" }}
            gap={1}
            onClick={() => setOpen(!open)}
          >
            <MdOutlineClose fontSize="20px" />
            Close
          </Box>
        ) : (
          <Box
            display="flex"
            alignItems="center"
            color={colors.blue}
            sx={{ cursor: "pointer" }}
            fontSize={{ md: "18px", sm: "16px", xs: "14px" }}
            gap={1}
            onClick={() => setOpen(!open)}
          >
            <FiMenu fontSize="20px" />
            Menu
          </Box>
        )}
        <Box
          height={{ md: "80px", sm: "60px", xs: "50px" }}
          // flex={1}
          position="absolute"
          left="50%"
          sx={{ transform: "translate(-50%,0%)" }}
        >
          <Box width={{ md: "240px", sm: "180px", xs: "150px" }}>
            <Image alt="logo" src="/images/logo-lg.svg" fill />
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={{ md: 4, sm: 2, xs: 2 }}
          // sx={{ float: "right" }}
          // top={0}
        >
          <Box display="flex" alignItems="center" gap={1} color={colors.blue}>
            <FaFacebookMessenger fontSize="22px" />
            <Typography
              fontSize={{ md: "16px", xs: "14px" }}
              display={{ sm: "block", xs: "none" }}
            >
              Chat
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1} color={colors.blue}>
            <IoCall fontSize="22px" />
            <Typography
              fontSize={{ md: "16px", xs: "14px" }}
              display={{ sm: "block", xs: "none" }}
            >
              Call
            </Typography>
          </Box>
          {/* <Box display={{ md: "block", xs: "none" }}>
            <SearchInput />
          </Box>
          <Box>
            <select
              className={styles.select}
              value={language}
              onChange={changeLanguageHandler}
            >
              <option value="en">Eng</option>
              <option value="my">မြန်မာ</option>
            </select>
          </Box> */}
        </Box>
      </Box>
      {open && (
        <Box
          color={colors.blue}
          overflow="hidden"
          display="flex"
          flexDirection="column"
          flex={1}
        >
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            {navbarData?.map((item) => (
              <Link href={item.link} key={item.title}>
                <Typography
                  sx={{ ":hover": { color: colors.red } }}
                  fontSize={{ md: "18px", xs: "16px" }}
                  className="pointer"
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </Box>
          <Contact />
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
