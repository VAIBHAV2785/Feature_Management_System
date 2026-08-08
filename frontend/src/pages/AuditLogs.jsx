import { useEffect, useState } from "react";

import { getAuditLogs } from "../services/auditService";

function AuditLogs() {

    const [logs, setLogs] = useState([]);

    const [filteredLogs, setFilteredLogs] = useState([]);

    const [userFilter, setUserFilter] = useState("");

    const [actionFilter, setActionFilter] = useState("");

    useEffect(() => {
        loadLogs();
    }, []);

    async function loadLogs() {

        try {

            const data = await getAuditLogs();

            setLogs(data);

            setFilteredLogs(data);

        } catch (error) {

            console.error(error);

        }

    }

    useEffect(() => {

        let data = logs;

        if (userFilter !== "") {

            data = data.filter(
                log =>
                    log.user
                        .toLowerCase()
                        .includes(userFilter.toLowerCase())
            );

        }

        if (actionFilter !== "") {

            data = data.filter(
                log =>
                    log.action
                        .toLowerCase()
                        .includes(actionFilter.toLowerCase())
            );

        }

        setFilteredLogs(data);

    }, [userFilter, actionFilter, logs]);

    return (

        <div>

            <h1>Audit Logs</h1>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "25px",
                    marginTop: "20px",
                }}
            >

                <input
                    placeholder="Filter by User"
                    value={userFilter}
                    onChange={(e) =>
                        setUserFilter(e.target.value)
                    }
                />

                <input
                    placeholder="Filter by Action"
                    value={actionFilter}
                    onChange={(e) =>
                        setActionFilter(e.target.value)
                    }
                />

            </div>

            <table
                border="1"
                cellPadding="10"
                width="100%"
            >

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>User</th>

                        <th>Action</th>

                        <th>Flag</th>

                        <th>Environment</th>

                        <th>Timestamp</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        filteredLogs.map(log => (

                            <tr key={log.id}>

                                <td>{log.id}</td>

                                <td>{log.user}</td>

                                <td>{log.action}</td>

                                <td>{log.flag_id}</td>

                                <td>{log.environment_id}</td>

                                <td>{log.timestamp}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default AuditLogs;