'use client'

import Link from "next/link";
import { useState } from "react"
import QuizResult from "./QuizResult";

const questions = [
    {
        questionText: "How many colors are there in a rainbow?",
        answerOptions: [
            { answerText: "Six", isCorrect: false},
            { answerText: "Two", isCorrect: false},
            { answerText: "Five", isCorrect: false},
            { answerText: "Seven", isCorrect: true},
            
        ]
    },
    {
        questionText: "What is the color of the Sun?",
        answerOptions: [
            { answerText: "Blue", isCorrect: false},
            { answerText: "Red", isCorrect: false},
            { answerText: "Yellow", isCorrect: true},
            { answerText: "Black", isCorrect: false},
          
            
        ]
    },
    {
        questionText: " What is the color of the sky on a clear day?",
        answerOptions: [
            { answerText: "Blue", isCorrect: true},
            { answerText: "Red", isCorrect: false},
            { answerText: "Yellow", isCorrect: false},
            { answerText: "Black", isCorrect: false},
          
            
        ]
    },
    {
        questionText: "What is the capital city of India?",
        answerOptions: [
            { answerText: "Jaipur", isCorrect: false},
            { answerText: "New Delhi", isCorrect: true},
            { answerText: "Mumbai", isCorrect: false},
            { answerText: "Punjab", isCorrect: false},
          
            
        ]
    },
    {
        questionText: "Which is the largest state in India by area?",
        answerOptions: [
            { answerText: "Rajasthan", isCorrect: true},
            { answerText: "Gujrat", isCorrect: false},
            { answerText: "Mumbai", isCorrect: false},
            { answerText: "UP", isCorrect: false},
          
            
        ]
    },
    {
        questionText: "Name the festival of lights celebrated in India.",
        answerOptions: [
            { answerText: "Holi", isCorrect: false},
            { answerText: "Rakshabandhan", isCorrect: false},
            { answerText: "Diwali", isCorrect: true},
            { answerText: "Christmas", isCorrect: false},
          
            
        ]
    },
    {
        questionText: "What is the national sport of India?",
        answerOptions: [
            { answerText: "Cricket", isCorrect: false},
            { answerText: " Hockey", isCorrect: true},
            { answerText: "Kabaddi", isCorrect: false},
            { answerText: "Football", isCorrect: false},
           
            
        ]
    },
    {
        questionText: "6 months day and 6 months night - Country Name?",
        answerOptions: [
            { answerText: "Nepal", isCorrect: false},
            { answerText: "Tibet", isCorrect: false},
            { answerText: "Norway", isCorrect: true},
            { answerText: "Iceland", isCorrect: false},
            
        ]
    },
    {
        questionText: "Tansen, a great musician of his time, was in the court of –",
        answerOptions: [
            { answerText: "Akbar", isCorrect: true},
            { answerText: "Shahjahan", isCorrect: false},
            { answerText: "Bahadur Shah", isCorrect: false},
            { answerText: "Jahangir", isCorrect: false},
            
        ]
    },
    {
        questionText: "Name the Largest planet of our Solar System?",
        answerOptions: [
            { answerText: "Jupiter", isCorrect: true},
            { answerText: "Ploto", isCorrect: false},
            { answerText: "Mercury", isCorrect: false},
            { answerText: "Earth", isCorrect: false},
            
        ]
    },
    
]

export default function Quiz(){
    const [currentQuestion, setCurrentQuestion]= useState(0);
     const [score, setScore]= useState(0);
     const [correctAns, setCorrectAns]= useState(0);
     const [showResult, setShowResult]= useState(false);
     const [clicked, setClicked]= useState(false);
    const handleAnsweroption =(isCorrect)=>{
      if(isCorrect){
        setScore(score+5)
        setCorrectAns(correctAns+1)
      }
      setClicked(true)
    }

    const handleNextOption = ()=>{
        setClicked(false)
        const nextQuestion = currentQuestion+1
      
        if(nextQuestion<questions.length){
           
            setCurrentQuestion(nextQuestion)
        }else{
            setShowResult(true)
        }
       
    }

    const handlePlayAgain=()=>{
        setCurrentQuestion(0)
        setScore(0)
        setCorrectAns(0)
        setShowResult(false)
    }

    return(
        <div className="h-screen bg-fuchsia-500  flex justify-center items-center">
       <div className="flex justify-center items-center">
       <div className="bg-white  w-[350px] lg:w-[650px] p-5 border border-violet-500 shadow-teal-400 flex shadow-md  flex-col lg:flex-row lg:space-x-3 justify-center">
        {showResult?( <QuizResult score={score} correctAns={correctAns} questions={questions} handlePlayAgain={handlePlayAgain}/>):( <>
       <div className="lg:w-1/2 space-y-5 ">
                <h5 className="text-2xl font-medium">Score: {score}</h5>
                <div>
                    <span className="text-xl">Question { currentQuestion+1} of {questions.length}</span>
                </div>
                <div className="font-medium">
                    {questions[currentQuestion].questionText}
                </div>
            </div>

            <div className="flex flex-col space-y-3 mt-3 lg:w-1/2">
                {
                    questions[currentQuestion].answerOptions.map((ans, i)=>{
                       return  <button key={i} disabled={clicked} onClick={()=>handleAnsweroption(ans.isCorrect)} className={`py-2 px-6 bg-cyan-400 rounded-md text-xl cursor-pointer hover:bg-cyan-600 ${clicked && ans.isCorrect? 'bg-green-500 hover:bg-green-800':"py-2 px-6 bg-cyan-400 rounded-md text-xl hover:bg-cyan-600 cursor-pointer"}`}>{ans.answerText}</button>
                    })
                }
               
                <div className="flex justify-between items-center">
                    <Link href={'/'} className="mt-4 py-2 px-7 font-semibold text-xl bg-indigo-400 rounded-full hover:bg-indigo-600 focus cursor-pointer">Quit</Link>
                    <button className="mt-4 py-2 px-7 font-semibold text-xl bg-indigo-400 rounded-full hover:bg-indigo-600 focus cursor-pointer" disabled={!clicked} onClick={handleNextOption}>Next</button>
                </div>
            </div>
       </>)}
      
            
        </div>
       </div>
        </div>

    )
}
