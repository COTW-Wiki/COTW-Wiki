import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import equipmentData from '../data/equipmentData';

export default function EquipmentTable() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 text-sm text-gray-200">
      {/* Table Header */}
      <div className="bg-gray-800 border border-gray-600 p-2 font-bold flex justify-between items-center text-blue-100">
        <span>Equipments</span>
        <span 
          className="text-xs cursor-pointer hover:underline text-blue-400"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          [{isCollapsed ? 'Expand' : 'Collapse'}]
        </span>
      </div>

      {!isCollapsed && (
        <table className="w-full border-collapse border border-gray-600 bg-gray-900">
          <tbody>
            {equipmentData.map((section, sIndex) => {
              return section.subsections.map((sub, subIndex) => {
                const isFirstSubsection = subIndex === 0;

                return (
                  <tr key={`${section.category}-${subIndex}`} className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors">
                    
                    {/* COLUMN 1: Main Category (Only render on the first row of the group) */}
                    {isFirstSubsection && (
                      <td 
                        rowSpan={section.subsections.length} 
                        className="p-3 font-bold text-blue-200 border-r border-gray-600 bg-gray-800/40 align-middle w-32"
                      >
                        {section.link ? (
                          <Link to={section.link} className="hover:underline hover:text-white">
                            {section.category}
                          </Link>
                        ) : (
                          section.category
                        )}
                      </td>
                    )}

                    {/* COLUMN 2: Sub-category (Only render if it has a name) */}
                    {/* If the sub name is null (like Binoculars), we might skip this or merge cells. 
                        Based on your screenshot, Binoculars acts as both. 
                        Here is the logic to handle the "Lures" vs "Binoculars" layout: */}
                    
                    {section.subsections.length > 1 || sub.name ? (
                       <td className="p-3 font-semibold text-blue-300 border-r border-gray-600 w-32 align-middle">
                         {sub.link ? (
                           <Link to={sub.link} className="hover:underline hover:text-white">
                             {sub.name || section.category}
                           </Link>
                         ) : (
                           sub.name || section.category
                         )}
                       </td>
                    ) : null}

                    {/* COLUMN 3: The Items List */}
                    <td 
                      className="p-3 align-middle"
                      // If there is no sub-category column (like Binoculars might be), span 2 columns
                      colSpan={section.subsections.length === 1 && !sub.name ? 2 : 1}
                    >
                      <div className="flex flex-wrap items-center gap-x-1 leading-relaxed">
                        {sub.items.map((item, i) => (
                          <span key={i} className="inline-flex items-center">
                            
                            {/* Item Icon */}
                            {item.icon && (
                              <img 
                                src={item.icon} 
                                alt="" 
                                className="w-[50px] h-[25px] mr-1 object-contain" 
                              />
                            )}
                            
                            {/* Item Name (Link if available) */}
                            {item.link ? (
                              <Link to={item.link} className="text-blue-100 hover:text-white hover:underline">
                                {item.name}
                              </Link>
                            ) : (
                              <span className="text-gray-400 cursor-default">
                                {item.name}
                              </span>
                            )}

                            {/* The dot separator (don't show after the last item) */}
                            {i < sub.items.length - 1 && (
                              <span className="mx-1 text-gray-500">•</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
