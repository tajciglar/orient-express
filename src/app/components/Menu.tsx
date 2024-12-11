"use client";

import React, { useEffect, useState } from "react";
import { fetchWeeklyMenu } from "../contentfulClient"; 

interface MenuItem {
  dan: string;
  datum: string;
  jedi: string[];
}

const Menu = () => {
  const [tedenskiMeni, setTedenskiMeni] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMenu = async () => {
        console.log("in")
      try {
        const data = await fetchWeeklyMenu();
        setTedenskiMeni(data)
      } catch (error) {
        setError(`Failed to load menu. Please try again later. Error: ${error} `);
      } finally {
        setLoading(false);
      }
    };

    getMenu();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="tedenskiMeni" className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-6">
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ta teden vam nudimo:</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-gray-800">Dan</th>
                <th className="px-4 py-2 text-gray-800">Datum</th>
                <th className="px-4 py-2 text-gray-800">Ponudba</th>
              </tr>
            </thead>
            <tbody>
              {tedenskiMeni.map((dan, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 text-gray-600 font-semibold">{dan.dan}</td>
                  <td className="px-4 py-2 text-gray-600">{new Date(dan.datum).toLocaleDateString()}</td>
                  <td className="px-4 py-2 text-gray-600">
                    <ul className="list-disc ml-5">
                      {dan.jedi.map((jed, idx) => (
                        <li key={idx}>{jed}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Menu;