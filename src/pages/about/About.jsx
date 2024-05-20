import PageBanner from "../../components/PageBanner";
import AboutUsContent from "./AboutUsContent";
import Staffs from "./Staffs";

function About() {
  return (
    <div>
      <PageBanner title="About us" />
      <AboutUsContent />
      <Staffs />
    </div>
  );
}

export default About;
