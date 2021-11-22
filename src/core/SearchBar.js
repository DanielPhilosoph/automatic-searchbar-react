import { useState, useRef } from "react";
import OptionsDropdown from "./OptionsDropdown";
import useCopyToClipboard from "./hooks/copyToClip";

export default function SearchBar() {
  const [currentString, setCurrentString] = useState("");
  const [isCopied, handleCopy] = useCopyToClipboard();
  const searchInput = useRef(null);
  const dropdown = useRef(null);

  const handleChange = () => {
    // Do Filter
    setCurrentString(searchInput.current.value);
  };

  const toggleDropdown = () => {
    if (dropdown.current.classList.contains("hidden")) {
      showDropdown();
    } else {
      hideDropdown();
    }
  };

  const onCopyClick = () => {
    handleCopy(currentString);
  };

  const onClear = () => {
    setCurrentString("");
    searchInput.current.value = "";
  };

  const showDropdown = () => {
    dropdown.current.classList.add("display");
    dropdown.current.classList.remove("hidden");
  };

  const hideDropdown = () => {
    dropdown.current.classList.add("hidden");
    dropdown.current.classList.remove("display");
  };

  const onOptionClick = (name) => {
    searchInput.current.value = name;
    searchInput.current.focus();
    hideDropdown();
    setCurrentString(name);
  };

  return (
    <div>
      <input
        autoComplete="off"
        ref={searchInput}
        id="search"
        onChange={handleChange}
        onFocus={showDropdown}
        value={currentString}
      ></input>
      <button onClick={onClear}>clear</button>
      <button onClick={toggleDropdown}>^</button>
      <button onClick={onCopyClick}>Copy</button>
      <br />
      <div ref={dropdown} className="dropdown hidden">
        <OptionsDropdown onOptionClick={onOptionClick} query={currentString} />
      </div>
      <div id="div"></div>
    </div>
  );
  //hidden
}
