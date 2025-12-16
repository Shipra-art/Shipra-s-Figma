import React from "react";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Blog from "./Components/Blog";
// import Home from "./Components/Home";
import Services from "./Components/Services";
import Questions from "./Components/Questions";


// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/Blog" element={<Blog />} />
//         <Route path ="/Services" element={<Services/>}/>
//         <Route path ="/Questions" element={<Questions/>}/>
//       </Routes>
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;



