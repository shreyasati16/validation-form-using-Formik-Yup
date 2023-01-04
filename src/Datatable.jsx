import React from "react";
import "./Datatable.css";


const DataTable = ({ valDat,handleDelete }) => {
    return (
        <div className="val-table">
            <h2>Validated data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {valDat &&
                        valDat.map((data, i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                                <img
                                        src="https://img.icons8.com/material-sharp/512/delete-forever.png"
                                        className="del-button"
                                        onClick={() => handleDelete(i)}
                                    />
                            </tr>
                        ))}
            </table>
        </div>
    );
};

export default DataTable;
