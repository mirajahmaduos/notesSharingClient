import React from "react";
import AdminNavbar from "../Navbar/adminnavbar";

export default function AllNotes() {
    return (
        <>
            <AdminNavbar />

            <main className="all-notes padding">
                <div className="container">
                    <h2 className="content-heading">All Notes</h2>
                    <table className="table" id="allNotes">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Uploaded By</th>
                                <th>Uploading Date</th>
                                <th>Branch</th>
                                <th>Subject</th>
                                <th>Download Notes</th>
                                <th>File Type</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Assign Status</th>
                                <th>Action</th>
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