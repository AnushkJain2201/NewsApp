// import './App.css';

// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import LoadingBar from 'react-top-loading-bar'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// export default class App extends Component {
//   apiKey = process.env.REACT_APP_NEWS_API
//   pageSize = 6;
//   state = {
//     progress: 0
//   }
//   setProgress = (progress) =>{
//     this.setState({progress: progress})
//   }
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <NavBar />
//           <LoadingBar
//             height={3}
//             color='#f11946'
//             progress={this.state.progress}
//           />
//           <Routes>
//             <Route path="/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={6} country="in" category="general" />} />
//             <Route path="/business/*" element={<News setProgres ={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={6} country="in" category="business" />} />
//             <Route path="/entertainment/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={6} country="in" category="entertainment" />} />
//             <Route path="/general/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={6} country="in" category="general" />} />
//             <Route path="/health/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={6} country="in" category="health" />} />
//             <Route path="/science/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={6} country="in" category="science" />} />
//             <Route path="/sports/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={6} country="in" category="sports" />} />
//             <Route path="/technology/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={6} country="in" category="technology" />} />
//           </Routes> apiKey={this.apiKey}
//         </BrowserRouter>
//       </div>
//     )
//   }
// }

import './App.css';

import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  // const pageSize = 6;
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path="/*" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/business/*" element={<News setProgres ={setProgress} apiKey={apiKey}  key="business" pageSize={6} country="in" category="business" />} />
            <Route path="/entertainment/*" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route path="/general/*" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/health/*" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={6} country="in" category="health" />} />
            <Route path="/science/*" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={6} country="in" category="science" />} />
            <Route path="/sports/*" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={6} country="in" category="sports" />} />
            <Route path="/technology/*" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={6} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App