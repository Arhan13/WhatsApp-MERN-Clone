import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { IconButton, Avatar } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://lh3.googleusercontent.com/-5cofqp7CqDA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucltKcPR0hR2j3jqps1pT3iflS-8GQ/photo.jpg?sz=46" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text"></input>
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;