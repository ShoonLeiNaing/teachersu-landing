import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
  year: string;
  title: string;
  description: string;
  color: string;
}

const RoadmapItem: FunctionComponent<IProps> = ({
  year,
  title,
  description,
  color,
}) => {
  return (
    <Box>
      <Box
        borderBottom={`1px solid ${color}`}
        mb={{ md: 2, xs: 1 }}
        width={{ lg: "300px", md: "280px", sm: "220px", xs: "200px" }}
      >
        <Typography
          mb={{ sm: 1, xs: "2px" }}
          fontSize={{ md: "16px", xs: "14px" }}
          fontWeight={500}
        >
          {year}{" "}
        </Typography>
        <Typography
          fontWeight={500}
          mb={{ md: 2, xs: 1 }}
          fontSize={{ md: "16px", xs: "14px" }}
        >
          {title}{" "}
        </Typography>
      </Box>
      <Typography fontSize={{ md: "16px", sm: "14px", xs: "13px" }}>
        {description}
      </Typography>
    </Box>
  );
};

export default RoadmapItem;
