// src/app/page.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Heart, Music, Gift, Calendar } from "lucide-react";
import { LoadingSection } from "@/components/sections/LoadingSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { calculateTimeLeft } from "@/lib/utils";
import type { CountdownTime, Memory } from "@/lib/types";

const memories: Memory[] = [
  {
    title: "Mysoreee",
    description: "Very cute it wassss",
    date: "2024-7-22",
    image: "/images/1.jpg",
  },
  {
    title: "Chikmagaluruuuu",
    description:
      "Still want to be with you on top of that hilll sitting and writing our journals",
    date: "2024-10-28",
    image: "/images/2.jpg",
  },
  {
    title: "Chikmagaluru 2",
    description: "Cutie onlyy.",
    date: "2024-10-28",
    image: "/images/3.jpg",
  },
  {
    title: "Samhitha's picture, idk what to title it :/, but cute",
    description: "Cute cute.",
    date: "2024-10-28",
    image: "/images/4.jpg",
  },
  {
    title: "Samhitha's picture, idk what to title it :/, but cute",
    description: "Cute cute.",
    date: "2024-10-28",
    image: "/images/5.jpg",
  },
  {
    title: "I miss youuuuuuu",
    description: "Like a lottt, why tf is bombay so farrr.",
    date: "2024-11-26",
    image: "/images/6.jpg",
  },
  {
    title: "Samhitha's picture, idk what to title it :/, but cute",
    description: "Cute cute.",
    date: "2024-10-28",
    image: "/images/7.jpg",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState<CountdownTime | null>(null);
  const [isTime, setIsTime] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  const targetDate = new Date(
    process.env.NEXT_PUBLIC_BIRTHDAY_DATE || "2024-12-24T20:45:00"
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        setIsTime(true);
        clearInterval(timer);
      }
    }, 1000);

    setTimeout(() => setLoading(false), 2000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (loading) {
    return <LoadingSection />;
  }

  if (!isTime && timeLeft) {
    return <CountdownSection timeLeft={timeLeft} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Birthday Section */}
      <section className="min-h-screen flex items-center justify-center p-6 md:p-8">
        <div className="text-center space-y-10">
          <div className="w-64 h-64 md:w-72 md:h-72 mx-auto rounded-full border-4 border-blue-300 overflow-hidden shadow-2xl animate-float">
            <Image
              src="/images/birthday-cat.jpeg"
              alt="Birthday cat"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 animate-wiggle">
              Happy Birthday Cutieeeeeee! 🎉
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Keep scrolling for your surprise!
            </p>
          </div>
          <Gift className="w-16 h-16 mx-auto text-blue-500 animate-bounce" />
        </div>
      </section>

      {/* Music Section */}
      <section className="min-h-screen flex items-center justify-center relative p-6">
        {/* Background Image */}
        <Image
          src="/images/music-cat.jpeg" // Adjust the path to your background image
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: "brightness(0.5)" }} // Optional: darken the image for better text contrast
        />

        {/* Content */}
        <div className="relative max-w-md w-full space-y-8 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg z-10">
          <h2 className="text-3xl font-bold text-black-50 text-center">
            Scan the playlist below!
          </h2>
          <div className="bg-black p-6 rounded-xl shadow-lg">
            <Image
              src="/images/spotify-code.jpg"
              alt="Spotify Code"
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
          <p className="text-xl leading-relaxed text-gray-700">
            helloww!, play the music while you read our letters below!
          </p>
          <audio
            controls
            className="w-full"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/images/is-it-true.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      {/* Letter Section */}

      <section className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
        <div className="max-w-2xl bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
          <Heart className="w-10 h-10 text-blue-500 mb-6" />
          <div className="prose prose-blue max-w-none">
            <p className="text-xl leading-relaxed text-gray-700">
              Hellooo Dumbasss,
              <br />
              <br />
              Hello there Birthday Cutie patootie!!!!!!!!!! first offf
              HAAPPPPPYYYYYY BIRTHDAYYYYYY MYY LOVVEEERRRRRRRRRRRRRRRR!! I know
              this webiste looks schwupiddd, but you know its the effort that
              counts, hehe! Anyways I wish I could be there and give you a
              really tight hug, and wish you a super fuckinnnnn happyyyyyyy
              birthdayyyyyyy!!!!!!!!!!!!!!! but you know the way life is and the
              things are right now, its not possible for me to be there as much
              as I want to!!!!
              <br />
              <br />
              And let’s start thanking gods for me being with you!!, like fr
              what were the chances of us happening! But I thank godd that we
              happened, like out of all permutations and combinations of our
              ancestors and shit, and us being born in the same timeline and
              meeting and then eventually to now!! am hella lucky cutie!
              <br />
              <br />
              I've got hella lot of things to say, but I Know your friends might
              be waiting for you, and I've got you all once you're back, so Imma
              wait for two veryyyyyyy longgg dayssssss
              <br />
              <br />
              Love,
              <br />
              Your Love,
              <br />
              Vaibhav G
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
        <div className="max-w-2xl bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
          <Heart className="w-10 h-10 text-blue-500 mb-6" />
          <div className="prose prose-blue max-w-none">
            <p className="text-xl leading-relaxed text-gray-700">
              Hey thereeeee Raghavi M,
              <br />
              <br />
              I’m in love with you, it all started with that birthday picture of
              you and me, that’s how we happenedd, and am glad that we didd!!
              <br />
              <br />
              And then we’ve always been together, our bond has beenn alll
              typess of shit, you being my friend to my sister, to my lover, and
              to my mum tfff!! So yeah we’ve seen shit together for almost 3
              years now, a realllyyy longg timeee. I love how we never give up
              on each other, its like you said we are like people in a
              relationship, more than that tbhh People willlll come and go, but
              you’ll always be my chickkk :)
              <br />
              <br />
              All I gotta say is that am grateful for having you and blessed for
              having you, and we’ll be together forever and everr and everrrr
              <br />
              <br />
              Love,
              <br />
              Your Love Part 2 ,
              <br />
              Samhitha B H
            </p>
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="min-h-screen p-8 bg-gradient-to-t from-blue-100 to-white">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
          last but not the least, pictures babyyyyy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="group relative h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() =>
                setSelectedMemory(selectedMemory === index ? null : index)
              }
            >
              <div className="absolute inset-0 bg-blue-100">
                <Image
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{memory.title}</h3>
                  <p className="text-sm opacity-90">{memory.date}</p>
                </div>
              </div>
              {selectedMemory === index && (
                <div className="absolute inset-0 bg-white p-6 rounded-xl shadow-2xl transform transition-all duration-500">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    {memory.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {memory.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-4">{memory.date}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
