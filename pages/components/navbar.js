import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav>
        <div className="">
          <div className="flex p-4 justify items-center">
            <div className="flex items-center space-x-8">
              <Image src="/whatifcrypto-logo.png" height="50" width="250" alt="logo" />
              {/* <div className="hidden md:flex justify-around space-x-4">
                <a href="#" className="hover:text-indigo-600 text-gray-700">Home</a>
                <a href="#" className="hover:text-indigo-600 text-gray-700">About</a>
                <a href="#" className="hover:text-indigo-600 text-gray-700">Service</a>
                <a href="#" className="hover:text-indigo-600 text-gray-700">Contact</a>
              </div> */}
            </div>
            {/* <div className="flex space-x-4 items-center hidden">
              <a href="#" className="text-gray-800 text-sm">LOGIN</a>
              <a href="#" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</a>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  )
}