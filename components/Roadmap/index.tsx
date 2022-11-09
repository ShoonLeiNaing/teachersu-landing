import { Box } from "@mui/material";
import Image from "next/image";
import { colors } from "../../data/colors";
import Title from "../Title";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  return (
    <Box
      py={{ lg: "80px", md: "60px", xs: "40px" }}
      maxWidth={{ lg: "900px", md: "87%", sm: "67%", xs: "500px" }}
      margin="auto"
    >
      <Title title="Our Roadmap" />
      <Box
        mt={{ md: 0, sm: 2, xs: 0 }}
        position="relative"
        minHeight={{ md: "500px" }}
        pt={{ lg: "40px", md: "50px", sm: "20px", xs: "30px" }}
        // px={{ lg: 0, md: "20px" }}
      >
        <Box
          display="flex"
          gap={{ lg: 12, md: 0 }}
          flexDirection={{ md: "row", xs: "column-reverse" }}
          ml={{ md: 0, sm: 12, xs: "60px" }}
        >
          <Box width="100%" mt={{ md: 22 }} mb={{ md: 2, sm: 7, xs: 5 }}>
            <RoadmapItem
              year="2020  April "
              title="How we survived"
              color={colors.yellow}
              description="Upgraded to a modernized digital school in April 2020 due to COVID-19 Pandemic"
            />
          </Box>
          <Box
            width="100%"
            ml={{ lg: 0, md: 14 }}
            // mt={{ md: 22 }}
            mb={{ md: 2, sm: 7, xs: 5 }}
          >
            <RoadmapItem
              year="2018"
              title="How we started"
              color={colors.lightblue}
              description="Founded as an IELTS and quality oriented training centre in Nay Pyi Taw"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          gap={{ lg: 12, md: 0 }}
          flexDirection={{ md: "row", xs: "column-reverse" }}
          ml={{ md: 0, sm: 12, xs: "60px" }}
        >
          <Box width="100%" mt={{ md: 22 }}>
            <RoadmapItem
              year="Coming 2023"
              title="Our Future plan"
              color={colors.green}
              description="Upcoming New Campus in Nay Pyi Taw"
            />
          </Box>
          <Box width="100%" ml={{ lg: 0, md: 14 }} mb={{ md: 0, sm: 7, xs: 5 }}>
            <RoadmapItem
              year="2022"
              title="Current growth"
              color={colors.pink}
              description="Transformed into International School with two campuses in Yangon"
            />
          </Box>
        </Box>

        <Box
          position="absolute"
          width="100%"
          top="0"
          marginTop={{ lg: "40px", md: "60px", sm: "20px", xs: "10px" }}
          display="flex"
          justifyContent={{ md: "center", xs: "flex-start" }}
        >
          <Box
            position="relative"
            height={{ md: "550px", sm: "550px", xs: "500px" }}
            width={{ md: "150px", sm: "80px", xs: "48px" }}
          >
            <Image src="/images/roadmap.svg" fill alt="roadmap" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Roadmap;
