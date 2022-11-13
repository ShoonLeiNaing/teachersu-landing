import { Box } from "@mui/material";
import { internationalSchs1, internationalSchs2 } from "../../data/data";
import Title from "../Title";
import Item from "./Item";

const InternationalSchool = () => {
  return (
    <Box
      pt={{ lg: "80px", md: "60px", xs: "40px" }}
      pb={{ lg: "40px", md: "30px", xs: "20px" }}
    >
      <Title title="International School" />
      <Box
        pt={{ lg: "40px", md: "30px", xs: "20px" }}
        maxWidth="1100px"
        margin="auto"
      >
        {/* <Box display="flex" gap={3} overflow="scroll">
          {internationalSchs1?.map((sch, index) => (
            <Box key={index} minWidth="900px" bgcolor="red">
              {sch.title}
            </Box>
          ))}
        </Box> */}
        <Box overflow="scroll" mx={{ lg: 0, md: 4, sm: 4, xs: 2 }}>
          <Box
            display="flex"
            gap={{ md: 4, sm: 3, xs: 2 }}
            mb={{ md: 4, sm: 3, xs: 2 }}
            justifyContent="space-between"
          >
            {internationalSchs1?.map((sch, index) => (
              <Item key={index} data={sch} />
            ))}
          </Box>
          <Box
            display="flex"
            gap={{ md: 4, sm: 3, xs: 2 }}
            justifyContent="space-between"
            // px={{ lg: 0, md: 4, sm: 4, xs: 2 }}
          >
            {internationalSchs2?.map((sch, index) => (
              <Item key={index} data={sch} />
            ))}
          </Box>
        </Box>

        {/* <Grid container justifyContent="space-between" rowGap={{ md: 4 }}>
          {internationalSchs?.map((sch, index) => (
            <Grid
              key={index}
              //   xs={3.7}
              border="1px solid rgba(224, 224, 224, 1)"
              borderRadius="15px"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              px={{ md: 4 }}
              py={{ md: 4 }}
              minWidth="300px"
              overflow="scroll"
            >
              <Box
                position="relative"
                height={{ lg: "80px" }}
                width={{ lg: "80px" }}
                mr={{ md: 2 }}
              >
                <Image src={sch.image} alt={sch.title} fill />
              </Box>
              <Typography fontSize={{ md: "16px", xs: "14px" }}>
                {parse(sch.title)}
              </Typography>
            </Grid>
          ))}
        </Grid> */}
      </Box>
    </Box>
  );
};

export default InternationalSchool;
