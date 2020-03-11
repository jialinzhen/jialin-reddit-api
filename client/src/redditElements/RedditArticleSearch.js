import React from 'react';
import Banner from './Banner'
import SearchBox from './SearchBox'
import Articles from './Articles'

class RedditArticleSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Banner/>
                <SearchBox/>
            </div>
        )
    }

}

export default RedditArticleSearch;