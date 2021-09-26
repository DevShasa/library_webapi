import React, { Component } from 'react';
import Card from '../components/Card'
import './App.css';

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
    // Pass the data to a child component  
    render(){
        console.log(this.state.data)
        const {data, loading, error} = this.state
        if(loading || error){
            return(
                <div className="alert">
                    {loading ? '...Loading': error}
                </div>
            ) 
        }

        return(
            <div className="feed">
                {data.map(book =>
                    <Card key={book.title} data={book}/>    
                )}
            </div>
        )
    }
}