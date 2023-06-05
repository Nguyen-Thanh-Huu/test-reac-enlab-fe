
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import Home from "./Home";
import Content from "./Content"
import Result from "./Result"; 
import Resume from "./Resume"

function Container() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/content" element={<Content />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export  default Container;