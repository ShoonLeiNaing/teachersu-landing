import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const Layout = dynamic(import("../components/Layout"), { ssr: false });
const Numbers = dynamic(import("../components/Numbers"), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <Box maxWidth="1200px" margin="auto">
        <Numbers />
      </Box>
    </Layout>
  );
}
