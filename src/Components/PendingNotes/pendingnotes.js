import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../Navbar/adminnavbar";

export default function PendingNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pendingnotes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);
console.log('notes',notes);
  const handleDownload = (downloadLink) => {
    window.location.href = downloadLink;
  };

  return (
    <>
      <AdminNavbar />

      <main className="pending-notes padding">
        <div className="smlcontainer">
          <h2 className="content-heading">Pending Notes</h2>
          <table className="table" id="pendingNotes">
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
              {notes.map((note, index) => (
                
                <tr key={note._id}>
                  <td>{index + 1}</td> {/* Display serial number starting from 1 */}
                  <td>{note.user.name}</td>
                  <td>{note.uploadingDate}</td>
                  <td>{note.branch}</td>
                  <td>{note.subject}</td>
                  <td>
                    <button onClick={() => handleDownload(note.downloadLink)}>
                      Download
                    </button>
                  </td>
                  <td>{note.fileType}</td>
                  <td>{note.description}</td>
                  <td>{note.status}</td>
                  <td>
                  <Link to={`/status/${note._id}`}>Assign Status</Link>
                  </td>
                  <td>{note.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
