import React from "react";
import "./Datatable.css";


const DataTable = ({ valDat }) => {
    return (
        <div className="val-table">
            <h2>Validated data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        {/* <th>Delete</th> */}
                    </tr>
                </thead>
                {valDat &&
                        valDat.map((data, i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                                
                            </tr>
                        ))}
            </table>
        </div>
    );
};

export default DataTable;
