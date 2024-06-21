// import "./globals.css";

"use client"
import { useState } from "react";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

type LayoutProps = {
  children: React.ReactNode;
}
// 同层级 page 会作为 children 参数传入 layout
export default function Layout({ children }: LayoutProps) {
  const [num, setNum] = useState(0)
  return (
    <>
      <div>dashboard-layout</div>
      <div>{children}</div>
      <div>dashboard-{num}</div>
      <button onClick={()=>setNum(num+1)}>dashboard按钮 +1</button>
    </>
  );
}