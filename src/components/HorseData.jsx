import { motion } from "framer-motion";
import { toast } from 'react-toastify';

  const SignUp = ({ formData, setFormData, page, setPage, x, setX }) => {
    const handleNext = () => {
      if(formData.fullName && formData.age && formData.weight !== ''){
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
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="card"
      >
        <div className="step-title">Horse Form</div>

        <input
          type="text"
          placeholder="Name"
          required
          className="form-group"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
        <input
          type="number"
          className="form-group"
          placeholder="Age"
          required
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <input
          type="number"
          className="form-group"
          placeholder="Weight"
          required
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
        />

        <button
          onClick={handleNext}
        >
          Next
        </button>
      </motion.div>
    );
  };

  export default SignUp;
