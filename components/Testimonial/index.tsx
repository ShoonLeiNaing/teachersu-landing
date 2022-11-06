import { Box } from "@mui/material";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../data/data";
import Title from "../Title";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  return (
    <Box
      maxWidth="1200px"
      margin="auto"
      py={{ lg: "80px", md: "60px", xs: "40px" }}
      px={{ lg: "0", md: "20px", sm: "20px", xs: "0px" }}
    >
      <Title title="Testimonials" />
      <Box
        width={{ lg: "90%", md: "90%", sm: "95%", xs: "90%" }}
        margin="auto"
        pt={{ lg: "40px", md: "30px", xs: "20px" }}
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
          {testimonials?.map((item) => (
            <SwiperSlide key={item.name}>
              <TestimonialItem data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonial;
