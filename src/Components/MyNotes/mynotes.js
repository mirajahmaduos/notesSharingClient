import React, {useEffect, useState} from "react";
import UserNavbar from "../Navbar/usernavbar";
import "../ViewAllnotes/css.css";

export default function Mynotes() {
 const [notes, setNotes] = useState([]);
 useEffect(() => {
    const userId = localStorage.getItem('user');
    console.log('userId', userId);
    const fetchData = () => {
        fetch(`http://localhost:5000/mynotes/${userId}`)
        .then((response) => {
            if(!response.ok){
                throw new Error('Notes data not gotted');
            }
            // console.log('response', response.json());
            // setNotes(response.json());
            return response.json();
        })
        .then(data => setNotes(data))
        .catch((err) => {
            console.log('error in getting mynotes', err);
        })
    }
    fetchData();
 }, []);
 console.log('notes in state', notes);
 const handleDownload = (downloadLink) => {
    window.location.href = downloadLink;
  };
    return (
        <>
            <UserNavbar />

            <main className="my-notes padding">
                <div className="smlcontainer">
                    <h2 className="content-heading">View My Notes</h2>
                    <table className="table" id="myNotes">
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
                            {notes.map((note, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{note.user.name}</td>
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
    )
}