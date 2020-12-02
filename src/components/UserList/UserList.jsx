import React from 'react'
//import component
import Searchbar from '../Searchbar/Searchbar'
import {connect} from 'react-redux';
import searchResults from '../../selectors/searchBarSelector'
import * as actions from '../../actions/actions'

const UserList = ({users, joke, removeUser, getJoke}) => {

    return(
        <div className='UserList-Inner'>
            <Searchbar />
            <div className="UserList-Wrapper UserList-Wrapper_chuck" key={'ChuckNorris'}>
                <div className="UserList-Avatar UserList-Avatar_chuck">
                    <img src='./chuck.jpg' alt="" className="UserList-Photo UserList-Photo_chuck"/>
                </div>
                <div className="UserList-Info UserList-Info_chuck">
                    <div className="UserList-ChuckCard">
                        <div className='UserList-ChuckInfo'>
                        <div className="UserList-About">
                                <div className="UserList-Details">
                                    <div className="UserList-Name">
                                        Chuck Norris
                                    </div>
                                    <div className="UserList-Gender">
                                        Male
                                    </div>
                                </div>
                            </div>
                            <div className="UserList-Descr">
                                <div className="UserList-Registration">
                                    Right after big bang
                                    <span className='UserList-Date'>Registration date</span>
                                </div>
                            </div>
                        </div>
                        <div className="UserList-ChuckJoke">
                        {joke.Joke}
                        </div>
                    </div>
                    <button className={joke.IsLoading ? "UserList-Remove UserList-Remove_chuck UserList-Remove_chuck_load" : "UserList-Remove UserList-Remove_chuck"} onClick={getJoke}>what?</button>
                </div>
            </div>
            <ul className='UserList'>
            {users.map((item) => {
                    return(
                        <li className="UserList-Wrapper" key={item.id}>
                            <div className="UserList-Avatar">
                                <img src={item.gender === 'Male' ? './man.png' : './woman.png'} alt="" className="UserList-Photo"/>
                            </div>
                            <div className="UserList-Info">
                                <div className="UserList-About">
                                    <div className="UserList-Details">
                                        <div className="UserList-Name">
                                            {item.name}
                                        </div>
                                        <div className="UserList-Gender">
                                            {item.gender}
                                        </div>
                                    </div>
                                    <div className="UserList-Card">
                                        {item.creditCard.substring(0,2)}******{item.creditCard.substring(0,4)}
                                        <span className='UserList-Credit'>Credit Card</span>
                                    </div>
                                </div>

                                <div className="UserList-Descr">
                                    <div className="UserList-Registration">
                                        {item.registrationTime}
                                        <span className='UserList-Date'>Registration date</span>
                                    </div>
                                    <div className={item.loyaltyProgram ? 'UserList-Loyalty UserList-Loyalty_active' : "UserList-Loyalty"}>
                                        Loyalty
                                    </div>
                                    <div className="UserList-Coupone">
                                        {item.loyaltyCode ? item.loyaltyCode : 'None' }
                                        <span className='UserList-Code'>Coupone code</span>
                                    </div>
                                    
                                </div>
                                <button className="UserList-Remove" onClick={()=>{removeUser(item.id)}}><img className="UserList-Trash" src="./delete.png" alt="delete"/></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        users: searchResults(state),
        joke: state.chuckJokes
    }
}

export default connect(mapStateToProps, actions)(UserList);