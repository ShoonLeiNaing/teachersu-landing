import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
  title: string;
}

const Title: FunctionComponent<IProps> = ({ title }) => {
  return (
    <Typography
      fontSize={{ lg: "24px", md: "20px" }}
      fontWeight={600}
      textAlign="center"
    >
      {title}
    </Typography>
  );
};

export default Title;
