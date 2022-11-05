import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const Layout = dynamic(import("../components/Layout"), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <Box height="80vh" sx={{ backgroundColor: "red" }}>
        jejej
      </Box>
      <Box height="80vh" sx={{ backgroundColor: "blue" }}>
        jejej
      </Box>
    </Layout>
  );
}
