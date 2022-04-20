import React, { Component } from "react";
import "./Cursos.css";
export default class Cursos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: [],
      estudiantes: [],
    };
    this.listarTodo = this.listarTodo.bind(this);
    this.listarCurso = this.listarCurso.bind(this);
  }

  listarTodo() {
    fetch("http://localhost:1234/cursos")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.cursos,
          respuesta: json.result,
        });
      });
  }
  listarCurso() {
    fetch("http://localhost:1234/estudiantes?apellido=Ford")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.estudiantes[0].cursos,
          estudiante:
            json.estudiantes[0].nombre + " " + json.estudiantes[0].apellido,
          respuesta: json.result,
        });
      });
  }

  render() {
    return (
      <div className="estiloCurso">
        <button onClick={this.listarTodo}>Listar Todo</button>
        <button onClick={this.listarCurso}>Listar Curso de Ricky Ford</button>
        <p>
          {this.state.estudiante ? "Estudiante: " + this.state.estudiante : ""}
        </p>
        <h3>Cursos</h3>
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cursos.map((c, index) => (
              <tr>
                <td>{c.id}</td>
                <td>{c.curso} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
