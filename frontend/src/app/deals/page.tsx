"use client";
import React, { useEffect, useState } from "react";

type Deal = {
  _id: string;
  id: number;
  title: string;
  location: string;
  label: string;
  category: string;
  image: string;
  detailsUrl: string;
  bookUrl: string;
};

const API_URL = "http://localhost:5000/api/deals";

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllDeals = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch deals");
        const data = await res.json();
        setDeals(data);
      } catch (e: any) {
        setError(e.message || "Failed to load deals.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllDeals();
  }, []);

  return (
    <main className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Hotel Deals</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : deals.length === 0 && !loading && !error ? null : deals.length === 0 ? (
        <p className="text-center">No deals found.</p>
      ) : (
        <ul className="mt-6 flex flex-wrap gap-6 justify-center">
          {deals.map((deal) => (
            <li key={deal._id} className="mb-4 border border-gray-200 p-4 rounded-lg flex flex-col items-start max-w-xs bg-white shadow hover:shadow-lg transition">
              {deal.image && (
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full max-w-xs rounded-lg mb-3 object-cover h-48"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{deal.title}</h2>
              <p><b>Location:</b> {deal.location}</p>
              <p><b>Label:</b> {deal.label}</p>
              <p><b>Category:</b> {deal.category}</p>
              <div className="flex gap-3 mt-4">
                <a
                  href={deal.detailsUrl}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
                >
                  View Details
                </a>
                <a
                  href={deal.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-green-500 text-white font-bold hover:bg-green-600 transition"
                >
                  Book Now
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
