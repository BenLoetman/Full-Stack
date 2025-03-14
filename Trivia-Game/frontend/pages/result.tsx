import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MainNavbar from "../components/MainNavbar";
import GetResults from "../components/GetResults";


// Call components navbar, and results.
const ResultPage = () => {
  return (
    <>
    <MainNavbar/>
    <GetResults/>
    </>
  );
};


export default ResultPage;
