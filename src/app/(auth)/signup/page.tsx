import {getServerSession} from "next-auth";
import  authOptions  from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Signup from '@/components/Atom/Signup/Signup';
import React from 'react';

const page = async () => {

  const session = await getServerSession(authOptions);

  if (session) redirect("/");
  
  return <Signup />
}

export default page