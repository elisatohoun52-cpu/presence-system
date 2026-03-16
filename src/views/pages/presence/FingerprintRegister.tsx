import React, { useState } from 'react'
import { CCard, CCardBody, CForm, CFormInput, CButton } from '@coreui/react'

const FingerprintRegister = () => {

  const [matricule, setMatricule] = useState('')

  const handleRegister = () => {
    alert(`Enregistrement de l'empreinte pour : ${matricule}`)
  }

  return (
    <CCard>
      <CCardBody>

        <h4>Enregistrement d'empreinte digitale</h4>

        <CForm>

          <CFormInput
            label="Matricule étudiant"
            placeholder="Entrer le matricule"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
          />

          <CButton
            color="primary"
            className="mt-3"
            onClick={handleRegister}
          >
            Scanner empreinte
          </CButton>

        </CForm>

      </CCardBody>
    </CCard>
  )
}

export default FingerprintRegister