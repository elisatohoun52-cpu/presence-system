import React from 'react'
import { CCard, CCardBody, CTable } from '@coreui/react'

const AbsenceList = () => {

  const absences = [
    {
      id: 1,
      name: 'Etudiant 1',
      date: '11-03-2026'
    },
    {
      id: 2,
      name: 'Etudiant 2',
      date: '11-03-2026'
    }
  ]

  return (
    <CCard>
      <CCardBody>

        <h4>Liste des absences</h4>

        <CTable bordered>

          <thead>
            <tr>
              <th>ID</th>
              <th>Étudiant</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            {absences.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.date}</td>
              </tr>
            ))}

          </tbody>

        </CTable>

      </CCardBody>
    </CCard>
  )
}

export default AbsenceList