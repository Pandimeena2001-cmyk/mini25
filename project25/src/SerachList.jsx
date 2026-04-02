import React, { useState } from "react";
import "./App.css";

function SearchList() {
    const names = ["Ramya", "Rani","Kamala","Vani","Arun","Senthil"];

    const [searchTerm, setSearchTerm] = useState("");

    const filterNames = names.filter((name) => 
        name.toLowerCase().includes((searchTerm.toLowerCase))
    );

    return (
        <div className="Container">
            <h1>Dynanmic Search Filter</h1>

            <input
            type="text"
            placeholder="Search a name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filterNames.map((name, index) =>
                <li key={index}>{name}</li>
                )}
            </ul>
        </div>
    );
    }
 export default SearchList;