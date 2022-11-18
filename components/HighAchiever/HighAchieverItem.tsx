import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import { colors } from "../../data/colors";

interface IProps {
  data: any;
}

const HighAchieverItem: FunctionComponent<IProps> = ({ data }) => {
  return (
    <Box px={{ md: "70px", sm: "50px", xs: "20px" }}>
      <Box
        boxShadow="0px 2px 10px rgba(0, 0, 0, 0.07)"
        border="1px solid #E0E0E0"
        borderRadius="15px"
        height={{ md: "270px", sm: "230px", xs: "210px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box pl={{ md: "50px", sm: "40px", xs: "20px" }}>
          <Box
            position="relative"
            height={{ md: "140px", sm: "120px", xs: "80px" }}
            width={{ md: "150px", sm: "130px", xs: "90px" }}
          >
            <Image src={data.image} fill alt={data.name} />
          </Box>
          <Typography
            fontSize={{ md: "16px", xs: "14px" }}
            my={{ md: 1 }}
            textAlign="center"
          >
            {data?.name}
          </Typography>
        </Box>
        <Box width="100%">
          <Box
            margin="auto"
            bgcolor={colors.red}
            color="white"
            width="fit-content"
            fontSize={{ md: "16px", xs: "14px" }}
            py={{ md: 1, xs: 1 }}
            px={{ md: 2, xs: 2 }}
            borderRadius="20px"
          >
            IELTS High Achiever
          </Box>

          <Box
            px={{ md: 6, sm: 4, xs: "10%" }}
            py={{ md: 3, sm: 2, xs: "15px" }}
          >
            <Box display="flex" justifyContent="space-between">
              <Typography fontSize={{ md: "16px", sm: "14px", xs: "13px" }}>
                Listening
              </Typography>
              <Typography fontSize={{ md: "16px", sm: "14px", xs: "13px" }}>
                {data.listening}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography fontSize={{ md: "16px", sm: "14px", xs: "13px" }}>
                Reading
              </Typography>
              <Typography fontSize={{ md: "16px", sm: "14px", xs: "13px" }}>
                {data.reading}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography fontSize={{ md: "16px", sm: "14px", xs: "13px" }}>
                Writing
              </Typography>
              <Typography fontSize={{ md: "16px", sm: "14px", xs: "13px" }}>
                {data.writing}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography fontSize={{ md: "16px", sm: "14px", xs: "13px" }}>
                Speaking
              </Typography>
              <Typography fontSize={{ md: "16px", sm: "14px", xs: "13px" }}>
                {data.speaking}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            px={{ md: 8, sm: 4, xs: "10%" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              height={25}
              width={25}
              src="/images/prize.svg"
              alt="trophy"
            />
            <Typography
              fontSize={{ md: "16px", sm: "14px", xs: "13px" }}
              fontWeight={600}
            >
              Overall Band {data.overall}
            </Typography>
            <Image
              height={25}
              width={25}
              src="/images/prize.svg"
              alt="trophy"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HighAchieverItem;
