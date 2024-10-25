"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Offcanvas, Button } from "react-bootstrap";

export default function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.page}>
      <Button variant="primary" onClick={handleShow} className="mb-2">
        Open Navigation
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
              <li>
                <a href="#">Reports</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>

      <main className={styles.main}>
        <h1>Welcome to Your Dashboard</h1>

        <div className={styles.dashboardContent}>
          <div className={styles.card}>
            <h2>Analytics Overview</h2>
            <p>Your key metrics and KPIs will be displayed here.</p>
          </div>

          <div className={styles.card}>
            <h2>Recent Activities</h2>
            <ul>
              <li>New order received</li>
              <li>Payment processed</li>
              <li>Inventory updated</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Quick Actions</h2>
            <Button variant="secondary" className="me-2">
              Generate Report
            </Button>
            <Button variant="secondary">Update Inventory</Button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
