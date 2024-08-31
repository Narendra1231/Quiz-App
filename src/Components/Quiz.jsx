import { useState } from 'react';
import '../Components/Quiz.css'
import { useRef } from 'react';
const Quiz=()=>{
  
    const data=[
        {
            question:" What does CSS stand for?",
            option1:"Cascading Style Sheets",
            option2:"Computer Style Sheets",
            option3:"Creative Style Sheets",
            option4:"Colorful Style Sheets",
            ans:1
        },
        {
            question:"Which property is used to change the background color of an element?",
            option1:"color",
            option2:"background-color",
            option3:"bgcolor",
            option4:"color-background",
            ans:2
        },
        {
            question:"How do you select an element with the class intro in CSS?",
            option1:".intro",
            option2:"#intro",
            option3:"intro",
            option4:"*intro",
            ans:1
        },
        {
            question:"Which property is used to change the text color of an element?",
            option1:"text-color",
            option2:"color",
            option3:"font-color",
            option4:"text-style",
            ans:2
        },
        {
        question:"What is the default value of the position property?",
        option1:"relative",
        option2:"absolute",
        option3:"static",
        option4:"fixed",
        ans:3
           
        },
        {
        question:"How do you apply a left margin of 20 pixels to an element?",
        option1:"margin-left: 20px;",
        option2:"padding-left: 20px;",
        option3:"left-margin: 20px;",
        option4:"margin: 20px left;",
        ans:1
        },
        {
        question:"Which of the following is the correct syntax for a CSS comment?",
        option1:"<!-- This is a comment -->",
        option2:"/* This is a comment */",
        option3:"// This is a comment",
        option4:"# This is a comment",
        ans:2
        },
        {
        question:"Which CSS property controls the text size?",
        option1:"font-style",
        option2:"font-weight",
        option3:"font-size",
        option4:"text-size",
        ans:3
        },
        {
        question:"How would you apply a linear gradient background that transitions from blue to green in CSS?",
        option1:"background: linear-gradient(blue, green);",
        option2:"background: gradient(blue to green);",
        option3:"background-color: gradient(blue, green);",
        option4:"background: gradient(linear, blue, green);",
        ans:1
        },
        {
        question:"Which CSS property is used to control the order of flexible items in a flexbox container?",
        option1:"order**",
        option2:"flex-order",
        option3:"z-index",
        option4:"flex-direction",
        ans:1
        }
    ];

    let [index,setIndex]=useState(0);
    let [question,setQuestion]=useState(data[index]);
    let [lock,setLock]=useState(false);
    let [score,setScore]=useState(0);
    let [result,setResult]=useState(false);

    let Option1=useRef(null);
    let Option2=useRef(null);
    let Option3=useRef(null);
    let Option4=useRef(null);
    let option_Arr=[Option1,Option2,Option3,Option4];

   const checkAns=(e,ans)=>{
    if(lock===false){
        if(question.ans===ans){
            e.target.classList.add("correct");
            setLock(true);
            setScore(prev=>prev+1);
        }
        else{
            e.target.classList.add("wrong");
            setLock(true);
            option_Arr[question.ans-1].current.classList.add("correct");
        }
    }
   }
   const next=()=>{
    if(lock===true){
        if(index===data.length-1){
            setResult(true);
            return 0;
        }
        setIndex(++index);
        setQuestion(data[index]);
        setLock(false);
        option_Arr.map((option)=>{
            option.current.classList.remove("wrong");
            option.current.classList.remove("correct");
            return null;
        })
    }
   }
   const reset=()=>{
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
   }
   const submit=()=>{
    
        setResult(true);
        return 0;
   }
    return(
        <div className="quiz-app">
          <h2>Quiz App</h2>
          <hr/>
          {result?<></>:<>
            <h3>{index+1}.{question.question}</h3>
          <ul>
            <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
            <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
            <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
            <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
          </ul>
          <div className='btn'>
          <button onClick={next} className="btnn">next</button>
          <button onClick={submit} className="btnn">submit</button>
          </div>
          <h4>{index+1}of {data.length}</h4>
          </>}
          {result?<>
            <h2>You Score {score} out of {data.length}</h2>
            <button onClick={reset} className='btnn'>Reset</button></>
            :<></>}
          
        </div>
    );
}
export default Quiz;