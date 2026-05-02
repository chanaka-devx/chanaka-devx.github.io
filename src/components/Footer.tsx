

export default function Footer() {
  return (
    <footer className="py-6 bg-background-light dark:bg-background-dark text-center">
      <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">
        &copy; {new Date().getFullYear()} Built with React & Tailwind CSS.
      </p>
    </footer>
  );
}
