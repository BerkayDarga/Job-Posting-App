import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const JobPostings = () => {

    const [jobPosting, setJobPosting] = useState([])

    const [searchPost, setSearchPosting] = useState([])



    useEffect(() => {
        fetch("http://localhost:4000/Ilanlar")
            .then(response => response.json())
            .then(data => {
                setJobPosting(data)
                setSearchPosting(data)
            })
            .catch((error => console.log(error)))
    }, []);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase(); // Girilen değeri küçük harfe dönüştür

        // job title'a göre filtreleme yap
        const filteredListings = jobPosting.filter(job =>
            job.job_title.toLowerCase().includes(searchTerm)
        );
        // Filtrelenmiş iş ilanlarını state'e ata
        setSearchPosting(filteredListings);
    };



    const navigation = useNavigate();

    const detailPage = (PostingsId) => {
        navigation(`/PostingDetail/${PostingsId}`)
    }


    const filterLocation = (e) => {
        const searchTerm = e.target.textContent.toLowerCase(); // Girilen değeri küçük harfe dönüştür

        // job title'a göre filtreleme yap
        const filteredListings = jobPosting.filter(job =>
            job.location.toLowerCase().includes(searchTerm)
        );
        // Filtrelenmiş iş ilanlarını state'e ata
        setSearchPosting(filteredListings);
    };

    const filterCategory = (e) => {
        const searchTerm = e.target.textContent.toLowerCase(); // Girilen değeri küçük harfe dönüştür

        // job title'a göre filtreleme yap
        const filteredListings = jobPosting.filter(job =>
            job.category.toLowerCase().includes(searchTerm)
        );
        // Filtrelenmiş iş ilanlarını state'e ata
        setSearchPosting(filteredListings);
    };


    return (

        <div className="wrapper">


            <div className="header">
                <h1>İş İlan Portalı</h1>

                <div className="container">
                    <input type="text" className="search" onChange={handleSearch} placeholder='Job' />
                </div>
            </div>
            <div className="postings">

                <div class="menu-container">
                    <div class="menu-item">Category</div>
                    <div class="options">
                        <button onClick={filterCategory}>Yazılım Geliştirme</button>
                        <button onClick={filterCategory}>Mobil Geliştirme</button>
                        <button onClick={filterCategory}>Veri Bilimi</button>
                        <button onClick={filterCategory}>Siber Güvenlik</button>
                        <button onClick={filterCategory}>Bulut Bilişim</button>
                        <button onClick={filterCategory}>Yapay Zeka</button>
                        <button onClick={filterCategory}>Web Geliştirme</button>
                        <button onClick={filterCategory}>Tasarım</button>
                        <button onClick={filterCategory}>Proje Yönetimi</button>
                        <button onClick={filterCategory}>DevOps</button>
                    </div>
                </div>


                <div class="menu-container location">
                    <div class="menu-item">Location</div>
                    <div class="options">
                        <button onClick={filterLocation}>İstanbul, Türkiye</button>
                        <button onClick={filterLocation}>Ankara, Türkiye</button>
                        <button onClick={filterLocation}>İzmir, Türkiye</button>
                        <button onClick={filterLocation}>Bursa, Türkiye</button>
                        <button onClick={filterLocation}>Antalya, Türkiye</button>
                        <button onClick={filterLocation}>Adana, Türkiye</button>
                        <button onClick={filterLocation}>Gaziantep, Türkiye</button>
                        <button onClick={filterLocation}>Konya, Türkiye</button>
                        <button onClick={filterLocation}>Kayseri, Türkiye</button>
                        <button onClick={filterLocation}>Samsun, Türkiye</button>
                    </div>
                </div>


                {searchPost.map(postings => (
                    <button className="jobPostingButton" onClick={() => detailPage(postings.Id)}>
                        <div className="jobpostingbutton-img">
                            <img src={postings.job_image_url} />
                        </div>
                        <div className="description">
                            <h3>{postings.job_title}</h3>
                            <p>{postings.category}</p>
                            <p>{postings.location}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
export default JobPostings;