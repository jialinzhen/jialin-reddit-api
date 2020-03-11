import React from 'react';
import Articles from './Articles';
import axios from 'axios'
import Pagination from './Pagination'

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchItem: '',
            allArticles: [],
            loading: false,
            postsPerPage: 2,
            currentPage: 1,
            error: null
        }
    }

    submitSubredditSearch(search) {
        this.setState({loading: true})
        axios.get('/' + search).then(allArticles => {
            if(allArticles.data[0].error) {
                this.setState({
                    error: allArticles.data[0],
                    loading: false,
                    allArticles: []
                })
            } else {
                this.setState({
                    allArticles: allArticles.data,
                    loading: false,
                    error: null
                 })
            }
        })
    }

    changesearchItem(e) {
        this.setState({
            searchItem: e.target.value
        })
    }

    setCurrentPage(num) {
        this.setState({
            currentPage: num
        })
    }

    render() {

        let loading = null;

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.allArticles.slice(indexOfFirstPost, indexOfLastPost);

        if(this.state.loading) {
            loading = 
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        }



        return (
            <div>
                {loading}
                <div style={{'display': 'inline-flex', 'margin': '20px'}}>
                    <input class="form-control form-control-lg" 
                    type="text" 
                    placeholder="Enter Subreddit Name for Search"
                    onChange={e => this.changesearchItem(e)}></input>
                    <button type="button" class="btn btn-success" disabled={this.state.searchItem == ''}
                    onClick={() => 
                    this.submitSubredditSearch(this.state.searchItem)}>Search</button>
                </div>
                {
                    this.state.error && 
                    <div>
                        You cannot access this resource : 
                        this resource is <p>{this.state.error.message}</p>
                    </div>
                }
                <Articles articles={currentPosts}/>
                <Pagination
                    postsPerPage={this.state.postsPerPage}
                    totalPosts={this.state.allArticles.length}
                    paginate={(pageNumber) => this.setCurrentPage(pageNumber)}
                />
            </div>
        )
    }

}

export default SearchBox;