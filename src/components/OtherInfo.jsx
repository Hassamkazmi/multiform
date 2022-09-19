import { motion } from "framer-motion";
import { toast } from 'react-toastify';


const OtherInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const handleSubmit = () => {
    if(formData.color && formData.earning && formData.price !== ''){
     toast.success('Submit');
     setPage(page - 2);
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
      <div className="step-title">Other Info</div>
      <input
        type="text"
        placeholder="Color"
        value={formData.color}
        required
        onChange={(e) =>
          setFormData({ ...formData, color: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Earning"
        required
        value={formData.earning}
        onChange={(e) =>
          setFormData({ ...formData, earning: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        required
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />
      <br />
      <button
        onClick={handleSubmit}
      >
        Submit
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

export default OtherInfo;
