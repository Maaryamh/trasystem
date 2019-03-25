import React, { Component } from 'react';
import ExamItem from './ExamItem'
import PropTypes from 'prop-types'

class Exams extends Component {
  
  render() {
    return this.props.exams.map((exam) => (
        <ExamItem key ={exam.id} exam = {exam} markComplete={this.props.markComplete} delExam={this.props.delExam}/>

    ));
  }
}
Exams.propTypes={
    exams: PropTypes.array.isRequired
}

export default Exams;