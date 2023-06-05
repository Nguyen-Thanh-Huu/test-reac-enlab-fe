import { useLocation } from "react-router-dom"
import styles from "../css/Content.module.css"
import { Image } from "antd";


function Resume() {
    const location = useLocation();
    const { resume } = location.state;
    return (

        <div>
            {resume.map((item) => {
//   const correctAnswer = item.options.find((option) => option.correct === true);
  return (
    <div key={item.question}>
      <h2>{item.question}</h2>

      {item.options.map((option, index) => (
        <li
          key={index}
          className={
            // `${option} === ${item.answer} && ${item.answer.correct} ? ${styles.answer}  : ""  ${option} === ${item.answer} || ${item.answer.correct} ? ${styles.error}`
            option === item.answer && item.answer.correct ? styles.answer : ""
          }
        >
          {option.answer}
        </li>
      ))}

  
    </div>
  );
})}
        </div>

    )
}


export default Resume;