import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to Log Out");
    }
  }
  

  return (
    <div>
      <Card>
        <Card.Body>
        <h1 className="display-2 mb-5 font-weight-bold">
            Mission Connect
          </h1>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong> {currentUser.email}
          
          
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
          <Link to="/DashboardDefault" className="btn btn-primary w-100 mt-3">
            Go To Dashboard
          </Link>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
}
