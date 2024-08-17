import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostingDetail = () => {

    const [detail, setDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/Ilanlar?Id=${id}`)
            .then(response => response.json())
            .then(data => setDetail(data))
            .catch(error => console.log(error))
    })

    return (
        <div className>
            {detail.map(Details => (
                <div className="details">
                    <div className="details-img">
                        <img src={Details.job_image_url} />
                    </div>
                    <div className="details-text">
                        <h3>{Details.job_title}</h3>
                        <p>Category: "{Details.category}"</p>
                        <p>{Details.job_description}</p>
                        <p>{Details.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default PostingDetail;