import { useState, useEffect } from 'react'
import './App.css'
import JobPostings from './JobPostings'

function App() {


  const [jobPosting, setJobPosting] = useState([])


  useEffect(() => {
    fetch("http://localhost:4000/Ilanlar")
      .then(response => response.json())
      .then(data => setJobPosting(data))
      .catch((error => console.log(error)))
  }, []);


  return (
    <>

      <div className="postings">
        {jobPosting.map(postings => (
          <JobPostings key={postings.Id} image={postings.job_image_url} title={postings.job_title} category={postings.category} button={postings.button}/>
        ))}
      </div>

    </>
  )
}

export default App
