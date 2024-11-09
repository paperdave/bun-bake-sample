// @ts-nocheck
import { Suspense } from "react";
import { Client } from "../components/Client";

export default function () {
  return (
    <div>
      <h1>My web page!!!!</h1>
      <p>
        this page has react!@!!!.
      </p>
      <a href="/second">wahffffa</a>
      <Client />
      <Suspense fallback={<div>Loading 6...</div>}>
        <Async delay={100} />
        <Async delay={500} />
      </Suspense>
      <Suspense fallback={<div>Loading 2...</div>}>
        <Async delay={2000} />
      </Suspense>
      <Suspense fallback={<div>Loading 3...</div>}>
        <Async delay={1000} />
      </Suspense>
    </div>
  );
}

async function Async({ delay }) {
  await Bun.sleep(delay);
  return (
    <div>
      Async Text {delay}
    </div>
  );
}
