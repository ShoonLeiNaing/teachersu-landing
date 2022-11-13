import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Title from "../Title";

const CEOandFounder = () => {
  return (
    <Box pt={{ lg: "80px", md: "60px", xs: "40px" }}>
      <Title title="Our CEO and Founder" />
      <Box
        pt={{ lg: "40px", md: "30px", xs: "20px" }}
        display="flex"
        flexDirection={{ lg: "row", xs: "column" }}
        // pb={{ lg: "40px", md: "30px", xs: "20px" }}
      >
        <Box
          margin={{ lg: "unset", xs: "auto" }}
          p={{ lg: 4 }}
          mb={{ lg: 0, xs: 2 }}
        >
          <Box
            height={{ lg: "550px", md: "450px", sm: "300px", xs: "300px" }}
            width={{ lg: "450px", md: "350px", sm: "250px", xs: "250px" }}
            position="relative"
          >
            <Image alt="teacher su" src="/images/teachersu.svg" fill />
          </Box>
          <Typography
            fontSize={{ md: "16px", xs: "14px" }}
            textAlign="center"
            fontWeight={600}
            mt={{ sm: 2, xs: 1 }}
          >
            Su Htet Zaw
          </Typography>
          <Typography fontSize={{ md: "16px", xs: "14px" }} textAlign="center">
            (Teacher Su)
          </Typography>
        </Box>
        <Typography
          px={{ lg: 0, md: 4, sm: 2 }}
          fontSize={{ md: "16px", xs: "14px" }}
        >
          Su Htet Zaw (Teacher Su),the CEO and founder of Teacher Su
          International School,received her Bachelor’s degree from Yangon
          University of Education (YUOE) in 2013 and got the Myanmar
          Presidential Scholarship while working as a high school teacher in
          Yangon; thus, pursued her Master’s degree in Educational Leadership
          and Management at La Trobe University, Melbourne. <br />
          <br />
          After receiving her Master’s degree, she worked as a deputy planning
          officer at the Department of Educational Research, Planning and
          Training, Ministry of Education, Myanmar. As she is passionate about
          volunteering and leadership activities, she outstandingly engaged in
          eleven volunteering activities and was hired for three professional
          works. during her two years in Australia. <br />
          <br />
          She founded the Red Cross University Club and served as the President
          of the club. Her volunteering works include being an Executive
          Assistant at the National Education office (CISA), an Executive
          Assistant at the National Undergraduate office (CISA), a volunteer
          tutor, a CISA National Conference Program Coordinator, a postgraduate
          student representative at Library consultative committee, a Connect
          Mentor, Social Media Communication Assistant and International Host at
          La Trobe.
          <br />
          <br /> Moreover, she worked as a School Partnership Program
          facilitator, casual registration staff and connect leader at La Trobe
          University (Melbourne) and also a member of the Golden Key
          International Honour Society, which membership is invitation only and
          applies to the top 15% of the respective university. <br />
          <br />
          Due to her excellent leadership and academic skills, she was proudly
          awarded ‘Victoria International Student of the Year - Higher Education
          (2017)’.She is currently working as the CEO of the centre to bring
          quality education and provide international standard facilities to
          young students.
        </Typography>
      </Box>
    </Box>
  );
};

export default CEOandFounder;
