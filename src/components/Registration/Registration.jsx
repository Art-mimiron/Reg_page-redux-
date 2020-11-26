import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'


class Registration extends Component {
    constructor() {
        super();
        this.confirmRef = React.createRef();
        this.btn = React.createRef();
        this.cardInput = React.createRef();
        
    }
    // add new user + reset fields
    setUser = (e) => {
        e.preventDefault();
        this.submitMessage();
        e.target.reset();
        this.props.addUser(this.props.state);
        this.props.resetTemplate();
    }

    // successfully submitting alert
    submitMessage = () => {
        const btn = this.btn.current;
        const confirm = this.confirmRef.current;
        const cardIpnut = this.cardInput.current;
        btn.parentNode.classList.add('slide', 'fade')
        cardIpnut.classList.remove('Visa', 'Master-Card', 'Discover', 'American-Express')
        setTimeout(()=>{confirm.style='opacity: 1'}, 300)
        setTimeout(()=>{confirm.style='opacity: 0'}, 1800)
        setTimeout(()=>{btn.parentNode.classList.remove('slide')}, 2000)
        setTimeout(()=>{btn.parentNode.classList.remove('fade')}, 13000)
    }

    
    render() {
        return(
        <>
            <div className="Registration">
                <div className="Registration-Picture">
                    <span className='Registration-Message'>BE PART OF OUR AWESOME TEAM AND HAVE FUN WITH US</span>
                    <img className='Registration-Man' src="./reg_man.png" alt="welcome"/>
                </div>
                <form 
                className='Registration-Form' 
                onSubmit={this.setUser}>
                    <ul className='Registration-Wrapper'>
                        <li className='Registration-Field'>
                            <input 
                            className='Registration-Input' 
                            type="text" 
                            name='name' 
                            id='name' 
                            value={this.props.state.name} 
                            onChange={(e) => this.props.nameValidation(e)} 
                            required/>
                            <label className='Registration-Label' htmlFor='name'><span className='Registration-Title'>FULL NAME</span></label>
                        </li>
                        <li className='Registration-Field'> 
                            <select 
                            className='Registration-Input' 
                            type="text" 
                            name='gender' 
                            id='gender' 
                            value={this.props.state.gender} 
                            onChange={(e) => this.props.newUser(e)} 
                            required>
                                <option className='Registration-Option' disabled value=""></option>
                                <option className='Registration-Option' value="Male">Male</option>
                                <option className='Registration-Option' value="Female">Female</option>
                            </select>
                            <label className='Registration-Label' htmlFor='gender'><span className='Registration-Title'>GENDER</span></label>
                        </li>
                        <li className='Registration-Field' ref={this.cardInput}>
                            <input 
                            className='Registration-Input' 
                            type="tel" 
                            name='creditCard' 
                            id='creditCard' 
                            value={this.props.state.creditCard} 
                            onChange={(e) => this.props.creditCardValidation(e)}  
                            required />
                            <label className='Registration-Label' htmlFor='creditCard'><span className='Registration-Title'>CREDIT CARD</span></label>
                        </li>
                        <li className='Registration-Field Registration-Field_loyalty'>
                            <input 
                            className='Registration-Input_loyalty' 
                            type="checkbox" 
                            name='loyaltyProgram' 
                            id='loyaltyProgram' 
                            value={this.props.state.loyaltyProgram} 
                            onChange={(e) => this.props.newUser(e)} 
                            onClick={this.props.loyaltyCodeReset} />
                            <label className='Registration-Label' htmlFor='loyaltyProgram'><span>LOYALTY CODE?</span></label>
                        </li>
                        <li className={this.props.state.loyaltyProgram ? 'Registration-Promo Registration-Promo_active' : 'Registration-Promo'}>
                            <input 
                            placeholder='CODE' 
                            className='Registration-Input' 
                            type="text" name='loyaltyCode' 
                            value={this.props.state.loyaltyCode} 
                            onChange={(e) => this.props.newUser(e)} 
                            maxLength='9' 
                            required={this.props.state.loyaltyProgram ? true : false}></input>
                        </li>
                        <button className='Registration-Button' ref={this.btn}>ADD A NEW MEMBER</button>
                    </ul>
                        <div className="Registration-Confirmation" ref={this.confirmRef}>NEW BROTHERINO CONFIRMED</div>
                </form>
            </div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state.newUser
});

export default connect(mapStateToProps, actions)(Registration);