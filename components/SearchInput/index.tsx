import { BiSearchAlt2 } from "react-icons/bi";
import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { colors } from "../../data/colors";

interface IProps {}

const SearchInput: FunctionComponent<IProps> = ({}) => {
  return (
    <Box>
      <Box display="flex">
        <Box
          px={2}
          width={{ lg: "200px", md: "180px" }}
          display="flex"
          alignItems="center"
          bgcolor="#F5F5F5"
          height="40px"
          borderRadius="10px 0 0 10px"
        >
          <input
            placeholder="Search the web"
            // onChange={(e) => setSearchText(e.target.value.trim())}
          />
        </Box>
        <Box
          borderRadius="0px 10px 10px 0px"
          width="35px"
          height="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor={colors.blue}
        >
          <BiSearchAlt2 color="white" fontSize="22px" />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchInput;
