import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DisplayQuestion from './DisplayQuestion';


const ResultPage = () => {
  // Set variables.
  const router = useRouter();
  const [parsedData, setParsedData] = useState<any>(null);
  const [getPercent, setPercent] = useState(0);

  // Get question and percent from local storage.
  useEffect(() => {
    const storedData = localStorage.getItem('quizData');
    const storedPercent = localStorage.getItem('percentCorrect');

    const parsedStoredData = JSON.parse(storedData);

    setPercent(storedPercent)
    setParsedData(parsedStoredData);
  }, []);

  // If loading.
  if (!parsedData) {
    return <div>Loading...</div>; 
  }

  return (
    <>
    {/* Display percent. */}
      <div className="grid grid-rows-1">
        <span className="my-10 text-center text-2xl">Your Score: {getPercent}%</span>
      </div>
      {/* Loop through questions. If correct backgroud is green else red.*/}
      {Object.entries(parsedData).map(([key, value]) => (
        <div key={key}>
            {value.isCorrect ? (
             <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 rounded-2xl md:mx-24 my-12 mx-6">
                <DisplayQuestion title={value.title} correct={value.correct} user={value.user} />
            </div>
            ) : (
            <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 rounded-2xl md:mx-24 my-12 mx-6">
                <DisplayQuestion title={value.title} correct={value.correct} user={value.user} />
            </div>
            )}
        </div>
        ))}
        {/* Button to play again. */}
        <div className="grid grid-rows-1 grid-cols-1 mx-6 md:mx-24 mb-4">
          <button type="button" onClick={() => router.push("/")} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Play Again</button>
        </div>
    </>
  );
};


export default ResultPage;
