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
        <nav className="bg-gray-200">
          <ul className="flex justify-center">
            <li className="mr-6">
              <Link href="/main/feed" className="text-blue-500 hover:text-blue-800">
                Feed
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/main/scrap" className="text-blue-500 hover:text-blue-800">
                Scrap
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/main/subscription"
                className="text-blue-500 hover:text-blue-800"
              >
                Subscription
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
