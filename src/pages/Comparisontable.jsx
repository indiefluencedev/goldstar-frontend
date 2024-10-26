import React, { useEffect } from 'react';
import MetaTag from '../utils/meta';
import trackPageView from '../utils/tracking';

const tableData = [
  { function: 'LED Light', 
    GS_D1: 'YES', GS_D2: 'YES', GS_DA3: 'YES', GS_DA4: 'YES', GS_D5: 'YES', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Needle Up/Down', 
    GS_D1: 'YES', GS_D2: 'YES', GS_DA3: 'YES', GS_DA4: 'YES', GS_D5: 'YES', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Direct Drive Motor', 
    GS_D1: 'YES', GS_D2: 'YES', GS_DA3: 'YES', GS_DA4: 'YES', GS_D5: 'YES', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Thread Trimmer',
    GS_D1: '', GS_D2: 'YES', GS_DA3: 'YES', GS_DA4: 'YES', GS_D5: 'YES', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Automatic Bartack', 
    GS_D1: '', GS_D2: '', GS_DA3: 'YES', GS_DA4: 'YES', GS_D5: 'YES', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Stitch Programming', 
    GS_D1: '', GS_D2: '', GS_DA3: 'YES', GS_DA4: 'YES', GS_D5: 'YES', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Auto Foot Lifter', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: 'YES', GS_D5: 'YES', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Voice Guidance', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: 'YES', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Shorter Tail', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: 'YES', GS_D6: '', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Sealed Oil Pan', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: 'YES', GS_D6: '', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Double Cutter', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: 'YES', GS_D6: '', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Preloaded Stitch Patterns', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: '', GS_D6: 'YES(9)', GS_D7: 'YES(8)', GS_D7X: 'YES (8)', GS_D8: 'YES(8)' },
  { function: 'Stepping Motors', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: '', GS_D6: 'YES(Single)', GS_D7: 'YES(Double)', GS_D7X: 'YES (Single)', GS_D8: 'YES(Double)' },
  { function: 'Electronic Reverse Mechanism', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: '', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: '', GS_D8: 'YES' },
  { function: 'Digital Stitch Regulator', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: '', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: '', GS_D8: 'YES' },
  { function: 'Digital Feeding Mechanism', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: '', GS_D6: 'YES', GS_D7: 'YES', GS_D7X: '', GS_D8: 'YES' },
  { function: 'Electronic Foot Lifter', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: '', GS_D6: '', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Electronic Tension', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: '', GS_D6: '', GS_D7: 'YES', GS_D7X: 'YES', GS_D8: 'YES' },
  { function: 'Needle Feed', 
    GS_D1: '', GS_D2: '', GS_DA3: '', GS_DA4: '', GS_D5: '', GS_D6: '', GS_D7: '', GS_D7X: '', GS_D8: 'YES' },
];

const ComparisonTable = () => {

  useEffect(() => {
    trackPageView("/comparisontable", "Utilities | ComparisonTable Page");
}, []);


  return (
    <>
      <MetaTag title="GoldStar - Comparison table" />
      <div className="container mx-auto pt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#544484]">LOCKSTITCH</h2>
        <div className="overflow-x-auto max-h-[70vh]">
          <table className="min-w-full border-collapse table-fixed border border-gray-400">
            <thead className="sticky top-0 bg-[#544484]">
              <tr>
                <th className="border py-3 px-4 text-left text-white">Functions</th>
                <th className="border py-3 px-4 text-white">GS D1</th>
                <th className="border py-3 px-4 text-white">GS D2</th>
                <th className="border py-3 px-4 text-white">GS DA3</th>
                <th className="border py-3 px-4 text-white">GS DA4</th>
                <th className="border py-3 px-4 text-white">GS D5</th>
                <th className="border py-3 px-4 text-white">GS D6</th>
                <th className="border py-3 px-4 text-white">GS D7</th>
                <th className="border py-3 px-4 text-white">GS D7X</th>
                <th className="border py-3 px-4 text-white">GS D8</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="bg-white even:bg-gray-100">
                  <td className="border py-3 px-4 text-[#544484]">{row.function}</td>
                  {Object.keys(row).slice(1).map((key, idx) => (
                    <td key={idx} className={`border py-3 px-4 ${row[key] ? 'bg-[#97c0e6]' : ''} text-center`}>
                      {row[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ComparisonTable;
