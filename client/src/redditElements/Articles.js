import React from 'react';
import Article from './Article'

class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allArticles: this.props.articles,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            allArticles: nextProps.articles
        })
    }

    render() {
        return (
            this.state.allArticles.map(article => {
                return (
                    <Article article={article}/>
                )
            })
        )
    }

}

export default Articles;