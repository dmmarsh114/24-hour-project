import React from 'react'
import DisplayRestaurants from './DisplayRestaurants/DisplayRestaurants'

export default class GetRestaurants extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchResults: '',
            single: ''
        }
        

    }

    componentWillMount() {
        console.log('hi,')
    }

    componentDidMount() {
        console.log('how are ya?')

        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.props.lat}&lon=${this.props.lon}`, {
            headers: {
                Accept: "application/json",
                "User-Key": "c4a72bc0d1013c0944741ce9dc776eba"
            }
        })
            .then(response => response.json())
            .then(searchData => {
                // console.log('food near me searchData', searchData.nearby_restaurants) // the scope of this searchData is whithin this fetch so we set the state so we can use this data outside of this fetch
                this.setState({
                    searchResults: searchData,
                    single: searchData.nearby_restaurants[0].restaurant.name
                })
                console.log('newly set state with our saved results', this.state.searchResults) // we set the state now we can use the new state of searchResults which holds the searchData from above.
            })
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div>
                this is where DisplayRestaurants will go
                {/* {this.state.searchResults ? <DisplayRestaurants single={this.state.single} /> : null} */}
                {this.state.searchResults ? <DisplayRestaurants single={this.state.single} /> : null}
            </div>
        )
    }
}