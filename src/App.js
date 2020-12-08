import './App.css';
import GeneralSection from './components/General/GeneralSection';
import EducationSection from './components/Education/EducationSection';
import ExperienceSection from './components/Experience/ExperienceSection';

function App() {

  return (
    <div className="container App">
      <GeneralSection />
      <EducationSection />
      <ExperienceSection />
    </div>
  );
}

export default App;
