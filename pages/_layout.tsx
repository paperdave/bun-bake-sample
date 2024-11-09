export default function Layout({ children }) {
  return (
    <div>
      {children}
      <footer>some rights reserved - {Date.toString()}</footer>
    </div>
  );
}
