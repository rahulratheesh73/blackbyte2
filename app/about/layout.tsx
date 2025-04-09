export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4  md:py-10">
      <div >
        {children}
      </div>
    </section>
  );
}
