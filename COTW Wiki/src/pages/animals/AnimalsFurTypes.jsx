import React from 'react';
import albinoRedDeer from '../../assets/AlbinoRedDeer.jpg';

export default function FurTypesPage() {

  const furData = [
    {
      type: "Albino",
      count: 75,
      animals: [
        "1. American Alligator", "2. Antelope Jackrabbit", "3. Axis Deer", "4. Banteng", 
        "5. Beceite Ibex", "6. Bengal Tiger", "7. Bighorn Sheep", "8. Blackbuck", 
        "9. Blacktail Deer", "10. Blue Wildebeest", "11. Bobwhite Quail", "12. Cape Buffalo",
        "13. Caribou", "14. Chamois", "15. Collared Peccary", "16. Common Raccoon",
        "17. Coyote", "18. Eastern Cottontail Rabbit", "19. Eastern Grey Kangaroo",
        "20. Eastern Wild Turkey", "21. Eurasian Brown Bear", "22. Eurasian Lynx",
        "23. European Bison", "24. European Hare", "25. European Rabbit", "26. Fallow Deer",
        "27. Feral Goat", "28. Feral Pig", "29. Gredos Ibex", "30. Green-winged Teal",
        "31. Grey Fox", "32. Grey Wolf", "33. Grizzly Bear", "34. Harlequin Duck",
        "35. Iberian Mouflon", "36. Iberian Wolf", "37. Javan Rusa", "38. Lesser Kudu", 
        "39. Lion", "40. Merriam's Turkey", "41. Mexican Bobcat", "42. Moose", 
        "43. Mountain Goat", "44. Mountain Hare", "45. Mountain Lion", "46. Mule Deer", 
        "47. Plains Bison", "48. Pronghorn", "49. Puma", "50. Raccoon Dog", 
        "51. Red Deer", "52. Red Fox", "53. Reindeer", "54. Ring-Necked Pheasant", 
        "55. Rio Grande Turkey", "56. Rocky Mountain Elk", "57. Roe Deer", "58. Ronda Ibex",
        "59. Roosevelt Elk", "60. Saltwater Crocodile", "61. Sambar", "62. Scrub Hare", 
        "63. Siberian Musk Deer", "64. Side-Striped Jackal", "65. Sika Deer", 
        "66. Southeastern Spanish Ibex", "67. Springbok", "68. Stubble Quail", 
        "69. Tufted Duck", "70. Warthog", "71. Water Buffalo", "72. White-Tailed Deer", 
        "73. White-Tailed Jackrabbit", "74. Wild Boar", "75. Wild Hog"
      ],
      notes: ""
    },
    {
      type: "Ashen",
      count: 1,
      animals: ["1. Moose"],
      notes: "Moose: Only possible for Great One"
    },
    {
      type: "Bald Leucistic",
      count: 1,
      animals: ["1. Canada Goose"],
      notes: ""
    },
    {
      type: "Beige",
      count: 5,
      animals: [
        "1. Blackbuck", "2. Cinnamon Teal", "3. Gemsbok", "4. Mountain Goat", 
        "5. White-Tailed Jackrabbit"
      ],
      notes: ""
    },
    {
      type: "Bicolor",
      count: 2,
      animals: ["1. Rock Ptarmigan", "2. Willow Ptarmigan"],
      notes: ""
    },
    {
      type: "Birch",
      count: 1,
      animals: ["1. Moose"],
      notes: "Moose: Only possible for Great One"
    },
    {
      type: "Black",
      count: 7,
      animals: [
        "1. Bighorn Sheep", "2. Black Bear", "3. Blackbuck", "4. Cape Buffalo", 
        "5. Feral Goat", "6. Sika Deer", "7. Water Buffalo"
      ],
      notes: ""
    },
    {
      type: "Black-Brown",
      count: 3,
      animals: ["1. Feral Goat", "2. Mallard", "3. Springbok"],
      notes: ""
    },
    {
      type: "Black-White",
      count: 1,
      animals: ["1. Feral Goat"],
      notes: ""
    },
    {
      type: "Blackgold",
      count: 3,
      animals: ["1. Feral Pig", "2. Wild Boar", "3. Wild Hog"],
      notes: ""
    },
    {
      type: "Black Spots",
      count: 2,
      animals: ["1. Feral Pig", "2. Wild Hog"],
      notes: ""
    },
    {
      type: "Blond/Blonde",
      count: 7,
      animals: [
        "1. Black Bear", "2. Common Raccoon", "3. Eurasian Brown Bear", 
        "4. Feral Goat", "5. Lion", "6. Mallard", "7. Mule Deer"
      ],
      notes: ""
    },
    {
      type: "Blonde Piebald",
      count: 1,
      animals: ["1. Common Raccoon"],
      notes: ""
    },
    {
      type: "Blue",
      count: 1,
      animals: ["1. Bobcat", "2. Mexican Bobcat"],
      notes: ""
    },
    {
      type: "Bright",
      count: 1,
      animals: ["1. Western Capercaillie"],
      notes: ""
    },
    {
      type: "Bronze",
      count: 2,
      animals: ["1. Bighorn Sheep", "2. Eastern Wild Turkey"],
      notes: ""
    },
    {
      type: "Brown",
      count: 38,
      animals: [
        "1. Antelope Jackrabbit", "2. Bighorn Sheep", "3. Black Bear", "4. Blackbuck",
        "5. Bobwhite Quail", "6. Cape Buffalo", "7. Chamois", "8. Collared Peccary",
        "9. Common Raccoon", "10. Eastern Cottontail Rabbit", "11. Eastern Wild Turkey",
        "12. Eurasian Widgeon", "13. European Bison", "14. European Hare", "15. European Rabbit",
        "16. Feral Goat", "17. Feral Pig", "18. Grizzly Bear", "19. Mexican Bobcat",
        "20. Moose", "21. Mule Deer", "22. Plains Bison", "23. Red Deer", "24. Reindeer",
        "25. Ring-Necked Pheasant", "26. Rio Grande Turkey", "27. Rocky Mountain Elk",
        "28. Roe Deer", "29. Ronda Ibex", "30. Roosevelt's Elk", "31. Scrub Hare",
        "32. Sika Deer", "33. Water Buffalo", "34. Western Capercaillie", 
        "35. White-Tailed Deer", "36. White-Tailed Jackrabbit", "37. Wild Boar", "38. Wild Hog"
      ],
      notes: "Merriam's Turkey once had this plumage type."
    },
    {
      type: "Brown-Hybrid",
      count: 8,
      animals: [
        "1. Beceite Ibex", "2. Canada Goose", "3. Feral Pig", "4. Gredos Ibex", 
        "5. Mallard", "6. Ronda Ibex", "7. Southeastern Spanish Ibex", "8. Wild Hog"
      ],
      notes: ""
    },
    {
      type: "Buff",
      count: 5,
      animals: [
        "1. Beceite Ibex", "2. Gredos Ibex", "3. Rio Grande Turkey", 
        "4. Ronda Ibex", "5. Southeastern Spanish Ibex"
      ],
      notes: ""
    },
    {
      type: "Chestnut",
      count: 2,
      animals: ["1. Black Bear", "2. Scrub Hare"],
      notes: "Black Bear: Only possible for Great One"
    },
    {
      type: "Chocolate",
      count: 1,
      animals: ["1. Fallow Deer"],
      notes: ""
    },
    {
      type: "Cinnamon",
      count: 3,
      animals: ["1. Black Bear", "2. Cinnamon Teal", "3. Eurasian Brown Bear"],
      notes: ""
    },
    {
      type: "Cream",
      count: 2,
      animals: ["1. Black Bear", "2. Tufted Duck"],
      notes: "Great One Fur (Black Bear)"
    },
    {
      type: "Crowned",
      count: 1,
      animals: ["1. Blue Wildebeest"],
      notes: "Only females can have this fur type variation"
    },
    {
      type: "Dark",
      count: 11,
      animals: [
        "1. Axis Deer", "2. Black Bear", "3. Blackbuck", "4. Eurasian Widgeon",
        "5. Fallow Deer", "6. Gemsbok", "7. Harlequin Duck", "8. Plains Bison",
        "9. Pronghorn", "10. Warthog", "11. Western Capercaillie"
      ],
      notes: ""
    },
    {
      type: "Dark-Brown",
      count: 25,
      animals: [
        "1. American Alligator", "2. Antelope Jackrabbit", "3. Blackbuck", "4. Caribou", 
        "5. Chamois", "6. Collared Peccary", "7. Eurasian Brown Bear",
        "8. European Bison", "9. European Hare", "10. European Rabbit",
        "11. Feral Goat", "12. Feral Pig", "13. Harlequin Duck", "14. Lesser Kudu",
        "15. Lion", "16. Merriam's Turkey", "17. Moose", "18. Red Deer",
        "19. Reindeer", "20. Roe Deer", "21. Siberian Musk Deer", "22. Springbok",
        "23. White-Tailed Deer", "24. Wild Boar", "25. Wild Hog"
      ],
      notes: ""
    },
    {
      type: "Dark-Green",
      count: 1,
      animals: ["1. Eurasian Teal"],
      notes: ""
    },
    {
      type: "Dark-Grey",
      count: 7,
      animals: [
        "1. Black-Tailed Deer", "2. Blue Wildebeest", "3. Collared Peccary",
        "4. Coyote", "5. Grey Wolf", "6. Harlequin Duck", "7. Roe Deer"
      ],
      notes: ""
    },
    {
      type: "Dark-Red",
      count: 3,
      animals: ["1. Red Fox", "2. Mountain Lion", "3. Puma"],
      notes: ""
    },
    {
      type: "Dark Spotted",
      count: 2,
      animals: ["1. Fallow Deer", "2. Sika Deer"],
      notes: ""
    },
    {
      type: "Dilute",
      count: 1,
      animals: ["1. Mule Deer"],
      notes: ""
    },
    {
      type: "Dusky",
      count: 2,
      animals: ["1. Black Bear", "2. Lesser Kudu"],
      notes: ""
    },
    {
      type: "Dusky Gradient",
      count: 1,
      animals: ["1. Sambar"],
      notes: ""
    },
    {
      type: "Eclipse",
      count: 2,
      animals: ["1. Eurasian Widgeon", "2. Tufted Duck"],
      notes: ""
    },
    {
      type: "Eggwhite",
      count: 1,
      animals: ["1. Grey Wolf"],
      notes: ""
    },
    {
      type: "Fantasma",
      count: 1,
      animals: ["1. Iberian Wolf"],
      notes: "Mission Animal"
    },
    {
      type: "Glacier",
      count: 1,
      animals: ["1. Black Bear"],
      notes: "Great One Fur (Black Bear)"
    },
    {
      type: "Gold",
      count: 4,
      animals: [
        "1. Bengal Tiger", "2. Blue Wildebeest", "3. Eurasian Brown Bear", "4. Gemsbok"
      ],
      notes: ""
    },
    {
      type: "Golden",
      count: 1,
      animals: ["1. Fallow Deer"],
      notes: "Only possible for Great One"
    },
    {
      type: "Gray/Grey",
      count: 35,
      animals: [
         "1. Black-Tailed Deer", "2. Blue Wildebeest", "3. Collared Peccary", "4. Coyote", 
         "5. European Rabbit", "6. Feral Goat", "7. Feral Pig", "8. Grey Fox", 
         "9. Grey Wolf", "10. Grizzly Bear", "11. Harlequin Duck", 
         "12. Eurasian Brown Bear", "13. Eurasian Lynx", "14. Eurasian Widgeon",
         "15. European Hare", "16. Gemsbok", "17. Gray Fox", "18. Gray Wolf",
         "19. Gredos Ibex", "20. Harlequin Duck", "21. Iberian Mouflon", 
         "22. Iberian Wolf", "23. Lesser Kudu", "24. Merriam's Turkey", 
         "25. Mountain Lion", "26. Mule Deer", "27. Puma", "28. Red Deer",
         "29. Ring-Necked Pheasant", "30. Ronda Ibex", "31. Scrub Hare",
         "32. Side-Striped Jackal", "33. Warthog", "34. Water Buffalo",
         "35. White-Tailed Jackrabbit"
      ],
      notes: ""
    },
    {
      type: "Grey-Brown",
      count: 13,
      animals: [
        "1. Beceite Ibex", "2. Bighorn Sheep", "3. Black-Tailed Deer", "4. Canada Goose",
        "5. Chamois", "6. Coyote", "7. Gredos Ibex", "8. Grizzly Bear", "9. Iberian Wolf",
        "10. Ronda Ibex", "11. Siberian Musk Deer", "12. Side-Striped Jackal", 
        "13. Southeastern Spanish Ibex"
      ],
      notes: ""
    },
    {
      type: "Grey Hybrid",
      count: 1,
      animals: ["1. Canada Goose"],
      notes: ""
    },
    {
      type: "Grey Piebald",
      count: 1,
      animals: ["1. Common Raccoon"],
      notes: ""
    },
    {
      type: "Honeytones",
      count: 1,
      animals: ["1. Chamois"],
      notes: ""
    },
    {
      type: "Hooded",
      count: 1,
      animals: ["1. Fallow Deer"],
      notes: "Only possible for Great One"
    },
    {
      type: "Hybrid",
      count: 3,
      animals: ["1. Eurasian Widgeon", "2. Greylag Goose", "3. Hazel Grouse"],
      notes: ""
    },
    {
      type: "Hybrid Blue",
      count: 1,
      animals: ["1. Eurasian Teal"],
      notes: ""
    },
    {
      type: "Hybrid Green",
      count: 1,
      animals: ["1. Eurasian Teal"],
      notes: ""
    },
    {
      type: "Leucistic",
      count: 16,
      animals: [
        "1. Blackbuck", "2. Cape Buffalo", "3. Caribou", "4. Chamois", 
        "5. Collared Peccary", "6. Eurasian Widgeon", "7. European Rabbit", "8. Grey Fox",
        "9. Merriam's Turkey", "10. Mallard", "11. Plains Bison", "12. Pronghorn",
        "13. Reindeer", "14. Ring-Necked Pheasant", "15. Rio Grande Turkey", "16. Western Capercaillie"
      ],
      notes: ""
    },
    {
      type: "Light Bronze",
      count: 1,
      animals: [
        "1. Eastern Wild Turkey"
      ],
      notes: ""
    },
    {
      type: "Light Brown",
      count: 24,
      animals: [
        "1. Beceite Ibex", "2. Caribou", "3. Eastern Cottontail Rabbit", "4. Eastern Wild Turkey",
        "5. Eurasian Brown Bear", "6. Eurasian Lynx", "7. European Bison", "8. European Hare",
        "9. European Rabbit", "10. Gredos Ibex", "11. Iberian Mouflon", "12. Lion",
        "13. Merriam's Turkey", "14. Moose", "15. Mountain Goat", "16. Plains Bison",
        "17. Puma", "18. Red Deer", "19. Reindeer", "20. Rio Grande Turkey",
        "21. Side-Striped Jackal", "22. Southeastern Spanish Ibex", "23. White-Tailed Jackrabbit",
        "24. Wild Boar"
      ],
      notes: ""
    },
    {
      type: "Light Buff",
      count: 1,
      animals: ["1. Rio Grande Turkey"],
      notes: ""
    },
    {
      type: "Light Copper",
      count: 1,
      animals: ["1. Rio Grande Turkey"],
      notes: ""
    },
    {
      type: "Light Green",
      count: 2,
      animals: ["1. Eurasian Teal", "2. Green-Winged Teal"],
      notes: ""
    },
    {
      type: "Light Grey",
      count: 10,
      animals: [
        "1. Canada Goose", "2. Coyote", "3. European Rabbit", "4. Gemsbok", 
        "5. Gredos Ibex", "6. Mountain Goat", "7. Plains Bison", "8. Rocky Mountain Elk", 
        "9. Scrub Hare", "10. Southeastern Spanish Ibex"
      ],
      notes: ""
    },
    {
      type: "Light Grey Leucistic",
      count: 1,
      animals: ["1. Canada Goose"],
      notes: ""
    },
    {
      type: "Maroon",
      count: 1,
      animals: ["1. Magpie Goose"],
      notes: ""
    },
    {
      type: "Melanistic",
      count: 48,
      animals: [
        "1. Antelope Jackrabbit", "2. Axis Deer", "3. Beceite Ibex", "4. Bengal Tiger",
        "5. Blackbuck", "6. Blacktail Deer", "7. Canada Goose", "8. Caribou", 
        "9. Chamois", "10. Cinnamon Teal", "11. Collared Peccary", "12. Common Raccoon",
        "13. Coyote", "14. Eurasian Brown Bear", "15. Eurasian Lynx", "16. European Bison",
        "17. European Hare", "18. European Rabbit", "19. Fallow Deer", "20. Gredos Ibex",
        "21. Grey Wolf", "22. Grizzly Bear", "23. Harlequin Duck", "24. Iberian Mouflon",
        "25. Iberian Wolf", "26. Lesser Kudu", "27. Mallard", "28. Merriam's Turkey",
        "29. Mexican Bobcat", "30. Moose", "31. Mountain Goat", "32. Mountain Lion",
        "33. Mule Deer", "34. Plains Bison", "35. Puma", "36. Red Deer", "37. Red Fox",
        "38. Reindeer", "39. Ring-Necked Pheasant", "40. Roe Deer", "41. Ronda Ibex",
        "42. Roosevelt Elk", "43. Scrub Hare", "44. Siberian Musk Deer", 
        "45. Side-Striped Jackal", "46. Southeastern Spanish Ibex", "47. White-Tailed Deer",
        "48. Wild Boar"
      ],
      notes: ""
    },
    {
      type: "Mixed",
      count: 1,
      animals: ["1. Feral Goat"],
      notes: ""
    },
    {
      type: "Mocha",
      count: 2,
      animals: ["1. Fallow Deer", "2. Moose"],
      notes: "Fallow Deer: Only possible for Great One. Moose: Mission Animal."
    },
    {
      type: "Molting",
      count: 1,
      animals: ["1. Ring-Necked Pheasant"],
      notes: ""
    },
    {
      type: "Mottled",
      count: 1,
      animals: ["1. Antelope Jackrabbit"],
      notes: ""
    },
    {
      type: "Oak",
      count: 1,
      animals: ["1. Moose"],
      notes: "Only possible for Great One"
    },
    {
      type: "Ochre",
      count: 2,
      animals: ["1. Collared Peccary", "2. Western Capercaillie"],
      notes: ""
    },
    {
      type: "Ogro",
      count: 1,
      animals: ["1. Iberian Wolf"],
      notes: "Mission Animal"
    },
    {
      type: "Olive",
      count: 2,
      animals: ["1. American Alligator", "2. Iberian Wolf"],
      notes: ""
    },
    {
      type: "Orange",
      count: 10,
      animals: [
        "1. Axis Deer", "2. Beceite Ibex", "3. Coyote", "4. Red Fox", "5. Roe Deer",
        "6. Roosevelt Elk", "7. Southeastern Spanish Ibex", "8. Siberian Musk Deer",
        "9. Springbok", "10. Water Buffalo"
      ],
      notes: ""
    },
    {
      type: "Painted",
      count: 1,
      animals: ["1. Fallow Deer"],
      notes: "Only possible for Great One"
    },
    {
      type: "Pale",
      count: 1,
      animals: ["1. Western Capercaillie"],
      notes: ""
    },
    {
      type: "Piebald",
      count: 33,
      animals: [
        "1. American Alligator", "2. Axis Deer", "3. Barasingha", "4. Blackbuck", 
        "5. Blacktail Deer", "6. Caribou", "7. Cinnamon Teal", "8. Coyote", 
        "9. Eurasian Lynx", "10. European Bison", "11. Fallow Deer", "12. Gray Fox",
        "13. Green Winged Teal", "14. Harlequin Duck", "15. Hog Deer", "16. Javan Rusa",
        "17. Mallard", "18. Magpie Goose", "19. Moose", "20. Mule Deer", "21. Nilgai",
        "22. Pronghorn", "23. Raccoon Dog", "24. Red Deer", "25. Red Fox", "26. Reindeer",
        "27. Rocky Mountain Elk", "28. Roe Deer", "29. Roosevelt Elk", "30. Sambar",
        "31. Saltwater Crocodile", "32. Siberian Musk Deer", "33. White-Tailed Deer"
      ],
      notes: ""
    },
    {
      type: "Pink",
      count: 2,
      animals: ["1. Feral Pig", "2. Wild Hog"],
      notes: ""
    },
    {
      type: "Pristine",
      count: 1,
      animals: ["1. Iberian Wolf"],
      notes: ""
    },
    {
      type: "Pseudomelanistic",
      count: 1,
      animals: ["1. Bengal Tiger"],
      notes: "2 versions"
    },
    {
      type: "Pseudomelanistic White",
      count: 1,
      animals: ["1. Bengal Tiger"],
      notes: "2 versions ?"
    },
    {
      type: "Red",
      count: 6,
      animals: [
        "1. Bobwhite Quail", "2. Cinnamon Teal", "3. Gray Fox", "4. Mexican Bobcat", 
        "5. Red Fox", "6. Warthog"
      ],
      notes: ""
    },
    {
      type: "Red-Brown",
      count: 6,
      animals: [
        "1. Bobwhite Quail", "2. Eurasian Brown Bear", "3. Grey Wolf", "4. Lesser Kudu", 
        "5. Warthog", "6. White-Tailed Deer"
      ],
      notes: ""
    },
    {
      type: "Red Spotted",
      count: 2,
      animals: ["1. Fallow Deer", "2. Sika Deer"],
      notes: ""
    },
    {
      type: "Silver",
      count: 1,
      animals: ["1. Fallow Deer"],
      notes: "Fallow Deer: Only possible for Great One"
    },
    {
      type: "Sombra",
      count: 1,
      animals: ["1. Iberian Wolf"],
      notes: "Mission animal"
    },
    {
      type: "Speckled",
      count: 1,
      animals: ["1. Moose"],
      notes: "Moose: Only possible for Great One"
    },
    {
      type: "Spirit",
      count: 2,
      animals: [
        "1. Black Bear", "2. Eurasian Brown Bear"
      ],
      notes: "Black Bear: Only possible for Great One"
    },
    {
      type: "Spotted",
      count: 5,
      animals: [
        "1. Axis Deer", "2. Black Bear", "3. Fallow Deer", "4. Red Deer", "5. Sika Deer"
      ],
      notes: "Black Bear and Red Deer: Only possible for Great One"
    },
    {
      type: "Spruce",
      count: 1,
      animals: ["1. Moose"],
      notes: "Moose: Only possible for Great One"
    },
    {
      type: "Tan",
      count: 11,
      animals: [
        "1. Black-Tailed Deer", "2. Chamois", "3. European Rabbit", "4. Lion", 
        "5. Mexican Bobcat", "6. Moose", "7. Reindeer", "8. Roe Deer", 
        "9. Roosevelt Elk", "10. Springbok", "11. White-Tailed Deer"
      ],
      notes: ""
    },
    {
      type: "Two Tones",
      count: 2,
      animals: ["1. Grey Fox", "2. Moose"],
      notes: "Moose: Only possible for Great One"
    },
    {
      type: "White",
      count: 4,
      animals: [
        "1. Bengal Tiger", "2. Fallow Deer", "3. Feral Goat", "4. Mountain Goat"
      ],
      notes: ""
    },
    {
      type: "White-Brown",
      count: 1,
      animals: ["1. Feral Goat"],
      notes: ""
    },
    {
      type: "White Stripeless",
      count: 1,
      animals: ["1. Bengal Tiger"],
      notes: ""
    },
    {
      type: "Winter",
      count: 1,
      animals: ["1. Iberian Wolf"],
      notes: ""
    },
    {
      type: "Yellow",
      count: 1,
      animals: ["1. Magpie Goose"],
      notes: ""
    }
  ];

  return (
    <div className="w-full p-8 text-stone-100 bg-stone-900 min-h-screen font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-start border-b border-stone-700 pb-4 mb-8">
        <h1 className="text-4xl font-light text-white">Fur Types (all animals)</h1>
        <div className="flex items-center gap-4 text-xs font-bold text-green-300">
           <div className="flex items-center gap-1 cursor-pointer hover:text-white">
            </div>
        </div>
      </div>
      {/* --- INTRO --- */}
      <div className="text-stone-300 space-y-4 mb-8 text-[15px]">
        <img src={albinoRedDeer} alt="Albino Red Deer" className="block w-11/12 mx-auto mt-12" />
        <p>
          Listing of the fur types by alphabetical order. This page is in the process of being updated with the new patch that gave a string name(s) to every animal that had the "common" fur type tag!
        </p>
      </div>

      {/* --- TABLE --- */}
      <div className="border border-stone-700 rounded-sm overflow-hidden bg-stone-800">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-green-900 text-white font-bold border-b border-stone-700 text-sm">
              <th className="p-4 w-40 border-r border-stone-700">Fur Type</th>
              <th className="p-4 w-32 border-r border-stone-700">Number of Animals with the fur type/variation</th>
              <th className="p-4 w-1/2 border-r border-stone-700">Animals</th>
              <th className="p-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            {furData.map((row, index) => (
              <tr 
                key={index} 
                className="border-b border-stone-700/50 hover:bg-green-900/20 transition-colors align-top"
              >
                {/* Fur Type */}
                <td className="p-4 border-r border-stone-700/50 text-white font-medium">
                  {row.type}
                </td>

                {/* Count */}
                <td className="p-4 border-r border-stone-700/50 text-white text-center font-medium">
                  {row.count}
                </td>

                {/* Animals List */}
                <td className="p-4 border-r border-stone-700/50 text-white">
                  <div className="mb-2 text-stone-300">List :</div>
                  <div className="pl-4">
                    {row.animals.map((animal, i) => (
                      <div key={i} className="mb-1 leading-snug">
                        {animal}
                      </div>
                    ))}
                  </div>
                </td>

                {/* Notes */}
                <td className="p-4 text-stone-300 text-xs">
                  {row.notes && (
                    <ul className="list-disc list-outside ml-4">
                      <li>{row.notes}</li>
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}