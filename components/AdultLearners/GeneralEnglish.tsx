import { Box, Typography } from "@mui/material";
import styles from "./adultlearner.module.css";
import Image from "next/image";

const data = {
  image: "/images/generaleng.svg",
  title: "General English Courses",
  classes: ["Pre-intermediate", "Intermediate", "Advanced"],
};

const GeneralEnglish = () => {
  return (
    <Box
      boxShadow="0px 2px 10px rgba(0, 0, 0, 0.07)"
      borderRadius="10px"
      py={{ lg: 3, sm: 2, xs: 2 }}
      px={{ lg: 2, sm: 1, xs: 1 }}
      width={{ lg: "450px", md: "400px", sm: "360px", xs: "310px" }}
      minWidth={{ lg: "450px", md: "400px", sm: "360px", xs: "310px" }}
      height={{ lg: "220px", md: "200px", sm: "175px" }}
      display="flex"
      // flexDirection={{ md: "row", xs: "column" }}
    >
      <Box
        position="relative"
        width={{ md: "150px", sm: "120px", xs: "100px" }}
        height="100%"
      >
        <Image src={data.image} fill alt="general english" />
      </Box>
      <Box px={{ lg: 2, xs: 1 }}>
        <Typography
          pb={{ md: 2, sm: "10px", xs: "8px" }}
          borderBottom="2px solid  #E0E0E0"
          fontSize={{ lg: "18px", sm: "16px", xs: "14px" }}
          fontWeight={500}
        >
          {data.title}
        </Typography>
        <Box>
          <ul className={styles.list}>
            {data.classes?.map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                {item}
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralEnglish;
