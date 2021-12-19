import React from "react"
import { AiFillHome } from "react-icons/ai"
import { FcAbout } from "react-icons/fc"
import { MdCategory } from "react-icons/md"
import { FcSelfServiceKiosk } from "react-icons/fc"
import { MdCommute } from "react-icons/md"
import { GiThreeFriends } from "react-icons/gi"

export const SidebarData = [
  {
    title: "Home",
    icon: <AiFillHome />,
    link: "/home",
  },
  {
    title: "About",
    icon: <FcAbout />,
    link: "/about",
  },
  {
    title: "Category",
    icon: <MdCategory />,
    link: "/category",
  },
  {
    title: "Service",
    icon: <FcSelfServiceKiosk />,
    link: "/service",
  },
  {
    title: "Community",
    icon: <MdCommute />,
    link: "/community",
  },
  {
    title: "Friends",
    icon: <GiThreeFriends />,
    link: "/friends",
  },
]
