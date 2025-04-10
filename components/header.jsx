
function Header(props){

    return (
        <>
            <div className="experience">
                <div className="experience-wrapper">
                    <div className="expirence-year">
                        <span>{props.yearExp}</span>
                        
                    </div>
                    <p>Years Exp</p>
                </div>
                 <div className="profile-pic">
                    <img className='main-profile-img' src={props.myProfileUrl} alt={props.altText} />
                </div>
                 <div className="experience-wrapper">
                    <div className="expirence-year">
                        <span>{props.hourlyRate}</span>
                        
                    </div>
                    <p>Hourly Rate</p>
                </div>
            </div>
           
        </>
    )
}

export default Header