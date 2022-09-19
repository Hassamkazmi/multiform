import "./App.css";
import { useState } from "react";
import SignUp from "./components/HorseData";
import LocationInfo from "./components/NextInfo";
import OtherInfo from "./components/OtherInfo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [page, setPage] = useState(0);

  const [x, setX] = useState(0);

  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    weight: "",
    fullnameAr:'',
    ageAr: "",
    weightAr: "",
    kind: "",
    breeder: "",
    pedigree: "",
    kindAr: "",
    breederAr: "",
    pedigreeAr: "",
    color: "",
    earning: "",
    price: "",
    colorAr: "",
    earningAr: "",
    priceAr: "",
  });
  

  const componentList = [
    <SignUp
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <LocationInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <OtherInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
  ];
  return (
    <div className="App">
      <div className="progress-bar">
        {
          <div
            style={{
              width:
                page === 0
                  ? "33%"
                  : page === 1
                  ? "66%"
                  : page === 2
                  ? "100%"
                  : "100%",
            }}
          ></div>
        }
      </div>

      <div className="body">{componentList[page]}</div>
      <ToastContainer />
    </div>
  );
}

export default App;
