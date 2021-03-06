import React, { Component } from 'react'

export class AddExam extends Component {
    state = {
        title: ''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addExam(this.state.title);
        this.setState({title: ''});
    }
  render() {
    return (
      <form onSubmit= {this.onSubmit} style ={{ display: 'flex' }}>
          <input 
          type="text" 
          name="title" 
          style ={{ flex : '10', padding: '5px'}}
          placeholder="Add Exam ...."
          value ={this.state.title}
          onChange= {this.onChange}
          />
          <input 
          type="submit" 
          value="Submit"
          className="btn"
          style={{flex: '1'}}
          />
      </form>
    )
  }
}

export default AddExam
