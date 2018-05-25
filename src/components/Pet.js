import React, { Component } from 'react';

class Pet extends Component {
    render() {
        if (!this.props.petToAdopt.data.name) {
            return (
            <div>
                <h1>Sorry, there are currently no other {this.props.pet}s for adoption.</h1>
            </div>
            )
        } else {
            const pet = this.props.petToAdopt.data;
            return (
                <div>
                    <h1>{pet.name}</h1>
                    <img src={pet.imageURL} alt="pet for adoption"/>
                    <dl>
                        <dt>Sex</dt>
                        <dd>{pet.sex}</dd>
                        <dt>Age</dt>
                        <dd>{pet.age}</dd>
                        <dt>Breed</dt>
                        <dd>{pet.breed}</dd>
                        <dt>Story</dt>
                        <dd>{pet.story}</dd>
                    </dl>
                    <button onClick={this.props.adopt}>Adopt</button>
                </div>
            )
        }
    }
}

export default Pet;