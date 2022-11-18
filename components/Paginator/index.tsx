/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import { Box, IconButton } from "@mui/material";
import { FunctionComponent } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { colors } from "../../data/colors";
import styles from "./paginator.module.css";

interface IProps {
  page: number;
  setPage: any;
  totalPages: number;
}

const Paginator: FunctionComponent<IProps> = ({
  page,
  setPage,
  totalPages,
}) => {
  // const debouncedFilter = _.debounce((pageNum: number) => {
  //   setPage(pageNum);
  // }, 200);
  const changePageInput = (e: any) => {
    // debouncedFilter(e.target.value);
    if (e.target.value < 1) {
      setPage(1);
    } else {
      setPage(parseInt(e.target.value, 10));
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ sm: "flex-end", xs: "center" }}
      px={{ md: 2, sm: 0, xs: "0" }}
      width={{ md: "100%", sm: "90%" }}
    >
      {/* <Typography color={colors.grey.grey2} fontSize="14px">
        1 - 8 0f 200
      </Typography> */}
      <Box display="flex" alignItems="center" gap={1} color="black">
        <Box display="flex" alignItems="center" fontSize="12px">
          Page
          <Box
            width="50px"
            border="1px solid #BBBBBB"
            borderRadius="10px"
            // p="3px"
            marginX={1}
            zIndex={1000}
            height="30px"
          >
            <input
              value={page}
              type="number"
              // onChange={(e) => setCurrentPage(parseInt(e.target.value, 10))}
              onChange={(e) => changePageInput(e)}
              className={styles.input}
              min="1"
              max={totalPages}
            />
          </Box>
          of {totalPages}
        </Box>
        <Box display="flex" gap={1} zIndex={1000} ml={2}>
          <IconButton
            sx={{
              backgroundColor: colors.blue,
              "&:hover": {
                backgroundColor: "#436FAE",
              },
              "&:disabled": {
                backgroundColor: "grey",
              },
            }}
            onClick={() => {
              if (page !== 1) {
                setPage(page - 1);
              }
            }}
            disabled={page === 1}
          >
            <MdOutlineKeyboardArrowLeft color="white" fontSize="20px" />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: colors.blue,
              "&:hover": {
                backgroundColor: "#436FAE",
              },
              "&:disabled": {
                backgroundColor: "grey",
              },
            }}
            onClick={() => {
              if (page !== totalPages && totalPages !== undefined) {
                setPage(page + 1);
              }
            }}
            disabled={page === totalPages || totalPages === undefined}
          >
            <MdOutlineKeyboardArrowRight color="white" fontSize="20px" />
          </IconButton>

          {/* <img
            src="/images/leftpagination.svg"
            alt="left"
            onClick={() => setPage(page - 1)}
          />
          <img
            src="/images/rightpagination.svg"
            alt="right"
            onClick={() => setPage(page + 1)}
          /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Paginator;
