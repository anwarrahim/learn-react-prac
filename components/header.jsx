import MyProfile from '../src/assets/images/mypic-edits.png'

function Header(props){

    return (
        <>
            <div className="experience">
                <div className="experience-wrapper">
                    <div className="expirence-year">
                        <span>2+</span>
                        
                    </div>
                    <p>Years Exp</p>
                </div>
                 <div className="profile-pic">
                <img className='main-profile-img' src={MyProfile} alt="" />
            </div>
            </div>
           
        </>
    )
}

export default Header