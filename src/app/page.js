import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/navbar";
import Welcome from "@/components/Welcome";


export default function Home() {
  return (
  <main>
    <Navbar/>
    <Hero/>
    <CoOrganizationLogos/>
    <Welcome/>
    <Feature/>
  </main>
  );
}
