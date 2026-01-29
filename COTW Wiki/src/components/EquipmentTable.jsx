import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import equipmentData from '../data/equipmentData';

export default function EquipmentTable() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full mt-8">
      {/* Title Outside the Table */}
      <div className="flex justify-between items-end mb-4 border-b border-[#3a5a75] pb-2">
        <h2 className="wiki-section-title" style={{ border: 'none', margin: 0 }}>Equipments</h2>
        <span 
          className="text-sm cursor-pointer hover:underline text-[#6fb2e6] font-bold mb-2"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '[Expand]' : '[Collapse]'}
        </span>
      </div>

      {!isCollapsed && (
        <div className="wiki-table-container">
          <table className="wiki-table">
            <tbody>
              {equipmentData.map((section, sIndex) => {
                return section.subsections.map((sub, subIndex) => {
                  const isFirstSubsection = subIndex === 0;

                  return (
                    <tr key={`${section.category}-${subIndex}`}>
                      {/* COLUMN 1: Category */}
                      {isFirstSubsection && (
                        <td 
                          rowSpan={section.subsections.length} 
                          className="wiki-th w-32 align-middle font-bold"
                        >
                          {section.link ? (
                            <Link to={section.link} className="wiki-link" style={{color: '#fff'}}>
                              {section.category}
                            </Link>
                          ) : (
                            section.category
                          )}
                        </td>
                      )}

                      {/* COLUMN 2: Sub-category */}
                      {section.subsections.length > 1 || sub.name ? (
                         <td className="wiki-td w-32 align-middle font-semibold text-[#a4cce8]">
                           {sub.link ? (
                             <Link to={sub.link} className="wiki-link">
                               {sub.name || section.category}
                             </Link>
                           ) : (
                             sub.name || section.category
                           )}
                         </td>
                      ) : null}

                      {/* COLUMN 3: Items */}
                      <td className="wiki-td align-middle" colSpan={section.subsections.length === 1 && !sub.name ? 2 : 1}>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                          {sub.items.map((item, i) => (
                            <span key={i} className="inline-flex items-center">
                              {item.icon && (
                                <img src={item.icon} alt="" className="w-[55px] h-[30px] mr-2 object-contain" />
                              )}
                              {item.link ? (
                                <Link to={item.link} className="wiki-link">{item.name}</Link>
                              ) : (
                                <span className="text-[#dbe4eb]">{item.name}</span>
                              )}
                              {i < sub.items.length - 1 && <span className="ml-2 text-gray-600">•</span>}
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
        </div>
      )}
    </div>
  );
}