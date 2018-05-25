import React, { Component } from 'react';
import {connect} from 'react-redux';
import Pet from './components/Pet'
import {FETCH_DOGS_SUCCESS, fetchDog, adoptDog} from './actions/dog'
import {FETCH_CATS_SUCCESS, fetchCat, adoptCat} from './actions/cat'


class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(fetchDog())
        this.props.dispatch(fetchCat())
    }

    render() {
        const bindThis = this;
        function dispatchAdoptCat() {
            bindThis.props.dispatch(adoptCat());
        } 
        function dispatchAdoptDog() {
            bindThis.props.dispatch(adoptDog());
        }
        return (
        <div>
            <p>Adoptions are first come first serve, with each pet at the front of the queue being available for adoption. Only the current cat or dog shown may be adopted.</p>
            <div className="cats">
                <Pet pet='cat' petToAdopt={this.props.catToAdopt} adopt={dispatchAdoptCat}/>
            </div>
            <div className="dogs">
                <Pet pet='dog' petToAdopt={this.props.dogToAdopt} adopt={dispatchAdoptDog}/>
            </div> 
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        catToAdopt: state.petReducer.catToAdopt,
        dogToAdopt: state.petReducer.dogToAdopt
    }
  }
  
  
export default connect(mapStateToProps)(Dashboard)
