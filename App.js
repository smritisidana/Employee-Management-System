import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';

class App extends Component {
  
  constructor(){
    super();
    this.state={
      employeeList : [
        {
          First_Name : "Ramesh",
          Last_Name : "Kumar",
          Email_ID : "rameshkumar@gmail.com"
        },
        {
            First_Name : "Rajesh",
            Last_Name : "Kumar",
            Email_ID : "rajeshkumar@gmail.com"
        },
        {
            First_Name : "Rakesh",
            Last_Name : "Kumar",
            Email_ID : "rakeshkumar@gmail.com"
        },
        {
            First_Name : "Mahesh",
            Last_Name : "Kumar",
            Email_ID : "maheshkumar@gmail.com"
        },
        {
            First_Name : "Ram",
            Last_Name : "Kumar",
            Email_ID : "ramkumar@gmail.com"
        }
      ],
      addEmployee : false,
      editIndex : null,
    }
    this.updateFirstName = this.updateFirstName.bind(this)
    this.updateLastName = this.updateLastName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
  }

  addEmployee() {
      this.setState({
          addEmployee : true,
        })
  }

  cancelAddEmployee(){
    this.setState({
      addEmployee : false,
    })
  }

  addEmployeeData(){
    const First_Name = document.getElementById(`First_Name`).value;
    const Last_Name = document.getElementById('Last_Name').value;
    const Email_ID = document.getElementById('Email_ID').value;
    this.state.employeeList.push(
      {
        First_Name : First_Name,
        Last_Name :  Last_Name,
        Email_ID : Email_ID
      },
    )
      this.setState({
        addEmployee : false,
      })
  }

  deleteEmployee(index){
   const empList = this.state.employeeList;
   empList.splice(index, 1)
   this.setState({
     empList
   })
  }

  editEmployee(index){
    this.setState(
      {
        editIndex : index
      }
    )
  }

  canceleditEmployee(){
    this.setState({
      editIndex : null
    })
  }

  updateEmployee(){
    const ed = this.state.editIndex
    this.state.editedFirstName && (this.state.employeeList[ed].First_Name = this.state.editedFirstName)
    this.state.editedLastName && (this.state.employeeList[ed].Last_Name = this.state.editedLastName)
    this.state.editedEmail && (this.state.employeeList[ed].Email_ID = this.state.editedEmail)
    this.setState({
      editIndex : null
    })
  }

  updateFirstName(e){
  this.setState({
    editedFirstName : e.target.value
  }
  )
  }

  updateLastName(e){
    this.setState({
      editedLastName : e.target.value
    })
  }

  updateEmail(e){
    this.setState({
      editedEmail : e.target.value
    })
    }
    
  renderHeader(){
    return(
      <Router>
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
           <div class="mx-auto order-0">
             <Link to="/" className="navbar-brand">Employee Management System</Link>
           </div>
         </nav> 
</Router>
    )
  }

  rendertoDoList(){
    return(
      
        <div className="renderTodoList">
          &nbsp;
          <div class="table-responsive">
          <table class="table table-bordered text-center">              
          <thead class="thead thead-dark">
                <tr>
                  <th scope="col" className="centerAll">#</th>
                  <th scope="col" className="centerAll">First Name</th>
                  <th scope="col" className="centerAll">Last Name</th>
                  <th scope="col" className="centerAll">Email ID</th>
                  <th scope="col" className="centerAll">Edit</th>
                  <th scope="col" className="centerAll">Delete</th>
                </tr>
              </thead>
              <tbody>
              {this.state.employeeList.map((value, index)=>{
                    return(
                      this.state.editIndex !== index ? <tr>
                            <th scope="row" id={index+1}>{index+1}</th>
                            <td className="centerAll" id={index+2}>{value.First_Name}</td>
                            <td className="centerAll" id={index+3}>{value.Last_Name}</td>
                            <td className="centerAll" id={index+4}>{value.Email_ID}</td>
                            <td className="centerAll" id={index+5}><button onClick={()=>{
                              this.editEmployee(index)
                            }} className="btn btn-primary">Edit</button></td>
                            <td className="centerAll" id={index+6}><button onClick={()=>{
                              this.deleteEmployee(index)
                            }} className="btn btn-danger">Delete</button></td>
                          </tr>
                          : <tr>
                          <th scope="row" id={index+1}>{index+1}</th>
                          <td className="centerAll" id={index+2+'edit'}><input type="text" defaultValue={value.First_Name} onChange={this.updateFirstName}/></td>
                          <td className="centerAll" id={index+3+'edit'}><input type="text" defaultValue={value.Last_Name} onChange={this.updateLastName}/></td>
                          <td className="centerAll" id={index+4+'edit'}><input type="text" defaultValue={value.Email_ID} onChange={this.updateEmail} /></td>
                          <td className="centerAll" id={index+5+'edit'}><button onClick={()=>{ 
                            this.canceleditEmployee()
                          }} className="btn btn-primary">Cancel</button></td>
                          <td className="centerAll" id={index+6}><button onClick={()=>{
                            this.updateEmployee(index)
                          }} className="btn btn-info">Update</button></td>
                        </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
          <a class="btn-floating btn-large waves-effect waves-light green" onClick={()=>{
            this.addEmployee()
          }}><i class="material-icons">+</i></a>
        </div>
    )
    
  }

  renderAddEmployee() {
    return(
      <div className="loginForm">
        <h1 className="todoHeader">Add Employee</h1>
        <form className="addEmployeeForm">
        <div className="form-group">
          <label >First Name</label>
          <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name"/>
        </div>
        <div className="form-group">
          <label >Last Name</label>
          <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
        </div>
        <div className="form-group">
          <label >Email ID</label>
          <input type="email" className="form-control" id="email2" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        
        <a class="btn-floating btn-large waves-effect waves-light blue  " onClick={()=>{
        this.addEmployeeData()
        }}><i class="material-icons">+</i></a>
        </form>
        <button className="btn btn-danger addEmployeeForm" onClick={()=>{
        this.cancelAddEmployee()
        }}>Cancel</button>
      </div>
    )
  }

  render() {
    return (
      
      <div className="App">
      {this.renderHeader()}
      {!this.state.user && !this.state.addEmployee && this.rendertoDoList()}
      {this.state.addEmployee && this.renderAddEmployee()}
      </div>
    );
  }
}

export default App;