import React from 'react'
import type { RouteConfig } from './types'

export type { RouteConfig }

/* =========================
   THEME
========================= */
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

/* =========================
   BASE
========================= */
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

/* =========================
   BUTTONS
========================= */
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

/* =========================
   FORMS
========================= */
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

/* =========================
   CHARTS
========================= */
const Charts = React.lazy(() => import('./views/charts/Charts'))

/* =========================
   ICONS
========================= */
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

/* =========================
   NOTIFICATIONS
========================= */
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

/* =========================
   WIDGETS
========================= */
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

/* =========================
   MODULE PRESENCE
========================= */
const PresenceDashboard   = React.lazy(() => import('./views/pages/presence/PresenceDashboard'))
const FingerprintRegister = React.lazy(() => import('./views/pages/presence/FingerprintRegister'))
const PresenceList        = React.lazy(() => import('./views/pages/presence/PresenceList'))
const AbsenceList         = React.lazy(() => import('./views/pages/presence/AbsenceList'))
const PresenceReports     = React.lazy(() => import('./views/pages/presence/PresenceReports'))

/* =========================
   MODULE ADMIN
========================= */
const AdminDashboard  = React.lazy(() => import('./views/pages/admin/AdminDashboard'))
const ManageStudents  = React.lazy(() => import('./views/pages/admin/ManageStudents'))
const ManageTeachers  = React.lazy(() => import('./views/pages/admin/ManageTeachers'))

/* =========================
   MODULE TEACHER
========================= */
const TeacherDashboard = React.lazy(() => import('./views/pages/teacher/TeacherDashboard'))
const TeacherReports   = React.lazy(() => import('./views/pages/teacher/TeacherReports'))
const ListePresence    = React.lazy(() => import('./views/pages/teacher/Liste'))

/* =========================
   MODULE STUDENT
========================= */
const MyPresence = React.lazy(() => import('./views/pages/student/MyPresence'))

/* =========================
   ROUTES
========================= */
const routes: RouteConfig[] = [
  { path: '/', exact: true, name: 'Home' },

  // Theme
  { path: '/theme',             name: 'Theme',      element: Colors,     exact: true },
  { path: '/theme/colors',      name: 'Colors',     element: Colors      },
  { path: '/theme/typography',  name: 'Typography', element: Typography  },

  // Base
  { path: '/base',              name: 'Base',        element: Cards,        exact: true },
  { path: '/base/accordion',    name: 'Accordion',   element: Accordion     },
  { path: '/base/breadcrumbs',  name: 'Breadcrumbs', element: Breadcrumbs   },
  { path: '/base/cards',        name: 'Cards',       element: Cards         },
  { path: '/base/carousels',    name: 'Carousel',    element: Carousels     },
  { path: '/base/collapses',    name: 'Collapse',    element: Collapses     },
  { path: '/base/list-groups',  name: 'List Groups', element: ListGroups    },
  { path: '/base/navs',         name: 'Navs',        element: Navs          },
  { path: '/base/paginations',  name: 'Paginations', element: Paginations   },
  { path: '/base/placeholders', name: 'Placeholders',element: Placeholders  },
  { path: '/base/popovers',     name: 'Popovers',    element: Popovers      },
  { path: '/base/progress',     name: 'Progress',    element: Progress      },
  { path: '/base/spinners',     name: 'Spinners',    element: Spinners      },
  { path: '/base/tabs',         name: 'Tabs',        element: Tabs          },
  { path: '/base/tables',       name: 'Tables',      element: Tables        },
  { path: '/base/tooltips',     name: 'Tooltips',    element: Tooltips      },

  // Buttons
  { path: '/buttons',               name: 'Buttons',       element: Buttons,      exact: true },
  { path: '/buttons/buttons',       name: 'Buttons',       element: Buttons       },
  { path: '/buttons/dropdowns',     name: 'Dropdowns',     element: Dropdowns     },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups  },

  // Charts
  { path: '/charts', name: 'Charts', element: Charts },

  // Forms
  { path: '/forms',                  name: 'Forms',          element: FormControl,   exact: true },
  { path: '/forms/form-control',     name: 'Form Control',   element: FormControl    },
  { path: '/forms/select',           name: 'Select',         element: Select         },
  { path: '/forms/checks-radios',    name: 'Checks & Radios',element: ChecksRadios   },
  { path: '/forms/range',            name: 'Range',          element: Range          },
  { path: '/forms/input-group',      name: 'Input Group',    element: InputGroup     },
  { path: '/forms/floating-labels',  name: 'Floating Labels',element: FloatingLabels },
  { path: '/forms/layout',           name: 'Layout',         element: Layout         },
  { path: '/forms/validation',       name: 'Validation',     element: Validation     },

  // Icons
  { path: '/icons',                name: 'Icons',       element: CoreUIIcons, exact: true },
  { path: '/icons/coreui-icons',   name: 'CoreUI Icons',element: CoreUIIcons  },
  { path: '/icons/flags',          name: 'Flags',       element: Flags        },
  { path: '/icons/brands',         name: 'Brands',      element: Brands       },

  // Notifications
  { path: '/notifications',         name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts',  name: 'Alerts',        element: Alerts  },
  { path: '/notifications/badges',  name: 'Badges',        element: Badges  },
  { path: '/notifications/modals',  name: 'Modals',        element: Modals  },
  { path: '/notifications/toasts',  name: 'Toasts',        element: Toasts  },

  // Widgets
  { path: '/widgets', name: 'Widgets', element: Widgets },

  // Module Presence
  { path: '/presence/dashboard', name: 'Presence Dashboard',    element: PresenceDashboard   },
  { path: '/presence/register',  name: 'Fingerprint Register',  element: FingerprintRegister },
  { path: '/presence/list',      name: 'Presence List',         element: PresenceList        },
  { path: '/presence/absences',  name: 'Absence List',          element: AbsenceList         },
  { path: '/presence/reports',   name: 'Presence Reports',      element: PresenceReports     },

  // Module Admin
  { path: '/admin/dashboard', name: 'Admin Dashboard',  element: AdminDashboard },
  { path: '/admin/students',  name: 'Manage Students',  element: ManageStudents },
  { path: '/admin/teachers',  name: 'Manage Teachers',  element: ManageTeachers },

  // Module Teacher
  { path: '/teacher/dashboard', name: 'Teacher Dashboard', element: TeacherDashboard },
  { path: '/teacher/reports',   name: 'Teacher Reports',   element: TeacherReports   },
  { path: '/teacher/liste',     name: 'Liste Presence',    element: ListePresence    },

  // Module Student
  { path: '/student/presence', name: 'My Presence', element: MyPresence },
]

export default routes