import React, { useEffect, useState } from "react";
import UserNavbar from "../Navbar/usernavbar";
import "./css.css";

export default function ViewAllnotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/viewallnotes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setNotes(data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  const handleDownload = (downloadLink) => {
    console.log('download link',downloadLink);
    // window.location.href = downloadLink;
    const link = document.createElement('a');
    link.href= downloadLink;
    //extract filename
    link.download = downloadLink.substring(downloadLink.lastIndexOf('/') + 1);

    //trigger click event on anchor element
    link.click();
  };

  return (
    <>
      <UserNavbar />

      <main className="viewall-notes padding">
        <div className="smlcontainer">
          <h2 className="content-heading">View All Notes</h2>
          <table className="table" id="view_allNotes">
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
              </tr>
            </thead>

            <tbody>
            {notes.map((note, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{note.uploadedBy}</td>
                  <td>{note.uploadingDate}</td>
                  <td>{note.branch}</td>
                  <td>{note.subject}</td>
                  <td> <button onClick={() => handleDownload(note.filePath)}>
                      Download <a href={note.filePath} download></a>
                    </button></td>
                  <td>{note.fileType}</td>
                  <td>{note.description}</td>
                  <td>{note.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
