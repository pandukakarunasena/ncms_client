import PatientForm from './patient_form/PatientForm';
import './styles/Symptoms.css';

function Symptoms() {
  return (
    <>
      <div className="symptoms_main_div">
        <div className="symptoms_normal_div">
          <h2>Watch for Symptoms</h2>
          <p>
            People with COVID-19 have had a wide range of symptoms reported –
            ranging from mild symptoms to severe illness. Symptoms may appear
            2-14 days after exposure to the virus. Anyone can have mild to
            severe symptoms. People with these symptoms may have COVID-19:
          </p>
          <ul>
            <li>Fever or chills</li>
            <li>Cough</li>
            <li>Shortness of breath or difficulty breathing</li>
            <li>Fatigue</li>
            <li>Muscle or body aches</li>
            <li>Headache</li>
            <li>New loss of taste or smell</li>
            <li>Sore throat</li>
            <li>Congestion or runny nose</li>
            <li>Nausea or vomiting</li>
            <li>Diarrhea</li>
          </ul>
          <p>
            This list does not include all possible symptoms. CDC will continue
            to update this list as we learn more about COVID-19. Older adults
            and people who have severe underlying medical conditions like heart
            or lung disease or diabetes seem to be at higher risk for developing
            more serious complications from COVID-19 illness.
          </p>
        </div>

        <div className="symptoms_emergency_div">
          <h2>When to Seek Emergency Medical Attention</h2>

          <div>
            <div>
              <p>
                Look for emergency warning signs* for COVID-19. If someone is
                showing any of these signs,&nbsp;
                <strong>seek emergency medical care immediately:</strong>
              </p>
            </div>
          </div>

          <ul>
            <li>Trouble breathing</li>
            <li>Persistent pain or pressure in the chest</li>
            <li>New confusion</li>
            <li>Inability to wake or stay awake</li>
            <li>
              Pale, gray, or blue-colored skin, lips, or nail beds, depending on
              skin tone
            </li>
          </ul>
          <p>
            *This list is not all possible symptoms. Please call your medical
            provider for any other symptoms that are severe or concerning to
            you.
          </p>
          <p>
            Call 911 or call ahead to your local emergency facility: Notify the
            operator that you are seeking care for someone who has or may have
            COVID-19.
          </p>
        </div>
      </div>
      <div className="register_now_banner">
        <img src="/images/register_banner.png" alt="register now!!!" />
      </div>
      <PatientForm />
    </>
  );
}

export default Symptoms;
