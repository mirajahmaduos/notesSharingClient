import React from "react";
import "./status.css";
import { useParams } from "react-router-dom";

export default function Status() {
  const {noteId} = useParams();
  console.log('noteId', noteId);
  return (
    <>
      <main className="assigncontainer">
        <h2 className="text-center">Assign Status</h2>
        <hr />
          <form id="status-form">
            <label className="label">Notes ID</label>
            <input
              type="text"
              name="noteid"
              id="noteid"
              value={noteId}
              className="form-control"
              readOnly
            />

            <label className="label">Status</label>
            <select
              name="status"
              id="status"
              className="form-control"
            >
              <option value="accept">Accept</option>
              <option value="reject">Reject</option>
            </select>

            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
      </main>
    </>
  );
}
