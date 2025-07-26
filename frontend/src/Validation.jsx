import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Validation = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const nameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;

  const handleValidation = () => {
    if (name.trim().length == 0) {
      setName("");
      setError("Name Empty");
    }

    if (name.length > 0 && name.length <= 3) {
      setName("");
      setError("Name Length not Appropriate");
    }

    if (!nameRegex.test(name)) {
      setName("");
      setError("Name contains invalid characters.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="d-flex gap-4">
        <button className="btn btn-primary w-100" onClick={handleValidation}>
          Validate Name
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Validation;
