'use client';

import { useState } from 'react';

export default function StreamerSignupPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const res = await fetch('/api/streamer-signup', {
      method: 'POST',
      body: formData,
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="min-h-screen bg-[#9147ff] text-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-5xl font-bold text-black mb-4">Stream. Sweat. Earn.</h1>
      <p className="text-center max-w-xl text-lg mb-6">
        Be one of the first creators on <span className="font-bold">Fitverse</span> — the new home for live health & fitness streaming.<br />
        Connect with fans, go live, and earn from ads by top fitness brands & gyms.
      </p>

      {success ? (
        <p className="text-green-200 font-semibold">Thanks for signing up! We&apos;ll be in touch soon.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white text-black rounded-lg p-6 shadow-lg flex flex-col gap-4"
          encType="multipart/form-data"
        >
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:ring-2 focus:ring-purple-500 hover:border-gray-400 transition"
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:ring-2 focus:ring-purple-500 hover:border-gray-400 transition"
          />
          <input
            name="social"
            type="text"
            placeholder="Instagram/YouTube link"
            required
            className="px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:ring-2 focus:ring-purple-500 hover:border-gray-400 transition"
          />
          <input
            name="niche"
            type="text"
            placeholder="Health & fitness style (e.g., HIIT, Yoga, Nutrition)"
            required
            className="px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:ring-2 focus:ring-purple-500 hover:border-gray-400 transition"
          />
          <textarea
            name="pitch"
            placeholder="Tell us what makes your stream exciting"
            required
            className="px-4 py-2 rounded-md border border-gray-300 bg-white text-black min-h-[100px] font-sans focus:ring-2 focus:ring-purple-500 hover:border-gray-400 transition"
          />
          <div className="text-sm text-gray-600 text-left w-full max-w-md">
            Optional: Upload a short video sample (max 50MB)
          </div>
          <input
            type="file"
            name="video"
            accept="video/*"
            className="file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition-transform active:scale-95"
          >
            {loading ? 'Submitting...' : 'Sign Up'}
          </button>

          <p className="text-xs text-gray-600 mt-2 text-center">
            By signing up, you agree to our{' '}
            <a href="/terms" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">Terms of Service</a> and{' '}
            <a href="/privacy" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </p>
        </form>
      )}

      <footer className="text-sm text-gray-200 mt-10 text-center">
        Built for the fitness community. By creators, for creators.
      </footer>
    </div>
  );
}
