import "./Sidebar.css";
import { motion } from "framer-motion";
const Sidebar = ({ Children }) => {
  return (
    <div className="main-container">
      <motion.div animate={{ width: "200px" }} className="sidebar">
        <main>{Children}</main>
      </motion.div>
    </div>
  );
};

export default Sidebar;
