import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Contact from "@/components/home/Contact";
import Footer from "@/components/footer";
import Project from "@/components/home/project";
import GetStarted from "@/components/home/GetStarted";

const Page = () => {
  return (
    <>
      <Hero/>
      <GetStarted/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Page;
