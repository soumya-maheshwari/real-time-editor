import React from "react";
import Editor from "../components/Editor";

const CodeEditor = () => {
  return (
    <>
      <div className="editor-container">
        <div className="sidebar">
          <div className="sidebar-top">
            <h1>Collaborators</h1>
            <div className="collab-list">
              <p>soumya</p>
              <p>soumya</p>
            </div>
          </div>

          <div className="sidebar-bottom">
            <button className="btn copy-btn">Copy Room ID</button>
            <button className="btn leave-btn">Leave</button>
          </div>
        </div>
        <div className="code-editor-container">
          <Editor />
        </div>
      </div>
    </>
  );
};

export default CodeEditor;