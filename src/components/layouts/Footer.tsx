export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-sky-700 p-4">
      <p className="text-sm text-black dark:text-gray-300">
        © Yogi Mulyana Prayoga {new Date().getFullYear()}
        {" • "}Got any feedback?
      </p>
    </footer>
  );
}
