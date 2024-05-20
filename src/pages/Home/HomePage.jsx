import HeaderDescription from "../../components/HeaderDescription";

import Campus from "./Campus";
import Cta from "./Cta";
import Facilities from "./Facilities";
import Programmes from "./Programmes";
import Testimonial from "./Testimonial";

function HomePage() {
  return (
    <div>
      <HeaderDescription />
      <Programmes />
      <Campus />
      <Facilities />
      <Testimonial />
      <Cta />
    </div>
  );
}

export default HomePage;
