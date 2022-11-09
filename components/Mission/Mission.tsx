import { Box } from "@mui/material";
import Image from "next/image";
import { colors } from "../../data/colors";
import { mission } from "../../data/data";
import Title from "../Title";

const Mission = () => {
  return (
    <Box
      pt={{ lg: "40px", md: "30px", xs: "20px" }}
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      gap={{ lg: 8, sm: 4, xs: 2 }}
      px={{ lg: "0", md: "20px" }}
    >
      {mission?.map((item: any) => (
        <Box
          width={{ md: "100%" }}
          maxWidth={{ md: "100%", sm: "500px" }}
          margin={{ md: "unset", sm: "auto" }}
          key={item.title}
          borderRadius="20px"
          sx={{ backgroundColor: colors.white }}
          height={{ lg: "300px", md: "auto" }}
          p={{ lg: 4, md: 2, sm: 4, xs: 3 }}
        >
          <Box display="flex" alignItems="center" gap={{ lg: 4, xs: 2 }}>
            <Box
              height={{ lg: "100px", md: "80px", sm: "100px", xs: "80px" }}
              width={{ lg: "100px", md: "80px", sm: "100px", xs: "80px" }}
              position="relative"
            >
              <Image src={item.image} fill alt={item.title} />
            </Box>
            <Title title={item.title} />
          </Box>
          <Box fontSize={{ md: "16px", xs: "14px" }} mt={{ sm: "20px" }}>
            <ul style={{ paddingLeft: "15px" }}>
              {item.description.map((list: string) => (
                <li style={{ marginBottom: "10px" }} key={list}>
                  {list}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Mission;
