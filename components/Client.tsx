"use client";
import { useState } from "react";

export function Client() {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>Client</h1>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <p>{state}</p>
    </div>
  );
}
