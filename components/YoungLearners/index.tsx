import { Box } from "@mui/material";
import { youngLearners1, youngLearners2 } from "../../data/data";
import Title from "../Title";
import Item from "./Item";

const YoungLearners = () => {
  return (
    <Box py={{ lg: "40px", md: "30px", xs: "20px" }}>
      <Box maxWidth="1100px" margin="auto">
        <Title title="Young Learners" />
        <Box
          overflow="scroll"
          mx={{ lg: 0, md: 4, sm: 4, xs: 2 }}
          pt={{ lg: "40px", md: "30px", xs: "20px" }}
        >
          <Box
            display="flex"
            gap={{ md: 4, sm: 3, xs: 2 }}
            mb={{ md: 4, sm: 3, xs: 2 }}
            justifyContent="space-between"
          >
            {youngLearners2?.map((item) => (
              <Item data={item} key={item} />
            ))}
          </Box>
          <Box
            display="flex"
            gap={{ md: 4, sm: 3, xs: 2 }}
            mb={{ md: 4, sm: 3, xs: 2 }}
            justifyContent="space-between"
          >
            {youngLearners1?.map((item) => (
              <Item data={item} key={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default YoungLearners;
