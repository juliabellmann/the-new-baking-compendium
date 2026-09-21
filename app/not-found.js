import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-shell not-found">
      <p className="eyebrow">404</p>
      <h1>Rezept nicht gefunden</h1>
      <p>Dieses Rezept existiert in dieser Rezeptsammlung nicht.</p>
      <Link className="button button-primary" href="/">
        Zur Übersicht
      </Link>
    </main>
  );
}
