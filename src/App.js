import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import apiKey from './config.js';

//import components
import Nav from './Components/Nav';
import Search from './Components/Search';
import Gallery from './Components/Gallery';
import NotFound from './Components/NotFound';

//get URL for search query word
const url = window.location
const urlObject = new URL(url);
const search = urlObject.searchParams.get('search')

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [],
      mountain: [],
      forest: [],
      beach: [],
      query: '',
      search: search,
      loading: true
    }
  }

  componentDidMount(props) {
    this.performSearch("mountain");
    this.performSearch("forest");
    this.performSearch("beach");
    if (search != null) {
      this.performSearch(search);
    }
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ query: query, loading: false });
        if (query === 'mountain') {
          this.setState({ mountain: response.data.photos.photo });
        } else if (query === 'forest') {
          this.setState({ forest: response.data.photos.photo });
        } else if (query === 'beach') {
          this.setState({ beach: response.data.photos.photo });
        } else {
          this.setState({ pictures: response.data.photos.photo });
        }
      })
      .catch(error => {
        console.log("Error fetching data", error);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/mountain" />} />
            <Route path="/mountain" render={() => <Gallery data={this.state.mountain} onSearch={this.performSearch} loading={this.state.loading} query="mountain" />} />
            <Route path="/forest" render={() => <Gallery data={this.state.forest} onSearch={this.performSearch} loading={this.state.loading} query="forest" />} />
            <Route path="/beach" render={() => <Gallery data={this.state.beach} onSearch={this.performSearch} loading={this.state.loading} query="beach" />} />
            <Route path="/:query" render={() => <Gallery data={this.state.pictures} onSearch={this.performSearch} loading={this.state.loading} query={this.state.query} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};
