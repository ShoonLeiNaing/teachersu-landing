import { Box } from "@mui/material";
import { adultLearners } from "../../data/data";
import Title from "../Title";
import GeneralEnglish from "./GeneralEnglish";
import Item from "./Item";

const AdultLearners = () => {
  return (
    <Box py={{ lg: "40px", md: "30px", xs: "20px" }}>
      <Box maxWidth="1300px" margin="auto">
        <Title title="Adult Learners" />
        <Box
          py={{ lg: "40px", md: "30px", xs: "20px" }}
          display="flex"
          // justifyContent="center"
          gap={{ md: 3, sm: 2, xs: 2 }}
          overflow="scroll"
          mx={{ md: 4, sm: 3, xs: 0 }}
          px={2}
        >
          <GeneralEnglish />
          {adultLearners?.map((item: any) => (
            <Item data={item} key={item.title} />
            // <Item data={item} key={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AdultLearners;
