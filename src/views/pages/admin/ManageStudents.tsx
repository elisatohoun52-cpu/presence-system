import React, { useState } from "react"
import "../../../scss/ManageStudents.scss"

type Student = {
  id: number
  name: string
  email: string
  matricule: string
  filiere: string
}

const ManageStudents = () => {

  const [students, setStudents] = useState<Student[]>([])

  const [form, setForm] = useState({
    name: "",
    email: "",
    matricule: "",
    filiere: ""
  })

  const [editId, setEditId] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editId) {

      setStudents(
        students.map((s) =>
          s.id === editId ? { id: editId, ...form } : s
        )
      )

      setEditId(null)

    } else {

      const newStudent: Student = {
        id: Date.now(),
        ...form
      }

      setStudents([...students, newStudent])
    }

    setForm({
      name: "",
      email: "",
      matricule: "",
      filiere: ""
    })
  }

  const handleEdit = (student: Student) => {
    setForm({
      name: student.name,
      email: student.email,
      matricule: student.matricule,
      filiere: student.filiere
    })
    setEditId(student.id)
  }

  const handleDelete = (id: number) => {
    setStudents(
      students.filter((s) => s.id !== id)
    )
  }

  return (

    <div className="manage-students">

      <h2>Gestion des étudiants</h2>

      {/* FORMULAIRE */}

      <form onSubmit={handleSubmit} className="student-form">

        <input
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="matricule"
          placeholder="Matricule"
          value={form.matricule}
          onChange={handleChange}
        />

        <input
          name="filiere"
          placeholder="Filière"
          value={form.filiere}
          onChange={handleChange}
        />

        <button type="submit" className="btn-add">
          {editId ? "Modifier" : "Ajouter"}
        </button>

      </form>

      {/* TABLEAU */}

      <table className="students-table">

        <thead>

          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Matricule</th>
            <th>Filière</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.matricule}</td>
              <td>{student.filiere}</td>

              <td>

                <button
                  className="btn-edit"
                  onClick={() => handleEdit(student)}
                >
                  Modifier
                </button>

                <button
                  className="btn-delete"
                  onClick={() => handleDelete(student.id)}
                >
                  Supprimer
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}

export default ManageStudents