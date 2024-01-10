import { NextPage } from "next";
import Link from "next/link";
import styles from "@/components/Atom/Header/Header.module.css";

const Header: NextPage = () => {
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
            <div className={styles.login}>
                <Link href="/signin">
                    <span>ورود</span>
                </Link>
            </div>
        </header>
    )
}

export default Header;