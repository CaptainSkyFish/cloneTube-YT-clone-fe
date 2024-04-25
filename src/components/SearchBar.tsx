export const SearchBar = () => {
    return <form className="px-4 pt-2 w-full max-w-[630px]">
    <label
      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label>
    <div className="relative">
      <div
        className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
        >
          <path
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
          ></path>
        </svg>
      </div>
      <input
        placeholder="Search"
        className="max-sm:hidden block w-full p-4 py-2 ps-10 text-lg text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none hover:border-blue-500 dark:bg-slate-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="default-search"
        type="search"
      />
      <button
        className="absolute end-1 bottom-1/2 translate-y-1/2 p-3 text-sm font-medium text-white bg-slate-700 rounded-full border border-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
          ></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  </form>
  
}