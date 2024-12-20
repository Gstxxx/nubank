"use client";
export function StatusBar() {
  return (
    <div className="flex justify-between items-center p-4 text-white">
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">08:30</span>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 12l14-9v18z" />
        </svg>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 flex items-center">
          <div className="h-2 w-0.5 bg-white mx-[1px]" />
          <div className="h-3 w-0.5 bg-white mx-[1px]" />
          <div className="h-4 w-0.5 bg-white mx-[1px]" />
        </div>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
        </svg>
        <div className="flex items-center">
          <span className="text-sm">38</span>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
