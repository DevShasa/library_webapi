import React, { Component } from 'react';

const API_URL = "http://127.0.0.1:8000/api/"
export default class App extends Component{

    constructor(){
        super();
        this.state = {
            data: [],
            loading: true,
            error:''
        }
    }

    // fetch the data from the api
    async componentDidMount(){
        try{
            const data = await fetch(API_URL)
            const dataJSON = await data.json();
            if(dataJSON){
                this.setState({
                    data: dataJSON,
                    loading: false
                });
            }
        }catch(error){
            this.setState({
                loading: false,
                error: error.message
            });
        }
    }

    render(){
        console.log(this.state.data)
        return(
            <div>
                Walapangalaz
            </div>
        )
    }
}