import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { colors } from "../../data/colors";
import { IELTSAchievers } from "../../data/data";
import Paginator from "../Paginator";
import Title from "../Title";
import AchieverItem from "./AchieverItem";

const IELTSachievers = () => {
  const [page, setPage] = useState<number>(1);
  return (
    <Box
      pt={{ lg: "40px", md: "30px", xs: "20px" }}
      px={{ sm: "20px", xs: "10px" }}
    >
      <Title title="IELTS Achievers" />
      <Grid
        container
        pt={{ lg: "40px", md: "30px", xs: "20px" }}
        pb={2}
        gap={{ sm: "20px", xs: "10px" }}
        justifyContent="center"
      >
        {IELTSAchievers?.map((item) => (
          <AchieverItem
            key={item.name}
            data={item}
            type="IELTS"
            color={colors.red}
            textColor="white"
          />
        ))}
      </Grid>
      <Paginator totalPages={6} {...{ page, setPage }} />
    </Box>
  );
};

export default IELTSachievers;
