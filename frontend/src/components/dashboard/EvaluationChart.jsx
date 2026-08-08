import {

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

CartesianGrid,

ResponsiveContainer,

} from "recharts";

function EvaluationChart({ data }) {

return (

<ResponsiveContainer width="100%" height={300}>

<BarChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="flag"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="count" fill="#1976d2"/>

</BarChart>

</ResponsiveContainer>

);

}

export default EvaluationChart;