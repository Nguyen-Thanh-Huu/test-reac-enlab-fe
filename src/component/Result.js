import { useLocation, useNavigate } from "react-router-dom";
import { Button, Image } from "antd";
function Result() { 
  const navigate = useNavigate();
  const location = useLocation();
  const { countCorrect, timeTaken, resume } = location.state; 
  const customTime = Math.floor(timeTaken);

  const handlePlayAgain = () => {
    navigate("/");
  };

  const handleClickResume = () => {
    navigate("/resume", { state: { resume } });
  };

  return (
    <div>
      {countCorrect > 4 ? (
        <div>
          <Image
            width={400}
            src="https://www.shutterstock.com/image-vector/congratulations-typography-lettering-handwritten-vector-260nw-1049534216.jpg"
          />
          <h1> Congrats on passing the exam !!!!!</h1>
          <h3>Number of correct answers: {countCorrect} </h3>
          <p> Total execution time: {customTime}</p>
          <Button type="primary" onClick={handlePlayAgain}>
            Play Again
          </Button>
          <Button
            style={{ margin: "1rem" }}
            type="primary"
            onClick={handleClickResume}
          >
            Resume
          </Button>
        </div>
      ) : (
        <div>
            <Image width={400} src="https://www.shutterstock.com/image-vector/fail-rubber-stamp-sign-grunge-260nw-344519003.jpg"/>
          <h1> You did not pass the exam !!!!!</h1>
          <h3>Number of correct answers: {countCorrect} </h3>
          <p> Total execution time: {customTime}</p>
          <Button type="primary" onClick={handlePlayAgain}>
            Play Again
          </Button>
          <Button
            style={{ margin: "1rem" }}
            type="primary"
            onClick={handleClickResume}
          >
            Resume
          </Button>
        </div>
      )}
    </div>
  );
}

export default Result;
