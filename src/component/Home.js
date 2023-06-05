import { Link, useNavigate } from "react-router-dom";
import { Image, Button } from "antd";
import { useState } from "react"; 



function Home() {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(0);

  const handleStartTest = () => {
    const startTime  = (window.performance.now());
    navigate("/content",  { state: { startTime } })
  };
  return (
    <div>
      <div>
        <h1>Home</h1>
        <Image
          width={400}
          src="https://www.shutterstock.com/image-photo/beginning-path-start-symbol-initiation-260nw-1322965607.jpg"
        />
        <Button onClick={() => handleStartTest()} type="primary" style={{display: "block", marginLeft:"49%", marginTop: "2rem"}}>
          {/* <Link to="/content"> Start </Link> */}
          Start
        </Button>
        
      </div>
    </div>
  );
}

export default Home;
