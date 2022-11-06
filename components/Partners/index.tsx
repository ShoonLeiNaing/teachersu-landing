import { Box } from "@mui/material";
import Image from "next/image";
import { partnership } from "../../data/data";
import Title from "../Title";
import styles from "./partners.module.css";

const Partners = () => {
  return (
    <Box
      maxWidth="1200px"
      margin="auto"
      pb={{ lg: "80px", md: "60px", xs: "40px" }}
    >
      <Title title="Our Partnerships" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={{ lg: 4, md: 2, sm: 2, xs: 2 }}
        pt={{ lg: "40px", md: "30px", xs: "20px" }}
        flexWrap="wrap"
      >
        {partnership?.map((item) => (
          <Box
            key={item.image}
            position="relative"
            width={{ md: "170px", sm: "140px", xs: "90px" }}
            height={{ md: "70px", sm: "60px", xs: "40px" }}
          >
            <Image
              src={item.image}
              fill
              alt="partner"
              className={styles.image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
