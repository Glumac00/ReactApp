import { useState } from "react";
type iTunesType = {
  kind: string;
  artistName: string;
  trackName: string;
  artworkUrl100: string;
  artworkUrl60: string;
  previewUrl: string;
};

const ParcijalniIspit = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<iTunesType[]>([]);
  const handleSearch = () => {
    fetch(
      `https://itunes.apple.com/search?term=${searchValue}&media=music&limit=15`
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        setSearchResults(results);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Kind</th>
            <th>Artist</th>
            <th>Track</th>
            <th>Track photo</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result, index) => (
            <tr key={index}>
              <td>{result.kind}</td>
              <td>{result.artistName}</td>
              <td>{result.trackName}</td>
              <td>
                <img src={result.artworkUrl100} alt={result.artworkUrl60} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ParcijalniIspit;
