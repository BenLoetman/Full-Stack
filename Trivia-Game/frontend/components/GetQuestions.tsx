"use client"; 
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

const GetQuestions = () => {

  // Set variables.
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notAnswered, setNotAnswered] = useState(false);
  const [questionList, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});

  // Handle if user selects different answer.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, questionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: event.target.value,
    }));
  };

  // Calls API and stores question in setQuestions. 
  useEffect(() => {
    fetch('/api/getQuestions')
      .then((response) => response.json()) 
      .then((data) => {
        setQuestions(JSON.parse(data.RedisData.data));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      }); 
  }, []);

  
  const displayResult = () => {
    
    // Store question data to be passed into 
    const data = {};

    // Keep track of how many correct answers.
    let countCorrect = 0;

    // Loop through all answers.
    if (Object.keys(selectedAnswers).length === questionList.questions.length) {
      for (const key in selectedAnswers) {
        // Default user correct is false.
        let userCorrect = false;
        
        // Get correct answer of current question.
        const searchIdInt = parseInt(key, 10);
        const findQuestion = questionList.questions.find(question => question.id === searchIdInt);
        let correctAnswer = findQuestion[`choice${findQuestion.answer}`];
  
        // If user gets correct answer, set user correct to true and count + 1.
        if (correctAnswer === selectedAnswers[key]) {
          userCorrect = true;
          countCorrect += 1;
        }
  
        // Insert into dictonary. 
        data[key] = { 
          title: findQuestion.title,
          correct: correctAnswer, 
          user: selectedAnswers[key], 
          isCorrect: userCorrect 
        };
      }
      // Stores quiz data and percentage in local storage.
      localStorage.setItem("quizData", JSON.stringify(data));
      localStorage.setItem("percentCorrect", (countCorrect / questionList.questions.length) * 100);

      // Pushes to result page.
      router.push("/result");
    }
    else{
      setNotAnswered(true);
    }
  }

  // If loading.
  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <LoaderCircle className="w-16 h-16 text-purple-600 animate-spin" />
    </div>
  );

  // If error.
  if (error) return <p>Error: {error}</p>;


  // Loop through questions. Create a card with background. Loop through each choice and create clickable.
  return (
    <div className="grid grid-cols-1 my-12 mx-6 lg:mx-24 gap-12">
        {questionList.questions.map((question) => (
          <div key={question.id} className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 rounded-2xl">
            <h3 className="my-2 text-xl text-white text-center">{question.title}</h3>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 justify-items-center md:grid-rows-4 lg:grid-rows-2 my-6 gap-4">
              {[question.choice1, question.choice2, question.choice3, question.choice4].map((answer, index) => (
                <label key={index} className="flex w-80 items-center border bg-white border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
                  <input type="radio" onChange={(e) => handleChange(e, question.id)} name={`question-${question.id}`} value={answer} className="hidden peer"/>
                  <span className="w-full py-4 text-center font-medium text-gray-900 dark:text-gray-300 peer-checked:bg-indigo-100 dark:peer-checked:bg-indigo-900 peer-checked:rounded-2xl">
                    {answer}
                  </span>
                </label>
              ))}
              </div>
          </div>
        ))}
        {/* Create submit button. */}
        <button type="button" onClick={displayResult} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>

        {/* If question are not answered. */}
        {notAnswered && <p className="text-red-900">Some questions are still unanswered.</p>}
    </div>
  );
};

export default GetQuestions;