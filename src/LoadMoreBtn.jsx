function LoadMoreButton() {
  return (
    <button className="w-[365px] h-[36px] border border-[#E1EAF6] rounded-[10px] text-[#5B6A7D] text-sm font-normal flex items-center justify-center gap-2">
      Load more
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export default LoadMoreButton;
