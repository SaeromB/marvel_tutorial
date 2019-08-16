import React,{Component} from 'react';

// class SearchBar extends Component {
//     state={
//         query:'',
//         data: [],
//         searchString:[]
//     }
//     handleInputChange=(event)=>{
//         this.setState({
//             query: event.target.value
//         },()=>this.filterArray()
//     }

// }


class SearchBar extends Component {
    constructor(){
        super();
        this.state ={
            search:'search character'
        };
    }
    updateSearch=(event)=>{
        this.setState({search:event.target.value})
    }
    render(){
        return(
            <div>
                <ul>
                <input type='text'
                value={this.state.search}
                onChange={this.updateSearch}
                />
                </ul>
            </div>
        )
    }
}

export default SearchBar;
