import { Calendar } from "lucide-react";
import type { CountdownTime } from "@/lib/types";

interface CountdownSectionProps {
  timeLeft: CountdownTime;
}

export function CountdownSection({ timeLeft }: CountdownSectionProps) {
  const timeString = `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <div className="w-48 h-48 mx-auto rounded-full bg-pink-100 overflow-hidden shadow-xl animate-float">
          <img
            src="/images/waiting-cat.gif"
            alt="Waiting cat"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-pink-600 animate-pulse">
            Coming Soon!
          </h2>
          <div className="text-3xl font-semibold text-gray-700 bg-white px-6 py-3 rounded-lg shadow-md">
            {timeString}
          </div>
        </div>
        <Calendar className="w-12 h-12 mx-auto text-pink-500 animate-wiggle" />
      </div>
    </div>
  );
}
