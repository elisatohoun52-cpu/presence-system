import React, { useState } from "react"
import "../../../scss/ManageTeachers.scss"

const ManageTeachers = () => {

const [teachers, setTeachers] = useState<any[]>([])

const [form, setForm] = useState({
name: "",
email: "",
phone: "",
speciality: ""
})

const [editId, setEditId] = useState<number | null>(null)

const handleChange = (e:any) => {

setForm({
...form,
[e.target.name]: e.target.value
})

}

const handleSubmit = (e:any) => {

e.preventDefault()

if(editId !== null){

setTeachers(

teachers.map((t)=>

t.id === editId ? { id: editId, ...form } : t

)

)

setEditId(null)

}else{

const newTeacher = {

id: Date.now(),
...form

}

setTeachers([...teachers,newTeacher])

}

setForm({

name:"",
email:"",
phone:"",
speciality:""

})

}

const handleEdit = (teacher:any) => {

setForm(teacher)

setEditId(teacher.id)

}

const handleDelete = (id:number) => {

setTeachers(

teachers.filter((t)=> t.id !== id)

)

}

return(

<div className="manage-teachers">

<h2>Gestion des Enseignants</h2>

<form onSubmit={handleSubmit} className="teacher-form">

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
name="phone"
placeholder="Téléphone"
value={form.phone}
onChange={handleChange}
/>

<input
name="speciality"
placeholder="Spécialité"
value={form.speciality}
onChange={handleChange}
/>

<button type="submit">

{editId ? "Modifier" : "Ajouter"}

</button>

</form>

<table>

<thead>

<tr>

<th>Nom</th>
<th>Email</th>
<th>Téléphone</th>
<th>Spécialité</th>
<th>Actions</th>

</tr>

</thead>

<tbody>

{teachers.map((teacher)=> (

<tr key={teacher.id}>

<td>{teacher.name}</td>
<td>{teacher.email}</td>
<td>{teacher.phone}</td>
<td>{teacher.speciality}</td>

<td>

<button
className="edit-btn"
onClick={()=> handleEdit(teacher)}
>

Modifier

</button>

<button
className="delete-btn"
onClick={()=> handleDelete(teacher.id)}
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

export default ManageTeachers