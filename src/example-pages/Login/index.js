


import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Select from "react-select";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import app from "../../firebase"

export default function Login() {
  const { signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signInWithGoogle();
      history.push("/Dashboard");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h1 className="display-2 mb-5 font-weight-bold">
            Mission Connect
          </h1>
          <h2 className="text-center mb-4">Sign in to Mission Connected</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Button
              disabled={loading}
              className="btn btn-danger w-100 mt-3"
              type="submit"
            >
              Log In With Google
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Make sure to sign in with your school emails!
      </div>
    </div>
  );
}

