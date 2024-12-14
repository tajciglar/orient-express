"use client";

import React, { useEffect, useState } from "react";
import { fetchWeeklyMenu } from "../contentfulClient";

interface MenuItem {
  dan: string;  
  datum: string; 
  jedi: string[]; 
}

const predefinedDays = [
  { dan: "Ponedeljek", datum: "" },
  { dan: "Torek", datum: "" },
  { dan: "Sreda", datum: "" },
  { dan: "Četrtek", datum: "" },
  { dan: "Petek", datum: "" },
];

const danasnjiDatum = "2024-12-13"

const Menu = () => {
  const [tedenskiMeni, setTedenskiMeni] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMenu = async () => {
      console.log("Fetching weekly menu...");
      try {
        const data: MenuItem[] = await fetchWeeklyMenu();
        
        console.log(data)
        // Sort and align data with predefined days
        const sortedMenu = predefinedDays.map((day, index) => {
          const matchedDay = data.find(
            (item) => item.dan === predefinedDays[index].dan
          );
          return matchedDay || { ...day, jedi: [] }; 
        });

        setTedenskiMeni(sortedMenu);
      } catch (error) {
        setError(`Failed to load menu. Please try again later. Error: ${error}`);
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
                {tedenskiMeni.map((day, index) => (
                  <th key={index} className="px-4 py-2">
                    <div className="flex flex-col items-center justify-center">
                      <span className="font-medium">{day.dan}</span>
                      {day.datum && (
                        <span className="text-sm text-gray-600" >
                          {new Intl.DateTimeFormat('en-GB').format(new Date(day.datum))}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {tedenskiMeni.map((day, index) => (
                  <td key={index} className={`border px-4 py-2 ${day.datum === danasnjiDatum ? 'bg-gray-50 ' : 'bg-white text-black'}`}>
                    <ul>
                      {day.jedi.map((jedi, i) => (
                        <li key={i}>{jedi}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div >
          <h3>Cenik:</h3>
          <ul className="flex flex-col items-start">
            <li>
              Glavna jed <b>7,20e (z DDV)</b>
            </li>
            <li>
                Glavna jed + juha / solata / sladica <b>8,50e (z DDV)</b>
            </li>
            <li>
                Glavna jed + juha + solata + sladoca <b>10,90e (z DDV)</b>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Menu;