import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export const Filter = ({
  setSearchDate,
  setSearchLocation,
  setSearchType,
  setSearchPrice,
}) => {
  const handleSearch = () => {
    setSearchDate(selectedItemdatetype);
    setSearchLocation(selectedItem);
    setSearchType(selectedItemproptype);
    //   setSearchPrice(0);
    if (SelectedPriceId === 0) setSearchPrice([0, 500]);
    else if (SelectedPriceId === 1) setSearchPrice([501, 1000]);
    else if (SelectedPriceId === 2) setSearchPrice([1001, 2000]);
    else if (SelectedPriceId === 3) setSearchPrice([2001, 3000]);
    else if (SelectedPriceId === 4) setSearchPrice([3000, 50000]);
    else setSearchPrice([null, null]);
  };
  const location = [
    "New York, USA",
    "Utah, USA",
    "California, USA",
    "Texas, USA",
  ];
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => setOpen(!isOpen);
  const handleItemClick = (id) => {
    setSelectedItem(id);
    toggleDropdown();
  };

  const type = ["villa", "cottage", "flat", "bungalow"];
  const [isOpenproptype, setOpenproptype] = useState(false);
  const [selectedItemproptype, setSelectedItemproptype] = useState(null);
  const toggleDropdownproptype = () => setOpenproptype(!isOpenproptype);
  const handleItemClickproptype = (id) => {
    setSelectedItemproptype(id);
    toggleDropdownproptype();
  };
  const costFilter = [
    { id: 0, label: "$0-$500" },
    { id: 1, label: "$501-$1000" },
    { id: 2, label: "$1001-$2000" },
    { id: 3, label: "$2001-$3000" },
    { id: 4, label: "Above $3000" },
  ];
  const [isOpencosttype, setOpencosttype] = useState(false);
  const [SelectedPriceId, setSelectedPriceId] = useState(null);
  const [SelectedPriceName, setSelectedPriceName] = useState(null);
  const toggleDropdowncosttype = () => setOpencosttype(!isOpencosttype);
  const handleItemClickCost = (id, label) => {
    setSelectedPriceId(id);
    setSelectedPriceName(label);
    toggleDropdowncosttype();
  };

  const [isOpendatetype, setOpendatetype] = useState(false);
  const [selectedItemdatetype, setSelectedItemdatetype] = useState(null);
  const toggleDropdowndatetype = () => setOpendatetype(!isOpendatetype);
  const handleItemClickdatetype = (date) => {
    setSelectedItemdatetype(date);
    // console.log(selectedItemdatetype);
    toggleDropdowndatetype();
  };
  return (
    <div className="filterMaindiv">
      <div className="filter">
        <div className="filtersubDiv">
          {/* Location */}
          <div
            className={`dropdown ${
              isOpen ? " selectedDropdown" : " unselectedDropdown"
            }`}
          >
            <div className="dropdown-header" onClick={toggleDropdown}>
              {selectedItem || "Select location"}
              {isOpen ? (
                <i className={`fa fa-chevron-right icon`}></i>
              ) : (
                <i className={`fa fa-chevron-down icon`}></i>
              )}
            </div>
            {isOpen && (
              <div className={`dropdown-body`} style={{ display: "block" }}>
                <div
                  className="dropdown-item"
                  onClick={(e) => handleItemClick(null)}
                >
                  {selectedItem === null && (
                    <span className={`dropdown-item-dot `}>• </span>
                  )}
                  None
                </div>
                {location.map((item) => (
                  <div
                    className="dropdown-item"
                    onClick={(e) => handleItemClick(item)}
                    id={item}
                  >
                    {item === selectedItem && (
                      <span className={`dropdown-item-dot  `}>• </span>
                    )}
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Type */}
          <div
            className={`dropdown ${
              isOpenproptype ? " selectedDropdown" : " unselectedDropdown"
            }`}
          >
            <div
              className="dropdown-header"
              onClick={toggleDropdownproptype}
              style={{ textTransform: "capitalize" }}
            >
              {selectedItemproptype || "Select type"}
              {isOpenproptype ? (
                <i className={`fa fa-chevron-right icon`}></i>
              ) : (
                <i className={`fa fa-chevron-down icon`}></i>
              )}
            </div>
            {isOpenproptype && (
              <div className={`dropdown-body`} style={{ display: "block" }}>
                <div
                  className="dropdown-item"
                  onClick={() => handleItemClickproptype(null)}
                >
                  {selectedItemproptype === null && (
                    <span className={`dropdown-item-dot `}>• </span>
                  )}
                  None
                </div>
                {type.map((item) => (
                  <div
                    className="dropdown-item"
                    onClick={(e) => handleItemClickproptype(item)}
                    id={item}
                    style={{ textTransform: "capitalize" }}
                  >
                    {item === selectedItemproptype && (
                      <span className={`dropdown-item-dot  `}>• </span>
                    )}
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="filtersubDiv">
          {/* MoveIn Date */}
          <div
            className={`dropdown ${
              isOpendatetype ? " selectedDropdown" : " unselectedDropdown"
            }`}
          >
            <div
              className="dropdown-header"
              onClick={toggleDropdowndatetype}
              style={{ textTransform: "capitalize" }}
            >
              {selectedItemdatetype || "Move-In Date"}
              {isOpendatetype ? (
                <i className={`fa fa-chevron-right icon`}></i>
              ) : (
                <i className={`fa fa-chevron-down icon`}></i>
              )}
            </div>
            {isOpendatetype && (
              <div className={`dropdown-body`} style={{ display: "block" }}>
                {selectedItemdatetype !== null && (
                  <span className={`dropdown-item-dot `}>• </span>
                )}
                <label htmlFor="movedate">Select Date</label>
                <input
                  className="date-input"
                  type="date"
                  id="movedate"
                  onChange={(e) => handleItemClickdatetype(e.target.value)}
                />

                <div
                  className="dropdown-item"
                  onClick={() => handleItemClickdatetype(null)}
                >
                  {selectedItemdatetype === null && (
                    <span className={`dropdown-item-dot `}>• </span>
                  )}
                  None
                </div>
              </div>
            )}
          </div>
          {/* Price */}
          <div
            className={`dropdown ${
              isOpencosttype ? " selectedDropdown" : " unselectedDropdown"
            }`}
          >
            <div
              className="dropdown-header"
              onClick={toggleDropdowncosttype}
              style={{ textTransform: "capitalize" }}
            >
              {SelectedPriceName || "Select Price"}
              {isOpencosttype ? (
                <i className={`fa fa-chevron-right icon`}></i>
              ) : (
                <i className={`fa fa-chevron-down icon`}></i>
              )}
            </div>
            {isOpencosttype && (
              <div className={`dropdown-body`} style={{ display: "block" }}>
                <div
                  className="dropdown-item"
                  onClick={() => handleItemClickCost(null, null)}
                >
                  {SelectedPriceId === null && (
                    <span className={`dropdown-item-dot `}>• </span>
                  )}
                  None
                </div>
                {costFilter.map((item) => (
                  <div
                    className="dropdown-item"
                    onClick={() => handleItemClickCost(item.id, item.label)}
                    id={item.id}
                    style={{ textTransform: "capitalize" }}
                  >
                    {item.id === SelectedPriceId && (
                      <span className={`dropdown-item-dot  `}>• </span>
                    )}
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="filtersubDiv">
          <div className="search-btn ">
            <div>
              <button className="bg-blue" onClick={() => handleSearch()}>
                <SearchIcon fontSize="large" /> Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
