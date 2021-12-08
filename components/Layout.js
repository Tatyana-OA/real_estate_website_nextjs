import Head from "next/head";
import { Box } from "@chakra-ui/react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>N-R.JS Real Estate by Tanya</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header style={{borderBottom:"2px solid black"}}>
		  <NavBar/>
	   </header>
      <main>
		  {children}
		</main>
      <footer>
		  <Footer />
		</footer>
    </Box>
  </>
);
export default Layout;
