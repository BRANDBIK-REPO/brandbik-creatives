import AboutMe from "@/components/Rafih/AboutMe";
 
import SectionOne from "@/components/Rafih/Banner";
 
// import Location from "@/components/Rafih/Location";
import Packages from "@/components/Rafih/Packages";
import SectionTwo from "@/components/Rafih/SectionTwo";
import RafiHeader from "@/components/Rafih/Navbar";
import Footer from "@/components/Rafih/Footer";



export default function Page(){
  return (
    <div>
      <RafiHeader />
  <SectionOne/>
  <SectionTwo/>
 
  <AboutMe/>
  <Packages/>
     <Footer />
    </div>
  )
}