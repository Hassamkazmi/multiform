import { motion } from "framer-motion";
import { toast } from 'react-toastify';


const LocationInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const handleNext = () => {
    if(formData.kind && formData.breeder && formData.pedigree !== ''){
      setPage(page + 1);
      setX(1000);
    }
    else{
      toast.error('Please fill the field')
    }
    
  }
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Next Info</div>

      <input
        type="text"
        placeholder="Kind"
        value={formData.kind}
        required
        onChange={(e) => setFormData({ ...formData, kind: e.target.value })}
      />
      <input
        type="text"
        placeholder="Breeder"
        value={formData.breeder}
        required
        onChange={(e) =>
          setFormData({ ...formData, breeder: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Pedigree"
        value={formData.pedigree}
        required
        onChange={(e) => setFormData({ ...formData, pedigree: e.target.value })}
      />
      
      <button
        onClick={handleNext}
      >
        Next
      </button>
      <br />
      <button
        onClick={() => {
          setPage(page - 1);
          setX(-1000);
        }}
      >
        Previous
        </button>
    </motion.div>
  );
};

export default LocationInfo;
