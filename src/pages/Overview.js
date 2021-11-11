import React, { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import "../assets/overview.css";
const Overview = () => {
  const [data, setData] = useState({});
  const fetchData = useSelector((state) => state.OverviewReducer.item);

  const updateData = () => {
    if (fetchData) {
      setData(fetchData);
    }
  };
  useEffect(() => {
    updateData();
  }, [fetchData]);

  console.log("overview page", data);
  return (
    <div>
      <center>
        <h4>items page</h4>
      </center>

      {Object.keys(data).length > 0 && (
        <div className="card mb-3" id="overview_card">
          <div className="row g-0" id="overview_top_section">
            <div className="top_img_section">
              <img
                src={data.recipe.image}
                className="img-fluid rounded-start"
                alt={data.recipe.label}
              />
              <span className="dishtype_img">{data.recipe.dishType}</span>
            </div>
            <div className="top_text_section">
              <div className="card-body" id="card_body">
                <p id="meal_type">
                  {" "}
                  <span></span> {data.recipe.mealType}
                </p>
                <h5 className="card-title">{data.recipe.label}</h5>
                {data.recipe.healthLabels.map((item, index) => {
                  return (
                    <span key={index} className="health_label">
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="overview_bottom_section">
            <div className="section_one">
              <p>{data.recipe.yield} servings</p>
              <h5>
                {Math.ceil(data.recipe.calories)} <span>Kcal</span>
              </h5>
            </div>
            <div className="section_two">
              <p>
                <span></span> protein{" "}
                <span>{Math.floor(data.recipe.digest[2].total)}</span>
              </p>
              <p>
                <span></span> fat{" "}
                <span>{Math.floor(data.recipe.digest[0].total)}</span>
              </p>
              <p>
                <span></span> carbs{" "}
                <span>{Math.floor(data.recipe.digest[1].total)}</span>
              </p>
            </div>
            <div className="section_three">
              <p>
                Cholesterol{" "}
                <span>
                  {Math.floor(data.recipe.totalNutrients.CHOLE.quantity)}
                </span>
              </p>
              <p>
                Sodium{" "}
                <span>
                  {Math.floor(data.recipe.totalNutrients.NA.quantity)}
                </span>{" "}
              </p>
              <p>
                Calsium{" "}
                <span>
                  {Math.floor(data.recipe.totalNutrients.CA.quantity)}
                </span>{" "}
              </p>
              <p>
                Magnesium{" "}
                <span>
                  {Math.floor(data.recipe.totalNutrients.MG.quantity)}
                </span>{" "}
              </p>
              <p>
                Potassium{" "}
                <span>{Math.floor(data.recipe.totalNutrients.K.quantity)}</span>{" "}
              </p>
              <p>
                Iron{" "}
                <span>
                  {Math.floor(data.recipe.totalNutrients.FE.quantity)}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Overview);
