import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

import PropTypes from "prop-types";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col text-gray-100 bg-primary shadow-lg">
      <SidebarIcon icon={<FaFire size="28" />} />
      <SidebarIcon icon={<BsPlus size="32" />} />
      <SidebarIcon icon={<BsFillLightningFill size="20" />} />
      <SidebarIcon icon={<FaPoo size="20" />} />
      <SidebarIcon icon={<BsGearFill size="20" />} />
    </div>
  );
};

const SidebarIcon = ({ icon, text = "tooltip 💡" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

SidebarIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.element.isRequired,
};

export default Sidebar;
