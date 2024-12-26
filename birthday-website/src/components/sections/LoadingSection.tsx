export function LoadingSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-48 h-48 mx-auto rounded-full bg-pink-200 animate-bounce overflow-hidden shadow-lg">
          <img
            src="/images/cat-loading.gif"
            alt="Loading cat"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-pink-600 font-bold animate-pulse text-xl">
          Loading your surprise...
        </p>
      </div>
    </div>
  );
}
