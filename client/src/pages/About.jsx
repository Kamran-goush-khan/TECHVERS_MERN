import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About TechVerse
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              TechVerse Blog is a dynamic platform where tech enthusiasts
              worldwide come together. With a wide range of content, from
              programming tutorials to cybersecurity insights, there's something
              for everyone. Join our community to connect, learn, and stay
              updated on the latest in tech.
            </p>

            <p>
              Explore our curated articles and tutorials covering various tech topics. Engage in discussions with like-minded individuals, share your expertise, and learn from others' experiences. With TechVerse Blog, you're part of a vibrant community dedicated to fostering knowledge sharing and collaboration.
            </p>

            <p>
              Join us today and elevate your tech journey with valuable resources, interactive discussions, and connections with fellow tech enthusiasts. Whether you're a beginner or an expert, TechVerse Blog is your go-to destination for all things tech-related.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
