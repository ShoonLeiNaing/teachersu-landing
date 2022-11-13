import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../data/colors";

const Item = ({ data }: any) => {
  return (
    <Box
      width={{ lg: "230px", md: "200px", sm: "180px", xs: "200px" }}
      minWidth={{ lg: "230px", md: "200px", sm: "180px", xs: "200px" }}
      bgcolor={colors.lightblue}
      borderRadius="15px"
      px={{ lg: 3, xs: 2 }}
      py={{ md: "20px", xs: "15px" }}
      height={{ lg: "100px", md: "90px", sm: "80px", xs: "90px" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="white"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Typography fontSize={{ md: "14px", xs: "13px" }}>
          Grammer for
        </Typography>
        <Typography fontWeight={500} fontSize={{ md: "16px", xs: "14px" }}>
          {data}
        </Typography>
      </Box>
      <Box
        position="relative"
        height={{ lg: "60px", md: "50px", sm: "40px", xs: "60px" }}
        width={{ lg: "60px", md: "50px", sm: "40px", xs: "60px" }}
      >
        <Image src="/images/grammerclass.svg" fill alt="grammer class" />
      </Box>
    </Box>
  );
};

export default Item;
