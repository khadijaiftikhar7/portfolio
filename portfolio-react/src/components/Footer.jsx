import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Built with care</span>
    </footer>
  );
}
