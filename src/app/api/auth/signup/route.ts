import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth/auth";


export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const { email, password } = await req.json();
        console.log({ email, password });
        if (!email || !password) {
            return NextResponse.json(
                { error: "لطفا اطلاعات معتبر وارد کنید" },
                { status: 422 }
            )
        };
        const existingUser = await User.findOne({ email });
        console.log(existingUser);

        if (existingUser) return NextResponse.json(
            { error: "این حساب کاربری وجود دارد" },
            { status: 422 }
        )

        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({
            email,
            password: hashedPassword
        });

        return NextResponse.json(
            { message: "حساب کاربری ایجاد شد" },
            { status: 200 }
        )

    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            {
                status: 500,
            }
        )
    }
}