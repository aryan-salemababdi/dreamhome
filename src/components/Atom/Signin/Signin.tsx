"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import styles from "@/components/Atom/Signup/Signup.module.css";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const signinHandler = async () => {
        setLoading(true);
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        setLoading(false);
        if (res?.error) alert("اطلاعات وارد شده درست نمی باشد")
        else router.push("/");
    };

    return (
        <div className={styles.form}>
            <h4>فرم ورود</h4>
            <form>
                <label>ایمیل:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>رمز عبور:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {loading ? (
                    <p>
                        لطفا صبر کنید
                    </p>
                ) : (
                    <button type="submit" onClick={signinHandler}>
                       ورود
                    </button>
                )}
            </form>
            <p>
                حساب کاربری ندارید؟
                <Link href="/signup">ثبت نام</Link>
            </p>
        </div>
    );
}

export default Signin;