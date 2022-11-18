import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./achiever.module.css";
import { FunctionComponent } from "react";

interface Data {
  image: string;
  name: string;
  scores: any[];
  overall: string;
}

interface IProps {
  data: Data;
  type?: string;
  color?: string;
  textColor?: string;
}

const AchieverItem: FunctionComponent<IProps> = ({
  data,
  type,
  color,
  textColor,
}) => {
  return (
    <Grid
      item
      md={3.8}
      sm={5.6}
      xs={5.6}
      width={{ md: "fit-content", sm: "200px", xs: "230px" }}
      minWidth={{ sm: "fit-content", xs: "230px" }}
      maxWidth={{ md: "100%", sm: "300px", xs: "230px" }}
      boxShadow="0px 2px 10px rgba(0, 0, 0, 0.07)"
      border="1px solid #E0E0E0"
      borderRadius="15px"
      height={{ lg: "180px", md: "160px", sm: "140px", xs: "130px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="30%" pl={{ md: "20px", sm: "20px", xs: "10px" }}>
        <Box
          height={{ lg: "80px", md: "70px", sm: "70px", xs: "60px" }}
          width={{ lg: "80px", md: "70px", sm: "70px", xs: "60px" }}
          margin="auto"
        >
          <img
            src={data.image}
            alt={data.name}
            className={styles.achieverImage}
            style={{ border: `1px solid ${color}` }}
          />
        </Box>
        <Typography
          fontSize={{ lg: "13px", xs: "12px" }}
          my={{ md: 1 }}
          textAlign="center"
        >
          {data?.name}
        </Typography>

        <Box
          margin="auto"
          bgcolor={color}
          color={textColor}
          width="fit-content"
          fontSize={{ lg: "14px", xs: "12px" }}
          py={0.2}
          px={1}
          borderRadius="20px"
        >
          {type}
        </Box>
      </Box>
      <Box width="70%">
        <Box px={{ lg: 4, md: 3, sm: 4, xs: "10%" }}>
          {data.scores.map((item: Data, index: number) => (
            <Box display="flex" justifyContent="space-between" key={index}>
              <Typography
                fontSize={{ lg: "14px", md: "13px", sm: "12px", xs: "11px" }}
              >
                {Object.keys(item)[0]}
              </Typography>
              <Typography
                fontSize={{ lg: "14px", md: "13px", sm: "12px", xs: "11px" }}
              >
                {Object.values(item)[0]}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          textAlign="center"
          mt={2}
          fontWeight={600}
          fontSize={{ md: "16px", sm: "14px", xs: "13px" }}
        >
          {data.overall}
        </Typography>
      </Box>
    </Grid>
  );
};

export default AchieverItem;
