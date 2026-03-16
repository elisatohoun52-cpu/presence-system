import React from 'react'
import { CCard, CCardBody, CTable } from '@coreui/react'

const PresenceList = () => {

  const presences = [
    {
      id: 1,
      name: 'Jean Dupont',
      date: '11-03-2026',
      checkIn: '08:02',
      checkOut: '10:00',
      status: 'Présent'
    },
    {
      id: 2,
      name: 'Marie Ahouanvo',
      date: '11-03-2026',
      checkIn: '08:25',
      checkOut: '10:00',
      status: 'Retard'
    },
    {
      id: 3,
      name: 'Paul Mensah',
      date: '11-03-2026',
      checkIn: '08:03',
      checkOut: '09:10',
      status: 'Sortie anticipée'
    }
  ]

  return (
    <CCard>
      <CCardBody>

        <h4>Liste des présences</h4>

        <CTable bordered hover>

          <thead>
            <tr>
              <th>ID</th>
              <th>Étudiant</th>
              <th>Date</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Statut</th>
            </tr>
          </thead>

          <tbody>

            {presences.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.date}</td>
                <td>{p.checkIn}</td>
                <td>{p.checkOut || '-'}</td>
                <td>{p.status}</td>
              </tr>
            ))}

          </tbody>

        </CTable>

      </CCardBody>
    </CCard>
  )
}

export default PresenceList