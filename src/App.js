import React, { Component } from 'react';
class App extends Component{
  constructor(){
    super();
    this.state ={
      exam: [ ],
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/v1/student/profile/getMyProfile/2').then((response)=>response.json()).then((resData) => {
       //console.log(responseJson.Grade)
       this.setState({
        exam:resData.data});
    })
  }
  //<div key = {Record.Name} > 
  //</div>
  render() {
    return (
    <div>
      {
          <div> 
            { 
              this.state.exam.map((Record) => {
                console.log(Record)
              return Record.StudentID +" "+ Record.Name +" "+ Record.Email +" "+ Record.PhoneNo +" "+ Record.Address +" "+ Record.GraduationYear
            })
            }
          </div> 
      }
      </div>
    );
  }
}
export default App;

 