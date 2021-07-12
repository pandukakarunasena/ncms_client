//hero banner STAY SAFE
//guidelines to follow during the time
//symptoms
//registered patient details

import RegisteredPatientDetails from './RegisteredPatientDetails';
import HeroBanner from './HeroBanner';
import GuideLines from './GuideLines';
import Symptoms from './Symptoms';

function LandingPage() {
  return (
    <>
      <HeroBanner />
      <GuideLines />
      <Symptoms />
      <RegisteredPatientDetails />;
    </>
  );
}

export default LandingPage;
