import React, { Component } from 'react'
import "./Estudiante.css"; 

export default class Estudiante extends Component {
    constructor(props){
      super(props) ;
      this.cargarCurso=this.cargarCurso.bind(this)
      this.listarEstudiantes=this.listarEstudiantes.bind(this)
      this.state={
        curso: [{nombre:"React",horas:"12"}],
        estudiantes:[],
        lista:[{nombre:"objetos1",horas:"10"},
        {nombre:"seminario",horas:"7"},{nombre:"ingenieria1",horas:"10"},{nombre:"ingenieria2",horas:"14"},
        {nombre:"base de datos",horas:"4"}]
      }
    }
    cargarCurso(){
      this.setState((state)=>({
          curso:[...state.curso,state.lista[Math.floor(Math.random()*5)]]
         
      }))
   
    }

    listarEstudiantes(){
      fetch("http://localhost:1234/estudiantes")
      .then((resp)=>resp.json())
      .then((json)=>{
         this.setState(({
            
            estudiantes:json.estudiantes
            
        }))
      }) 
    }

    render() {
   
    return (
      <div className='estilo' >
          <p> Nombre: {this.props.nombre}</p>
          <p>Apellido:{this.props.apellido}</p>
          <p>Edad: {this.props.edad}</p>
          <button onClick={this.cargarCurso}>inscribirme</button>
          <table border="1">
            <thead>
              <th>Curso</th>
              <th>Cantidad de Hs</th>
            </thead>
            <tbody>
              {this.state.curso.map((c,index)=>(
                <tr>

                 <td>{c.nombre}</td>
              <td>{c.horas} horas semanales</td>
                </tr>
              ))}
             
            </tbody>
          </table>
          <button onClick={this.listarEstudiantes}>listar estudiatnes</button>
          <h3>Estudiantes</h3>
          <table border="1">
            <thead>
              <tr>
              <th>Nombre</th>
              <th>Apellido</th> 
              <th>Curso</th> 
              </tr>
            </thead>
            <tbody>
              
              {this.state.estudiantes.map((e,index)=>(
                <tr>
                 <td>{e.nombre}</td>
                 <td>{e.apellido} </td>
                 <td>{e.cursos[0].curso} </td>
                </tr>
              ))}       
            </tbody>
          </table>
      </div>
    )
  }
}
