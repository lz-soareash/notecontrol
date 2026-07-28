import "./Dashboard.css";

import DashboardGreeting from "../../components/dashboard/DashboardGreeting/DashboardGreeting";
import DashboardStats from "../../components/dashboard/DashboardStats/DashboardStats";
import DashboardCharts from "../../components/dashboard/DashboardCharts/DashboardCharts";
import DashboardQuickActions from "../../components/dashboard/DashboardQuickActions/DashboardQuickActions";
import DashboardRecent from "../../components/dashboard/DashboardRecent/DashboardRecent";
import DashboardAlerts from "../../components/dashboard/DashboardAlerts/DashboardAlerts";

export default function Dashboard(){

return(

<div className="dashboard">

<DashboardGreeting/>

<DashboardStats/>

<DashboardCharts/>

<DashboardQuickActions/>

<DashboardRecent/>

<DashboardAlerts/>

</div>

);

}