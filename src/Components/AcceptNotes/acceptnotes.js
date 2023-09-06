import React, { useEffect, useState } from "react";
import AdminNavbar from "../Navbar/adminnavbar";

export default function AcceptNotes() {
  const [acceptedNotes, setAcceptedNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/notes?status=accept")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAcceptedNotes(data))
      .catch((error) => console.error("Error fetching accepted notes:", error));
  }, []);

  const handleDownload = (downloadLink) => {
    window.location.href = downloadLink;
  };

  return (
    <>
      <AdminNavbar />

      <main className="accepted-notes padding">
        <div className="container">
          <h2 className="content-heading">Accepted Notes</h2>
          <table className="table" id="acceptedNotes">
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
              {acceptedNotes.map((note, index) => (
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
