import { Box } from "@mui/material";
import { grammerClasses } from "../../data/data";
import Title from "../Title";
import Item from "./Item";

const GrammerClasses = () => {
  return (
    <Box
      py={{ lg: "40px", md: "30px", xs: "20px" }}
      sx={{ backgroundImage: "url(/images/grammerclasses.png)" }}
    >
      <Box maxWidth="1300px" margin="auto">
        <Title title="Grammer Classes" />
        <Box
          py={{ lg: "40px", md: "30px", xs: "20px" }}
          display="flex"
          gap={{ sm: 2, xs: 3 }}
          overflow="scroll"
          mx={{ md: 4, sm: 3, xs: 2 }}
        >
          {grammerClasses?.map((item: string) => (
            <Item data={item} key={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GrammerClasses;
