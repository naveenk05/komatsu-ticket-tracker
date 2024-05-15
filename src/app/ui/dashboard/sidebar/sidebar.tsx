import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from '@/assets/logo.png';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import './sidebar.css';

interface NavItemProps {
    href: string;
    icon?: React.ReactNode;
    section?: string; // Optional section to target with hash link
    children: React.ReactNode;
}

const myImage: StaticImageData = logo;
const imageUrl: string = logo.src;

const NavItem: React.FC<NavItemProps> = ({ href, icon, section, children }) => {
    // const pathname = usePathname()

    return (
        <li>
            <Link href={href}>
                {icon && <span className="nav-icon">{icon}</span>}
                {children}
            </Link>

        </li>
    );
};

function sidebar() {
    return (
        <div className="sidenav">
            <div className="sidenav-logo">
                {/* Add your logo or branding here */}
                <img src={imageUrl} alt="Logo" />
            </div>
            <div>
                <nav className="sidenav-nav">
                    <ul>
                        <NavItem href="/">
                            <SpaceDashboardIcon className="nav-icon" /> Dashboard
                        </NavItem>
                        <NavItem href="/tickets">
                            <TimelineIcon className="nav-icon" /> Tickets
                        </NavItem>
                        <NavItem href="/orders">
                            <EqualizerIcon className="nav-icon" /> Orders
                        </NavItem>
                        <NavItem href="/products">
                            <FactCheckIcon className="nav-icon" /> Products
                        </NavItem>
                        <NavItem href="/reports">
                            <ContactSupportIcon className="nav-icon" /> Reports
                        </NavItem>
                        <NavItem href="/settings">
                            <SettingsIcon className="nav-icon" /> Settings
                        </NavItem>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default sidebar;


