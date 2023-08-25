import AudinSightCard from "../components/dashboard/AudinSightCard";
import FormContainer1 from "../components/dashboard/FormContainer1";
import EvaluationSection1 from "../components/dashboard/EvaluationSection1";
import EvaluationSection2 from "../components/dashboard/EvaluationSection2";
import SectionCard2 from "../components/dashboard/SectionCard2";
import SectionCard from "../components/dashboard/SectionCard";
import SectionCardFormFilter from "../components/dashboard/SectionCardFormFilter";
import FeedbackCard from "../components/dashboard/FeedbackCard";
import SectionCard4 from "../components/dashboard/SectionCard4";
import ArtworkCard from "../components/dashboard/ArtworkCard";
import Footer from "../components/dashboard/Footer";

function dashboard() {
  return (
    <a className="[text-decoration:none] bg-white w-full overflow-hidden flex flex-col items-center justify-center gap-[32px] min-w-[320px] text-center text-lg text-dimgray font-typography-heading-small">
      <AudinSightCard />
      <FormContainer1 />
      <EvaluationSection1 />
      <EvaluationSection2 />
      <SectionCard2 />
      <SectionCardFormFilter />
      <SectionCard />
      <FeedbackCard />
      <SectionCard4 />
      <ArtworkCard />
      <Footer />
    </a>
  );
}

export default dashboard;
