/* eslint-disable react/prop-types */
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { RiChatNewFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";

const LeftHeader = ({myImage}) => {
    return <div className="left-header">
    <div className="profile-pic">
      <img className="profile-icon" src={myImage} alt="" />
    </div>
    <div className="header-item">
      <div className="communites header-icon">
        <FaPeopleGroup  className="icon"/>
      </div>
      <div className="status header-icon">
        <HiOutlineStatusOnline  className="icon"/>
      </div>
      <div className="channels header-icon">
         <AiOutlineMessage className="icon"/>
      </div>
      <div className="new-chat header-icon">
         <RiChatNewFill  className="icon"/>
      </div>
      <div className="menu header-icon">
         <CiMenuKebab className="icon" />

      </div>
    </div>
  </div>
}

export default LeftHeader;