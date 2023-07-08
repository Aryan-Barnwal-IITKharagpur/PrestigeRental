import React from "react";
import { property } from "../constants/propertydata";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import moment from "moment";

export const Showcard = ({
  searchDate,
  SearchLocation,
  SearchType,
  SearchPrice,
  addFav,
  RemoveFav,
  fav,
  findfav,
}) => {
  const handlefav = (e, id) => {
    if (e.target.checked) addFav(id);
    else RemoveFav(id);
  };
  const handlechecked = (itemid) => {
    return fav.find((id) => id === itemid);
  };

  return (
    <div className={`row ${findfav && " ShowFav"}`}>
      {property.map((item) => (
        <div>
          {(SearchLocation === null ||
            SearchLocation.toLowerCase() ===
              item.address.cityCountry.toLowerCase()) &&
            (SearchType === null ||
              SearchType.toLowerCase() === item.type.toLowerCase()) &&
            (SearchPrice[0] === null ||
              (item.cost >= SearchPrice[0] && item.cost <= SearchPrice[1])) &&
            (searchDate === null ||
              moment(searchDate).isSameOrAfter(item.moveDate)) &&
            ((findfav && fav.find((id) => id === item.id)) || !findfav) && (
              <div className="cards col-4 col-md-6 col-s-12 ">
                <div className="card-property">
                  <div
                    className="container"
                    style={{
                      backgroundImage: `url(/Images/img${item.id}.jpg)`,
                    }}
                  >
                    {item.popular && (
                      <div className="popular bg-blue" label="Popular">
                        Popular
                      </div>
                    )}
                    <div className="like-div ">
                      <input
                        type="checkbox"
                        checked={handlechecked(item.id)}
                        id={item.id}
                        style={{ display: "none" }}
                        onChange={(e) => {
                          handlefav(e, item.id);
                        }}
                      />

                      <label className="like-label" htmlFor={item.id}>
                        <i className="fas fa-heart"></i>
                        <i className="far fa-heart"></i>
                        <div className="like"></div>
                      </label>
                    </div>

                    <div className="layer-two">
                      <div className="text">
                        <h4>{item.name} </h4>
                        <div className="detail">
                          <div style={{ textTransform: "capitalize" }}>
                            {item.type}
                          </div>
                        </div>
                        <div className="detail">
                          <div style={{ textTransform: "capitalize" }}>
                            {"Move-in Date: " + item.moveDate}
                          </div>
                        </div>
                        <div className="detail">
                          <div>
                            <LocationOnOutlinedIcon
                              sx={{ fontSize: "20px", color: "#286da8", pt: 1 }}
                            />
                            {item.address.street +
                              ", " +
                              item.address.cityCountry}
                          </div>
                        </div>
                        <div className="description">{item.description}</div>
                      </div>
                    </div>
                    <div className="cost bg-blue2">
                      ${item.cost} <small>/per month</small>
                    </div>
                  </div>
                  <div className="bottom-details">
                    <div className="bottom-detail">
                      <div className="detail-type">
                        <BedOutlinedIcon
                          fontSize="small"
                          sx={{ color: "#286da8", mr: 1 }}
                        />
                        {item.beds} Bedrooms
                      </div>
                      <div className="detail-type">
                        <BathtubOutlinedIcon
                          fontSize="small"
                          sx={{ color: "#286da8", mr: 1, ml: 2 }}
                        />
                        {item.bath} Bath
                      </div>
                      <div className="detail-type">
                        <HouseOutlinedIcon
                          fontSize="small"
                          sx={{ color: "#286da8", ml: 2, mr: 1 }}
                        />
                        {item.area} m<sup>2</sup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      ))}
    </div>
  );
};
