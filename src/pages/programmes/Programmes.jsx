import PageBanner from "../../components/PageBanner";
import Facilities from "./Facilities";
import ProgrammesContent from "./ProgrammesContent";

function Programmes() {
  return (
    <div>
      <PageBanner title="Programmes we offer" />
      <ProgrammesContent />
      <Facilities />
    </div>
  );
}

export default Programmes;
