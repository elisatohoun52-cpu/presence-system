import React from "react"
import "../../../scss/AdminDashboard.scss"

const AdminDashboard = () => {
  return (

    <div className="admin-dashboard">

      <h2 className="dashboard-title">Administration Dashboard</h2>
      

      <div className="dashboard-cards">

        <div className="dashboard-card card-students">
          <div className="card-icon"></div>
          <div className="card-number">250</div>
          <div className="card-text">Étudiants</div>
        </div>

        <div className="dashboard-card card-teachers">
          <div className="card-icon"></div>
          <div className="card-number">35</div>
          <div className="card-text">Enseignants</div>
        </div>

        <div className="dashboard-card card-presence">
          <div className="card-icon"></div>
          <div className="card-number">210</div>
          <div className="card-text">Présents</div>
        </div>

        <div className="dashboard-card card-absence">
          <div className="card-icon"></div>
          <div className="card-number">40</div>
          <div className="card-text">Absents</div>
        </div>

      </div>

    </div>
  )
}

export default AdminDashboard