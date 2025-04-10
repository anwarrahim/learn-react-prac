function AboutMe(props){

    return(
        <>
        
        <div className="my-name-and-career">
            <h1>{props.myName}</h1>
            <p>{props.careerDasignation}</p>
        </div>
        
        </>
    )
}

export default AboutMe