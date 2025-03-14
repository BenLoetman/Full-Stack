import GetQuestions from '../components/GetQuestions'; 
import MainNavbar from "../components/MainNavbar";

export default function Home() {

  // Display the navbar and questions. 
  return (
    <>
      <MainNavbar/>
      <GetQuestions/>
    </>
  );
}
