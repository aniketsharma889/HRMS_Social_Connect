export default function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl mt-6 shadow p-6 flex flex-col items-center text-left max-w-md border-2">
      
      <div className="flex items-center w-full mb-4">

        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mr-4"
        />
        
        <div>
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-sm text-gray-500">UI/UX Designer</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 w-full">
        <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Figma</span>
        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Canva</span>
        <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Photoshop</span>
      </div>

      <p className="text-sm text-gray-600 mb-4 w-full px-2">
        Creative designer with 3 years of experience in~ user-centric design and branding.
      </p>

      <div className="flex space-x-4 w-full px-2">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
            alt="LinkedIn"
            className="w-5 h-5"
          />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"
            alt="Twitter"
            className="w-5 h-5"
          />
        </a>
      </div>
    </div>
  );
}
