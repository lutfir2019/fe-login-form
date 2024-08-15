export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen">
      <main className="flex h-full w-full justify-center items-center">
        {children}
      </main>
    </div>
  );
}
