import Vue from 'vue'
import Layout from './views/Layout'
import Page from './components/Page'
import PageHeader from './components/PageHeader'
import PageBody from './components/PageBody'
import Portlet from './components/Portlet'
import PortletHead from './components/PortletHead'
import PortletBody from './components/PortletBody'
import PortletFoot from './components/PortletFoot'
import Table from "./components/Table";
import TableRow from "./components/TableRow";

Vue.component('layout', Layout)
Vue.component('page', Page)
Vue.component('page-header', PageHeader)
Vue.component('page-body', PageBody)
Vue.component('portlet', Portlet)
Vue.component('portlet-head', PortletHead)
Vue.component('portlet-body', PortletBody)
Vue.component('portlet-foot', PortletFoot)
Vue.component('resource-table', Table)
Vue.component('table_row', TableRow)
