import React, { ReactNode } from "react";
import { LayoutProps } from "../../../.next/types/app/layout";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { CenterFocusStrong } from "@mui/icons-material";
import sidebar from "../ui/dashboard/sidebar/sidebar";


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
        <Grid alignContent={"center"} container spacing={2}>
            <Grid lg={6}>
                <Sidebar/>
            </Grid>
            <Grid lg={2}>
                <div>xs=4</div>
            </Grid>
            <Grid lg={12}>
                <div>xs=4</div>
            </Grid>
            <Grid xs={8}>
                <div>xs=8</div>
            </Grid>
        </Grid>
        // <div>
        //   <div>
        //     <Sidebar/>
        //   </div>
        //   <div>
        //     <Navbar/>
        //     {children}
        //   </div>
        // </div>
    )
}

export default layout
