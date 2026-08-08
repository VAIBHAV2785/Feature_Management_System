import { useEffect, useState } from "react";

import {

Flag,
Globe,
Users,
Target

} from "lucide-react";

import SummaryCard from "./SummaryCard";

import {

getDashboardStatistics

} from "../../services/analyticsService";

export default function StatisticsCards(){

const [stats,setStats]=useState({

total_flags:0,
active_flags:0,
total_evaluations:0,
audit_logs:0

});

useEffect(()=>{

load();

},[]);

async function load(){

const data=await getDashboardStatistics();

setStats(data);

}

return(

<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

<SummaryCard

title="Feature Flags"

value={stats.total_flags}

icon={Flag}

color="from-blue-600 to-cyan-500"

/>

<SummaryCard

title="Environments"

value={stats.active_flags}

icon={Globe}

color="from-green-500 to-emerald-600"

/>

<SummaryCard

title="Evaluations"

value={stats.total_evaluations}

icon={Users}

color="from-purple-600 to-pink-500"

/>

<SummaryCard

title="Audit Logs"

value={stats.audit_logs}

icon={Target}

color="from-orange-500 to-yellow-500"

/>

</div>

);

}