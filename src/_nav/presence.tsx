import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilSpeedometer, cilEducation, cilPeople } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const presenceNavigation = [

  // MENU PRESENCE
  {
    component: CNavGroup,
    name: 'Présence',
    icon: <CIcon icon={cilUser} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Dashboard Présence',
        to: '/presence/dashboard',
      },
      {
        component: CNavItem,
        name: 'Liste Présence',
        to: '/presence/list',
      },
      {
        component: CNavItem,
        name: 'Absences',
        to: '/presence/absences',
      },
      {
        component: CNavItem,
        name: 'Enregistrement Empreinte',
        to: '/presence/register',
      },
      {
        component: CNavItem,
        name: 'Rapports',
        to: '/presence/reports',
      },
    ],
  },

  // TITRE ADMIN
  {
    component: CNavTitle,
    name: 'ADMINISTRATION',
  },

  {
    component: CNavItem,
    name: "Admin Dashboard",
    to: "/presence/admin/dashboard",
    icon: <CIcon icon={cilSpeedometer} />,
  },

  {
    component: CNavItem,
    name: "Manage Students",
    to: "/presence/admin/students",
    icon: <CIcon icon={cilPeople} />,
  },

  {
    component: CNavItem,
    name: "Manage Teachers",
    to: "/presence/admin/teachers",
    icon: <CIcon icon={cilEducation} />,
  },

  // TITRE TEACHER
  {
    component: CNavTitle,
    name: 'TEACHER',
  },

  {
    component: CNavItem,
    name: "Teacher Dashboard",
    to: "/presence/teacher/dashboard",
    icon: <CIcon icon={cilSpeedometer} />,
  },

  {
    component: CNavItem,
    name: "Teacher Reports",
    to: "/presence/teacher/reports",
    icon: <CIcon icon={cilEducation} />,
  },
  {
    component: CNavItem,
    name: 'Liste de présence',       // ← ajouté ici
    to: '/presence/teacher/liste',
    icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
  },

  // TITRE STUDENT
  {
    component: CNavTitle,
    name: 'STUDENT',
  },

  {
    component: CNavItem,
    name: "My Presence",
    to: "/presence/student/my-presence",
    icon: <CIcon icon={cilUser} />,
  },

]

export default presenceNavigation