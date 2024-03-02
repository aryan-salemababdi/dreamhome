"use client"
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import styles from "@/components/Atom/Header/Header.module.css";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

const Header: NextPage = () => {

    const data = useSession()

    return (
        <header className={styles.header}>
            <div>
                <ul>
                    <li>
                        <Link href="/">صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link href="/buy-residential">آگهی ها</Link>
                    </li>
                </ul>
            </div>
            {
                data.data === undefined ? (
                    <div className={styles.login}>
                        <Link href="/signin">
                            ورود
                        </Link>
                    </div>
                ) : (
                    <div className={styles.login}>
                        <Link href="/dashboard">
                            <SpaceDashboardIcon />
                        </Link>
                    </div>
                )
            }
        </header>
    )
}

export default Header;