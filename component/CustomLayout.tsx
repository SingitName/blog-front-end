import Header from "./Header";

export default function CustomLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">Footer</footer>
    </div>
  );
}