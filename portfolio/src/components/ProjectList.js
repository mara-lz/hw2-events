function ProjectList({projects}) {
    return (
        <div className="project-list">
            {
                projects.map((image,idx) => {
                    return (
                        <div className="project" key={"image-"+idx}>
                        <img src={image.img} alt={image.category}/>
                        </div>)
                })
            }
        </div>
    );
}

export default ProjectList;