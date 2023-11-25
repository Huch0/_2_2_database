import Link from "next/link";

export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <div className="flex items-center justify-between py-3 bg-blue-200">
          <div className="flex items-center">
            <Link href="/main">
              <span>UniConnect</span>
            </Link>
            <input type="search" className="mr-2 py-1 px-2 border rounded" />
          </div>
          <div className="flex items-center">
            <img
              className="rounded-full h-16 w-16 ml-4"
              src="/images/Siberian Huski profile img.jpg"
            />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
