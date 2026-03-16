import React from 'react'
import { CCard, CCardBody, CButton } from '@coreui/react'

const PresenceReports = () => {

  const generateReport = () => {
    alert("Génération du rapport PDF")
  }

  return (
    <CCard>
      <CCardBody>

        <h4>Rapports de présence</h4>

        <p>Générer les rapports des présences des étudiants.</p>

        <CButton
          color="success"
          onClick={generateReport}
        >
          Générer rapport PDF
        </CButton>

      </CCardBody>
    </CCard>
  )
}

export default PresenceReports