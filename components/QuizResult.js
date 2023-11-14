import React from 'react'

const QuizResult = ({score, correctAns, questions, handlePlayAgain}) => {
  return (
    <div className='flex flex-col w-full justify-center items-center space-y-3'>
      <h2 className='text-2xl font-bold'>Completed!</h2>
      <h4 className='text-xl'>Total Score {score}/50</h4>
      <h4 className='text-xl'>Your Correct Question {correctAns} out of {questions.length}</h4>
      <button className='mt-4 py-2 px-7 font-semibold text-xl bg-indigo-400 rounded-full hover:bg-indigo-600 focus cursor-pointer' onClick={handlePlayAgain}>Play Again</button>
    </div>
  )
}

export default QuizResult
