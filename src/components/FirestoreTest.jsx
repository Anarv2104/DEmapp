// src/components/FirestoreTest.jsx
import React from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const FirestoreTest = () => {
  const handleTest = async () => {
    try {
      const testUuid = uuidv4();
      const testEmail = `test-${Date.now()}@demo.com`;

      await setDoc(doc(db, "users", testUuid), {
        email: testEmail,
        uuid: testUuid,
        createdAt: new Date().toISOString(),
      });

      alert(`✅ Test user stored:\n${testEmail}`);
    } catch (err) {
      console.error("❌ Firestore test failed:", err);
      alert("Firestore test failed. Check console for details.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Firestore Test</h2>
      <button onClick={handleTest} style={{ padding: "1rem 2rem" }}>
        Test Firestore Write
      </button>
    </div>
  );
};

export default FirestoreTest;