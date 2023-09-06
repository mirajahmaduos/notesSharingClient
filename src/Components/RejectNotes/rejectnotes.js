import React, { useEffect, useState } from "react";
import AdminNavbar from "../Navbar/adminnavbar";

export default function RejectNotes() {
  const [rejectedNotes, setRejectedNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/notes?status=reject")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setRejectedNotes(data))
      .catch((error) => console.error("Error fetching rejected notes:", error));
  }, []);

  const handleDownload = (downloadLink) => {
    window.location.href = downloadLink;
  };

  return (
    <>
      <AdminNavbar />

      <main className="rejected-notes padding">
        <div className="container">
          <h2 className="content-heading">Rejected Notes</h2>
          <table className="table" id="rejectedNotes">
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
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {rejectedNotes.map((note, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{note.uploadedBy}</td>
                  <td>{note.uploadingDate}</td>
                  <td>{note.branch}</td>
                  <td>{note.subject}</td>
                  <td>
                    {" "}
                    <button onClick={() => handleDownload(note.downloadLink)}>
                      Download
                    </button>
                  </td>
                  <td>{note.fileType}</td>
                  <td>{note.description}</td>
                  <td>{note.status}</td>
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
