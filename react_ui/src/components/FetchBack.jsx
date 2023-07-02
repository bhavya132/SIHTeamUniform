import React from "react";
import { useState, useEffect } from "react";
import $ from "jquery";

const FetchBack = () => {
  //   const [html, setHtml] = useState();
  //   useEffect(() => {
  //     fetch("/my_map")
  //       .then((res) => res.text())
  //       .then((data) => {
  //         setHtml(data);
  //         console.log(data);
  //       });
  //   }, []);

  var autoPopup = false;
  if (autoPopup) startAutoPopup();
  function startAutoPopup() {
    setTimeout(function () {
      $("#myModal").modal();
    }, 300000);
  }

  return (
    <>
      <div class="panel-body">
        <div class="row">
          <div id="setElev" class="form-group form-inline">
            <label>Elevation/Height/Water Level (-/+):</label>
            <input
              class="form-control"
              type="text"
              id="elev"
              style={{ width: "100px" }}
              value="0"
            />
            <button
              class="btn btn-warning"
              style={{ width: "100px" }}
              type="button"
              onclick="setElev(document.getElementById('elev').value);"
            >
              Set
            </button>
            &nbsp;&nbsp;
            <b>
              <span id="curElev" style={{ color: "red" }}></span>
              <span style={{ color: "red" }}> meter.</span>
            </b>
            <br />
          </div>
        </div>

        <div id="mapPanel" class="col-md-7">
          <div style={{ position: "relative" }}>
            <div
              id="map_canvas"
              style={{ width: "100%", height: "600px" }}
            ></div>
            <div id="basemaps-wrapper" class="leaflet-bar">
              <select id="basemaps"></select>
            </div>
          </div>
        </div>

        <div>
          <input
            class="styled"
            type="text"
            id="link"
            style={{ width: "95%" }}
          />
        </div>
        <br />
      </div>

      <div class="rowlegend">
        <div class="column">
          <h3 class="panel-title">
            <b>Legend</b>
          </h3>
          {/* <img src="colorbar.png" id="legend"> */}
        </div>
        <div class="column">
          <h4 class="panel-title">
            <b>Description</b>
          </h4>
          <p id="legend_desc">
            OpenStreetMap - geospatial data which features roads and street data
          </p>
        </div>
      </div>
    </>
  );
};

export default FetchBack;
