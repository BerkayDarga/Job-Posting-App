const JobPostings = (postingProps) => {
    const image = postingProps.image;
    const title = postingProps.title;
    const category = postingProps.category;
    const button = postingProps.button;

    return (
        <div className="advertisements">
            <div>
                <img src={image} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{category}</p>
                <button>{button}</button>
            </div>
        </div>

    );
}
export default JobPostings;