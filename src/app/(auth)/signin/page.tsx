import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Signin from '@/components/Atom/Signin/Signin'
import React from 'react'

const page = async() => {

  const session = await getServerSession(authOptions);
  
  if (session) redirect("/")

  return <Signin />
}

export default page