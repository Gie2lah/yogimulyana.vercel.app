export const metadata = {
  title: "Blogs",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-10">{children}</div>;
}
