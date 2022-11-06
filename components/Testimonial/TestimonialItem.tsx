import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";
import { colors } from "../../data/colors";

interface IProps {
  data: any;
}

const TestimonialItem: FunctionComponent<IProps> = ({ data }) => {
  return (
    <Box>
      <Box
        margin="auto"
        width={{ lg: "90%", md: "90%", sm: "95%", xs: "90%" }}
        // minHeight={{ lg: "350px" }}
        borderRadius="15px"
        py={{ lg: 8, md: 6, sm: 4, xs: 4 }}
        px={{ lg: 4, md: 4, sm: 4, xs: 1 }}
        sx={{ backgroundColor: colors.white }}
        // display="flex"
        // alignItems="flex-start"
      >
        <Box
          display={{ md: "none", sm: "block" }}
          position="relative"
          height={{ sm: "150px", xs: "120px" }}
          width={{ sm: "150px", xs: "120px" }}
          margin="auto"
          mb={2}
          //   px={8}
        >
          <Image src={data.image} fill alt={data.name} />
        </Box>
        <Box display="flex" alignItems="flex-start">
          <img src={data.icon} alt={data.name} className="quote" />
          <Box ml={2} flex={{ md: 0.95, xs: 1 }}>
            <Typography fontSize={{ md: "16px", xs: "14px" }}>
              {data.description}
            </Typography>
            <Typography fontWeight={500} mt={4}>
              {data.name}
            </Typography>
            <Typography mt={1} fontWeight={400} color={colors.red}>
              {data.class}
            </Typography>
          </Box>
          <Box
            display={{ md: "block", sm: "none" }}
            position="relative"
            height={{ lg: "180px", md: "150px" }}
            width={{ lg: "180px", md: "150px" }}
            ml={2}
            //   px={8}
          >
            <Image src={data.image} fill alt={data.name} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialItem;
