"use client";
import CompanyInfo from "@/app/component/CompanyInfo";
import DocumentInfo from "@/app/component/DocumentInfo";
import RegisterInfo from "@/app/component/RegisterInfo";
import { useState } from "react";
export default function Home() {
  const Authlogo = "probuy.png";
  const topRight = "topRight.png";
  const leftBottom = "leftBottom.png";
  const [pagePosition, setPagePosition] = useState("first");
  const pageChange = (page:string) =>{
    setPagePosition(page)
  }
  return (
    <>
      {pagePosition == "first" ? (
        <CompanyInfo topRight={topRight} Authlogo={Authlogo} leftBottom={leftBottom} onPageChange={pageChange}/>
      ) : null}
      {pagePosition == "second" ? (
        <RegisterInfo topRight={topRight} Authlogo={Authlogo} leftBottom={leftBottom} onPageChange={pageChange}/>
      ) : null}
      {pagePosition == "third" ? (
        <DocumentInfo opRight={topRight} Authlogo={Authlogo} leftBottom={leftBottom} onPageChange={pageChange}/>
      ) : null}
    </>
  );
}
