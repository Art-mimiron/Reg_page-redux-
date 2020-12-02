import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions'
import './Searchbar.sass';

class Searchbar extends Component {
    render() {
        return (
            <div className='Searchbar'>
            <input 
            className="Searchbar-Input"
            type="text"
            value={this.props.query}
            onChange={(e) => this.props.searchQuery(e)}
            id='searchbar'
            required
            />
            <label htmlFor="searchbar" className='Searchbar-Label'>
                <span className='Searchbar-Title'>SEARCH QUERY</span>
            </label>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    query: state.searchBar
});

export default connect(mapStateToProps, actions)(Searchbar);