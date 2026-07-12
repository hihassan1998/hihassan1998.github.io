import { personal } from '../../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="section-container text-center text-xs text-fg-muted font-mono">
        <p>© {new Date().getFullYear()} {personal.name}</p>
      </div>
    </footer>
  );
}
