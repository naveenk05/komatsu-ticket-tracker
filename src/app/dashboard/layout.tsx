import React, { ReactNode } from "react";
import { LayoutProps } from "../../../.next/types/app/layout";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { CenterFocusStrong, Style } from "@mui/icons-material";
import sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from '../ui/dashboard/dashboard.module.css';

export interface props {
    children?: ReactNode;
}

// const div = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
          <div className={styles.menu}>
            <Sidebar/>
          </div>
          <div className={styles.content}>
            <Navbar/>
            {children}
          </div>
        </div>
    )
}

export default layout
