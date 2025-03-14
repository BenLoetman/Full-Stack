// Display's question in grid format with title in middle then correct answer on the left and user answer on the right.
const DisplayQuestion = ({title, correct, user}) => {
    return (
        <>
            <h3 className="my-2 text-xl text-white text-center">{title}</h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 justify-items-center md:grid-rows-4 lg:grid-rows-2 my-6 gap-4">
                <h4 className="text-white">Correct Answer: {correct}</h4>
                <h4 className="text-white">Your Answer: {user}</h4>
            </div>
        </>
    );
}


export default DisplayQuestion;