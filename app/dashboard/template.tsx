"use client"
import { useState } from "react";

import Link from 'next/link'

type TemplateProps = {
  children: React.ReactNode;
}
export default function Template({ children }: TemplateProps) {
  const [num, setNum] = useState(0)

  return (
    <>
      <div>dashboard-template</div>
      <div>{children}</div>
      <div>template-{num}</div>
      <button onClick={() => setNum(num + 1)}>template按钮 +1</button>


      <div>
        <Link href="/dashboard/settingPage">跳转</Link>
      </div>
    </>
  )
}