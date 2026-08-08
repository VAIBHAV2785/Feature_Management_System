function AuditTable({ logs }) {

return (

<table
border="1"
cellPadding="10"
width="100%"
>

<thead>

<tr>

<th>User</th>

<th>Action</th>

<th>Flag</th>

<th>Time</th>

</tr>

</thead>

<tbody>

{

logs.map(log=>(

<tr key={log.id}>

<td>{log.user}</td>

<td>{log.action}</td>

<td>{log.flag_id}</td>

<td>{log.timestamp}</td>

</tr>

))

}

</tbody>

</table>

);

}

export default AuditTable;