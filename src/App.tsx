import { useState } from "react";

import BentoGrid from "./pages/BentoSection/BentoGrid";
import AboutUs from "./pages/aboutUs/AboutUs";
import { motion } from "framer-motion";
import Footer from "./pages/Footer";
import Contacts from "./pages/Contacts/Contacts";
import Hero from "./pages/Hero";
import Header from "./pages/header";

function App() {
	return (
		<div className="">
			<div id="hero" className="h-screen">
				<Hero />
			</div>
			<div id="aboutus">
				<AboutUs />
			</div>
			{/* <motion.div
				whileInView={{ y: 0, opacity: 100 }}
				initial={{ y: 10, opacity: 0 }}
				transition={{ ease: "easeIn", duration: 1.5, delay: 0.2 }}
			> */}
			<div id="service">
				<BentoGrid />
			</div>
			<div id="contacts">
				<Contacts />
			</div>

			<Footer />
			{/* </motion.div> */}
		</div>
	);
}

export default App;
