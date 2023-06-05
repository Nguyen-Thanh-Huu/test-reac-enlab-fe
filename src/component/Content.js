import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOption } from "../feature/optionT/OptionSlice";
import { getAllQuestion } from "../feature/question/QuestionSlice";
import { useState } from "react";
import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../css/Content.module.css";

function Content() {
  const location = useLocation(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const options = useSelector((state) => state.optionReducer.option);
  const allQuestion = useSelector((state) => state.questionReducer.questions);
  const { startTime } = location.state;
 

  const [item, setItem] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [countCorrect, setCountCorrect] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [resume, setResume] = useState([]); 
  


  React.useEffect(() => {
    async function fetchData() {
      await dispatch(getAllOption());
      await dispatch(getAllQuestion());
      setIsLoading(false);
    }

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // handle when click answer
  const handleAnswerClick = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    } else if (selectedAnswer === answer) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(answer);
    }
  };

  const currentQuestion = allQuestion.find((question) => question.id === item);
  const currentAnswer = options.filter( (ans) => ans.idquestion === currentQuestion?.id );
  // render question , answer
  const renderQuestionAndAnswer = () => {
    return (
      <div>
        <div>
          <h3> Question number: {item}/10</h3>
          <h1>{currentQuestion.question}</h1>
        </div>
        <div>
          <ul className={styles.none}>
            {currentAnswer.map((item, index) => {
              const isSelected = item === selectedAnswer;
              return (
                <li
                  className={isSelected ? `${styles.answer}` : ""}
                  key={index}
                  onClick={() => handleAnswerClick(item)}
                  >
                  {item.answer}
                </li> 
                
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  // handle click next, when finish redirect page result
  const handleClickNext = () => {
    if (selectedAnswer && selectedAnswer.correct === true) {
      setCountCorrect((pre => pre + 1));
    }
    setSelectedAnswer("")
   
    setResume([
      ...resume,
      {
        question: currentQuestion.question,
        options: currentAnswer,
        answer: selectedAnswer,
      },
    ]);
    if (item === 10) {
       const endTime = (window.performance.now());
      navigate("/result", { state: { countCorrect, timeTaken: (endTime - startTime) / 1000 , resume} });
    } else {
      setItem(item + 1);
    }
  };

  return (
    <div>
      main
      {renderQuestionAndAnswer()}
      <Button type="primary" onClick={handleClickNext}>
        Next
      </Button>
    </div>
  );
 
}
export default Content;
