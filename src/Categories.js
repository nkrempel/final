import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css' /* Need to copy this */
import { connect } from 'react-redux';
import { fetchCatSources, saveSources } from './state/actions';

//probably could have pursued making the display area a seperate component, that code was largely duplicated
//from component to component

//Categories will use local state for the category value of the radio button selected
//then pass that value to the action to fetch the sources avaialble for a particular category
class Categories extends Component {
  constructor(props) {
    super(props);

    this.setState = {
      valOfChecked: '',
      subVal: []
    }
  }
  componentDidMount() {
    //console.log(this.props)
    this.props.fetchCatSources()
  }

  //handle change in radio button value - assign to state to be passed by dispatch
  handleRadioChange(e) {
    this.setState({valOfChecked: [e.target.value]})
  }
  //if subscribe button is clicked assign the id to state to be stored and tracked for personal feed component
  handleSubscribe(e) {
    this.setState({subVal: [e.target.id]})
  }

  render() {
    return (
      <div>
        <h1>Choose your sources!</h1>
        <form>
          <input type="radio" name="sourceList" id="business" value="business" onChange={this.handleRadioChange} />
          <label for="business">Business</label>

          <input type="radio" name="sourceList" id="technology" value="technology" onChange={this.handleRadioChange} />
          <label for="technology">Technology</label>

          <input type="radio" name="sourceList" id="science" value="science" onChange={this.handleRadioChange} />
          <label for="science">Science</label>
        </form>
        <div className="outer-scroll-box">
          {this.props.sources.map(source => {
            return (
              <div
                key={source.id}
                className="card">
                <h5>{source.name}</h5>
                <p>{source.description}</p>
                {/* //needs conditional rendering once clicked */}
                <button onClick={this.handleSubscribe}>Subscribe</button>  
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
    sources: state.sources,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCatSources: (valOfChecked) => {dispatch(fetchCatSources(valOfChecked))},
    saveSources: (subVal) => {dispatch(saveSources(subVal))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);