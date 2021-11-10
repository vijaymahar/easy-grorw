import React from "react";
import { useSelector } from "react-redux";
const Overview = () => {
  const data = useSelector((state) => state.OverviewReducer.item);
  console.log("overview page", data);
  return (
    <div>
      <center>
        <h4>items page</h4>
      </center>

      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={data.recipe.image}
              class="img-fluid rounded-start"
              alt={data.recipe.label}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{data.recipe.label}</h5>
              <p class="card-text">{data.recipe.dishType}</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
