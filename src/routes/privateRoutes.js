import React from 'react';

const Users = React.lazy(() => import('../views/users/Users'));
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const AddCases = React.lazy(() => import('../views/cases/AddCases'));
const WeeklyCases = React.lazy(() => import('../views/cases/WeeklyCases'));
const OlderCases = React.lazy(() => import('../views/cases/OlderCases'));
const ViewCaseDetail = React.lazy(() => import('../views/cases/ViewCaseDetail'));
const AddPractice = React.lazy(() => import('../views/practice/AddPractice'));
const EditPractice = React.lazy(() => import('../views/practice/EditPractice'));
const ListPractice = React.lazy(() => import('../views/practice/ListPractice'));
const AddPracticeStaff = React.lazy(() => import('../views/practiceStaff/AddPracticeStaff'));
const EditPracticeStaff = React.lazy(() => import('../views/practiceStaff/EditPracticeStaff'));
const ListPracticeStaff = React.lazy(() => import('../views/practiceStaff/ListPracticeStaff'));
const Notifications = React.lazy(() => import('../views/notifications/Notifications'));
const ExportExcel = React.lazy(() => import('../views/cases/ExportExcel'));

const privateRoutes = [
  { path: '/users', name: 'Users', component: Users, exact: true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true },
  { path: '/cases', name: 'Add Cases', component: AddCases, exact: true },
  { path: '/cases/this-week-cases', name: 'Weekly Cases', component: WeeklyCases, exact: true },
  { path: '/cases/older-cases', name: 'Older Cases', component: OlderCases, exact: true },
  { path: '/cases/view-case-detail/:caseId', name: 'View Case Detail', component: ViewCaseDetail },
  { path: '/practice', name: 'Add Practice', component: AddPractice, exact: true },
  { path: '/practice/edit-practice', name: 'Edit Practice', component: EditPractice, exact: true },
  { path: '/practice/list-practice', name: 'List Practice', component: ListPractice, exact: true },
  { path: '/practice-staff', name: 'Add Practice Staff', component: AddPracticeStaff, exact: true },
  { path: '/practice-staff/list-practice', name: 'List Practice Staff', component: ListPracticeStaff, exact: true },
  { path: '/practice-staff/edit-practice-staff', name: 'Edit Practice Staff', component: EditPracticeStaff, exact: true },
  { path: '/notifications', name: 'Notifications', component: Notifications, exact: true },
  { path: '/export-excel', name: 'Export Excel', component: ExportExcel, exact: true }

];

export default privateRoutes;
//