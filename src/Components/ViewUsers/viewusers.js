import React from "react";
import AdminNavbar from "../Navbar/adminnavbar";

export default function ViewUsers() {
    return (
        <>
            <AdminNavbar />

            <main className="view-users padding">
                <div className="container1">
                    <h2 className="content-heading">View Users</h2>
                    <table className="table" id="viewUsers">
                        <thead>
                            <tr>
                                <th className="text-center">S.No</th>
                                <th className="">Full Name</th>
                                <th className="">Email ID</th>
                                <th className="">Contact</th>
                                <th className="">Branch</th>
                                <th className="">Role</th>
                                <th className="">Action</th>
                            </tr>
                        </thead>

                        <tbody>

                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}