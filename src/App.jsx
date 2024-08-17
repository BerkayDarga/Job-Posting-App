import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import JobPostings from '../src/JobPostings'
import PostingDetail from "../src/PostingDetail"
import Header from "../src/Header"

function App() {

  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<JobPostings />} />
          <Route path="/PostingDetail/:id" element={<PostingDetail />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
