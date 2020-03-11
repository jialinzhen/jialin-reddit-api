import React from 'react';


class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (

        <div class="jumbotron">
            <h5 class="display-4">{this.props.article.title}</h5>
            <p class="lead"></p>
            <hr class="my-4"/>
                <p>Author : {this.props.article.author}</p>
                <br/>
                <p>{this.props.article.content}</p>
        </div>
        )
    }

}

export default Article;