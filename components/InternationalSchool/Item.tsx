import { Box, Typography } from "@mui/material";
import parse from "html-react-parser";
import Image from "next/image";

const Item = ({ data }: any) => {
  return (
    <Box
      width={{ lg: "340px", md: "340px", sm: "260px", xs: "280px" }}
      minWidth={{
        lg: "340px",
        md: "340px",
        sm: "260px",
        xs: "300px",
      }}
      px={{ md: 4, sm: 2, xs: 3 }}
      py={{ md: 4, sm: 2, xs: 3 }}
      border="1px solid rgba(224, 224, 224, 1)"
      borderRadius="15px"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box
        position="relative"
        height={{ lg: "80px", md: "80px", sm: "60px", xs: "70px" }}
        width={{ lg: "80px", md: "80px", sm: "60px", xs: "70px" }}
        mr={{ md: 2, xs: 1 }}
      >
        <Image src={data.image} alt={data.title} fill />
      </Box>
      <Typography fontSize={{ md: "16px", xs: "14px" }}>
        {parse(data.title)}
      </Typography>
    </Box>
  );
};

export default Item;
