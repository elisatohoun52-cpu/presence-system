import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoadingSpinner } from '@/components'

// Pages présence
const PresenceDashboard   = React.lazy(() => import('../presence/PresenceDashboard'))
const FingerprintRegister = React.lazy(() => import('../presence/FingerprintRegister'))
const PresenceList        = React.lazy(() => import('../presence/PresenceList'))
const AbsenceList         = React.lazy(() => import('../presence/AbsenceList'))
const PresenceReports     = React.lazy(() => import('../presence/PresenceReports'))

// Pages admin
const AdminDashboard = React.lazy(() => import('../admin/AdminDashboard'))
const ManageStudents = React.lazy(() => import('../admin/ManageStudents'))
const ManageTeachers = React.lazy(() => import('../admin/ManageTeachers'))

// Pages teacher
const TeacherDashboard = React.lazy(() => import('../teacher/TeacherDashboard'))
const TeacherReports   = React.lazy(() => import('../teacher/TeacherReports'))
const ListePresence    = React.lazy(() => import('../teacher/Liste'))

// Page student
const MyPresence = React.lazy(() => import('../student/MyPresence'))

const PresenceRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner fullPage message="Chargement du module Présence..." />}>
      <Routes>

        {/* Dashboard principal */}
        <Route path="dashboard"           element={<PresenceDashboard />}   />

        {/* Empreinte digitale */}
        <Route path="register"            element={<FingerprintRegister />} />

        {/* Présences */}
        <Route path="list"                element={<PresenceList />}        />

        {/* Absences */}
        <Route path="absences"            element={<AbsenceList />}         />

        {/* Rapports */}
        <Route path="reports"             element={<PresenceReports />}     />

        {/* ADMIN */}
        <Route path="admin/dashboard"     element={<AdminDashboard />}      />
        <Route path="admin/students"      element={<ManageStudents />}      />
        <Route path="admin/teachers"      element={<ManageTeachers />}      />

        {/* TEACHER */}
        <Route path="teacher/dashboard"   element={<TeacherDashboard />}    />
        <Route path="teacher/reports"     element={<TeacherReports />}      />
        <Route path="teacher/liste"       element={<ListePresence />}       />

        {/* STUDENT */}
        <Route path="student/my-presence" element={<MyPresence />}          />

        {/* Redirection par défaut */}
        <Route path="/"  element={<Navigate to="dashboard" replace />}      />
        <Route path="*"  element={<Navigate to="/404" replace />}           />

      </Routes>
    </Suspense>
  )
}

export default PresenceRoutes