import React from "react"
import { CRow, CCol, CCard, CCardBody } from "@coreui/react"

const PresenceDashboard = () => {
  return (
    <div className="presence-dashboard">

      <h3>Dashboard Présence</h3>

      <CRow>
        <CCol md={3}>
          <CCard>
            <CCardBody>
              <h5>Total étudiants</h5>
              <h2>120</h2>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md={3}>
          <CCard>
            <CCardBody>
              <h5>Présents aujourd'hui</h5>
              <h2>95</h2>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md={3}>
          <CCard>
            <CCardBody>
              <h5>Absents</h5>
              <h2>25</h2>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md={3}>
          <CCard>
            <CCardBody>
              <h5>Retards</h5>
              <h2>10</h2>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </div>
  )
}

export default PresenceDashboard