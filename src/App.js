import React from 'react'
import './Style.css'
import myImage from './j1.jpg'
//import Child from  './Child'
//import Grandchild from  './Grandchild'
/*function App()
{
  return <h1>Shiney Teresa Lewis</h1>
}*/

//Error 
/*class MYApp extends React.Component{
  render()
  {
    return
    <h1>Shiney Lewis</h1>
    <p>I Love pets</p>
   
  }
  
}*/
/*class MYApp extends React.Component{
  render()
  {
    return <div>
    <h1>Shiney Lewis</h1>
    <p>I Love pets</p>
    </div>
  }
  
}*/
/*class MYApp extends React.Component{
  render()
  {
    return <div>
      <Child></Child>
    <Grandchild></Grandchild></div>
  }
}*/

class MYApp extends React.Component{
  render()
  {
    return (<div><h1>RESUME</h1>
    <table>
<tr>
<td>


<p id="para">SHINEY TERESA LEWIS
<br/>
1-580, 
<br/>
Opp:Brahmavar Chemicals  
<br/>
Brahmavar Post-576213  
<br/>
Udupi-Karnataka  
<br/>

8296556988 
<br/> 
shineylewis11@gmail.com 
<br/>
</p>
</td>
<td>
<img src={myImage} width="100px" height="150px"/>
</td>
</tr>
</table>
    
    <p><h3>Career Objective</h3></p>
    <p>To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.</p>
    <p><h3>Skills</h3></p>
    <ul>
<li>Operating Systems: Windows, Ubuntu </li>
<li>Data Access Technology: ADO.NET  </li>
<li>Databases: Basic of MS SQL Server, Oracle  </li>
<li>Tools: MS Office, MS Visual Studio, .NET </li>
<li>Languages: c, c++, core java, python</li>
<li>Web technology: ASP.NET, HTML, CSS </li>
</ul>
<p><h3>Academic projects</h3></p>
<p>Title   : Online Hospital Management System 
<br/>Technology  :ASP.Net 
<br/>Back End  :SQL server 2008 
<br/>Duration  :3 Months 
<br/>Description:  :My project work is about maintaining patient details and employee details and the respective users can access those details from anywhere by using system. 
</p>
<p>Title   : Employee Management System 
<br/>Language  :Python 
<br/>Back End  :Sqlite 
<br/>Duration  :2 Months 
<br/>Description:  :This project work is about maintaining employee details. 
</p>
<p>Title   : Rainfall Analysis using Linear Regression
<br/>Language  :Python 
<br/>Duration  :3 Months 
<br/>Description:  :This project work is to analyze rainfall records of previous and predict the rainfall for future.
</p>
<p><h3>Academic Qualification</h3></p>
<table>
<tr>
<th>Qualification</th>
<th>Name of the institution</th>
<th>University/ Board</th>
<th>Year of Passing</th>
<th>Percentage/ CGPA</th>
</tr>
<tr>
<td>MCA</td>
<td> NMAMIT,Nitte</td>
<td> Nitte</td>
<td> 2020</td>
<td> 8.96</td>
</tr> 
<tr>
<td>BCA</td>
<td>SMS College,Brahmavar</td>
<td>Mangalore University </td>
<td>2018</td>
<td>86.34 </td>
</tr> 
<tr>
<td>PUC </td>
<td>SMS PU College,Brahmavar </td>
<td>Karnataka Board </td>
<td>2015 </td>
<td>76.66 </td>
</tr> 
<tr>
<td>SSLC </td>
<td>SMS Eng Med High School,Brahmavar </td>
<td>Karnataka Board </td>
<td>2013 </td>
<td>90.56</td>
</tr> 
</table>


    </div>)
  }
}
export default MYApp;
