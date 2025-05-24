import { Calendar, ChartLine, CirclePlus, History, LayoutDashboard, MessageCircleMore, Phone, Settings } from "lucide-react";
import styles from "./Sidebar.module.css";
import React from "react";

const sideBarLinks = [
    {
        _id: "sideBar1",
        category: "General",
        links: [
            {
                _id: "generalLink1",
                Icon: LayoutDashboard,
                label: "Dashboard",
            },
            {
                _id: "generalLink2",
                Icon: History,
                label: "History",
            },
            {
                _id: "generalLink3",
                Icon: Calendar,
                label: "Calender",
            },
            {
                _id: "generalLink4",
                Icon: CirclePlus,
                label: "Appointments",
            },
            {
                _id: "generalLink5",
                Icon: ChartLine,
                label: "Statistics",
            },
        ],
    },
    {
        _id: "sideBar2",
        category: "Tools",
        links: [
            {
                _id: "toolsLink1",
                Icon: MessageCircleMore,
                label: "Chat",
            },
            {
                _id: "toolsLink2",
                Icon: Phone,
                label: "Support",
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.section}>
                {sideBarLinks.map((category) => (
                    <React.Fragment key={category._id}>
                        <span className={styles.categoryTitle}>{category.category}</span>
                        <div className={styles.navLinkFlex}>
                            {category.links.map((Link) => (
                                <div key={Link._id} className={styles.navLink}>
                                    <Link.Icon />
                                    <p>{Link.label}</p>
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
                <div className={styles.navLinkBottom}>
                    <Settings />
                    <p>Setting</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
