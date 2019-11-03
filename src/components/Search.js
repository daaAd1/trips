import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import styled from "styled-components";
import { FlexColumn } from "./defaults/Flex";
import Input from "./defaults/Input";

const AutocompleteDropdown = styled.div`
  /* padding: 20px; */
  background-color: #ccc;
  /* position: absolute; */
  width: 100%;
  max-width: 140px;
`;

const AutocompleteDropdownItemWrapper = styled.div`
  padding: 8px 16px;
`;

function Search() {
  const [address, setAddress] = useState("");
  const [place, setPlace] = useState("");
  const handleSelect = address => {
    console.log({ address });
  };
  const citySearchOptions = {
    types: ["(cities)"]
  };

  const placeSearchOptions = {
    types: ["establishment"]
  };

  return (
    <FlexColumn>
      Cities
      <PlacesAutocomplete
        value={address}
        onChange={address => setAddress(address)}
        onSelect={handleSelect}
        searchOptions={citySearchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input"
              })}
            />
            <AutocompleteDropdown>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <AutocompleteDropdownItemWrapper
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </AutocompleteDropdownItemWrapper>
                );
              })}
            </AutocompleteDropdown>
          </div>
        )}
      </PlacesAutocomplete>
      Places
      <PlacesAutocomplete
        value={place}
        onChange={address => setPlace(address)}
        onSelect={handleSelect}
        searchOptions={placeSearchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </FlexColumn>
  );
}

export default Search;
