import { Box } from "@mui/material";
import styles from "./adultlearner.module.css";

const Item = ({ data }: any) => {
  console.log({ data });
  return (
    <Box
      height={{ lg: "220px", md: "200px", sm: "175px", xs: "160px" }}
      width={{ lg: "200px", md: "180px", sm: "150px", xs: "140px" }}
      minWidth={{ lg: "200px", md: "180px", sm: "150px", xs: "140px" }}
      boxShadow="0px 2px 10px rgba(0, 0, 0, 0.07)"
      borderRadius="10px"
      py={{ md: 2, sm: 2, xs: "10px" }}
      px={{ md: 2, sm: 2, xs: "10px" }}
    >
      <img alt={data.title} src={data.image} className={styles.image} />
      <Box
        borderTop="2px solid  #E0E0E0"
        py={{ md: "10px", sm: "8px", xs: "6px" }}
        fontSize={{ lg: "15px", md: "14px", xs: "13px" }}
      >
        {data.title}
      </Box>
    </Box>
  );
};

export default Item;
