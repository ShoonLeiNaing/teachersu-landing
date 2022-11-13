import { Box, Typography } from "@mui/material";
import { BsDot } from "react-icons/bs";
import { colors } from "../../data/colors";

const Item = ({ data }: any) => {
  return (
    <Box
      width={{ lg: "230px", md: "230px", xs: "200px" }}
      minWidth={{
        lg: "230px",
        md: "230px",
        sm: "200px",
        xs: "200px",
      }}
      px={{ md: 3, xs: 2 }}
      py={{ md: 2, xs: 2 }}
      bgcolor={colors.blue}
      borderRadius="15px"
      color="white"
    >
      <Box
        width={{ md: "100px", sm: "95px", xs: "90px" }}
        height="2px"
        bgcolor="white"
        position="relative"
      >
        <BsDot
          fontSize="28px"
          style={{ position: "relative", top: "-13px", left: "88%" }}
        />
      </Box>
      <Box
        mt={1}
        display="flex"
        flexDirection="column"
        alignItems="space-bwtween"
        gap={{ md: 3, xs: 2 }}
      >
        <Typography fontSize={{ md: "12px", xs: "11px" }}>
          Cambridge Young Learners
        </Typography>
        <Typography fontSize={{ md: "16px", xs: "14px" }}>{data}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
