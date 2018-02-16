import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css' /* Need to copy this */
import { connect } from 'react-redux';
import { fetchNewsData } from './state/actions';

//passing top headlines for US without any further parameters, loaded with a componentDidMount
//not sure if loading to state is the right approach, not great for scalability, though I'm not dealing with retrieving
//more articles if the user would scroll to the bottom of the 20 articles from the initial fetch

//wasnt able to find the issue with the {this.props.news.map} getting a 'not a function' error.
//Made a decision to try and continue to build out what I think the functionality would look like if I could get past this error.
class TopNews extends Component {
  componentDidMount() {
    //console.log(this.props)
    this.props.fetchNewsData()
  }
  render() {
    return (
      <div className="master-component">
        <h1>Top Headlines</h1>
        <div className="outer-scroll-box">
          {this.props.news.map(article => {
            return (
              <div
                key={article.publishedAt}
                className="card">
                <img className="" src={article.urlToImage} alt="image url" />
                <h5>{article.title}</h5>
                <span>{article.author}</span>
                <p>{article.description}</p>
              </div>
              )
            }
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    news: state.news,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNewsData: () => dispatch(fetchNewsData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);