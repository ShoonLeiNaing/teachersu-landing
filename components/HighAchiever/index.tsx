import { Box } from "@mui/system";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { highAchievers } from "../../data/data";
import Title from "../Title";
import HighAchieverItem from "./HighAchieverItem";

const HighAchiever = () => {
  return (
    <Box py={{ lg: "80px", md: "60px", xs: "40px" }}>
      <Title title="Our High Achievers" />
      <Box
        pt={{ lg: "40px", md: "30px", xs: "20px" }}
        width={{ md: "700px", sm: "570px", xs: "10%x" }}
        maxWidth={{ sm: "100%", xs: "450px" }}
        margin="auto"
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          navigation
        >
          {highAchievers?.map((item) => (
            <SwiperSlide key={item.name}>
              <HighAchieverItem data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
export default HighAchiever;
