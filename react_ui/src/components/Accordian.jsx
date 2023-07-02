import React from "react";

const CoastAccordian = () => {
  return (
    <div class="accordion" id="accordionExample" style={{ width: "800px" }}>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Stay informed
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Keep track of <strong>weather forecasts and warnings</strong> issued
            by local authorities, as well as updates from meteorological
            agencies. This will help you stay ahead of potential flood events
            and take appropriate action in a timely manner.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Prepare an emergency kit
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Assemble an emergency kit with essential supplies such as
            <strong>
              non-perishable food, drinking water, a first aid kit, flashlights,
              batteries, a battery-powered radio, and necessary medications
            </strong>
            . Store the kit in a waterproof container in an easily accessible
            location.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Install flood barriers and seals
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Seal off vulnerable points of entry, such as doors and windows, with
            flood barriers and seals. These can help prevent water from entering
            your home or business. Sandbags can also be used as a temporary
            measure to redirect floodwaters away from structures.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Maintain clear drainage systems
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Keep <strong>gutters, drains, and downspouts</strong> clear of
            debris to ensure proper water flow. Regularly inspect and maintain
            your property's drainage systems, including culverts and ditches, to
            prevent blockages that could exacerbate flooding.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Elevate your home
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            If you live in a flood-prone coastal area, consider elevating your
            home above the expected flood levels. This may involve raising the
            foundation or installing stilts to minimize water damage. Consult
            with local experts or architects who specialize in flood-resistant
            construction techniques.
          </div>
        </div>
      </div>
    </div>
  );
};

const RiverAccordian = () => {
   return (
     <div class="accordion" id="accordionExample" style={{ width: "800px" }}>
       <div class="accordion-item">
         <h2 class="accordion-header" id="headingOne">
           <button
             class="accordion-button"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#collapseOne"
             aria-expanded="true"
             aria-controls="collapseOne"
           >
             Stay informed
           </button>
         </h2>
         <div
           id="collapseOne"
           class="accordion-collapse collapse show"
           aria-labelledby="headingOne"
           data-bs-parent="#accordionExample"
         >
           <div class="accordion-body">
             Keep track of <strong>weather forecasts and warnings</strong>{" "}
             issued by local authorities, as well as updates from meteorological
             agencies. This will help you stay ahead of potential flood events
             and take appropriate action in a timely manner.
           </div>
         </div>
       </div>

       <div class="accordion-item">
         <h2 class="accordion-header" id="headingTwo">
           <button
             class="accordion-button collapsed"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#collapseTwo"
             aria-expanded="false"
             aria-controls="collapseTwo"
           >
             Prepare an emergency kit
           </button>
         </h2>
         <div
           id="collapseTwo"
           class="accordion-collapse collapse"
           aria-labelledby="headingTwo"
           data-bs-parent="#accordionExample"
         >
           <div class="accordion-body">
             Assemble an emergency kit with essential supplies such as
             <strong>
               non-perishable food, drinking water, a first aid kit,
               flashlights, batteries, a battery-powered radio, and necessary
               medications
             </strong>
             . Store the kit in a waterproof container in an easily accessible
             location.
           </div>
         </div>
       </div>

       <div class="accordion-item">
         <h2 class="accordion-header" id="headingThree">
           <button
             class="accordion-button collapsed"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#collapseThree"
             aria-expanded="false"
             aria-controls="collapseThree"
           >
             Install flood barriers and seals
           </button>
         </h2>
         <div
           id="collapseThree"
           class="accordion-collapse collapse"
           aria-labelledby="headingThree"
           data-bs-parent="#accordionExample"
         >
           <div class="accordion-body">
             Seal off vulnerable points of entry, such as doors and windows,
             with flood barriers and seals. These can help prevent water from
             entering your home or business. Sandbags can also be used as a
             temporary measure to redirect floodwaters away from structures.
           </div>
         </div>
       </div>

       <div class="accordion-item">
         <h2 class="accordion-header" id="headingFour">
           <button
             class="accordion-button collapsed"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#collapseFour"
             aria-expanded="false"
             aria-controls="collapseFour"
           >
             Maintain clear drainage systems
           </button>
         </h2>
         <div
           id="collapseFour"
           class="accordion-collapse collapse"
           aria-labelledby="headingFour"
           data-bs-parent="#accordionExample"
         >
           <div class="accordion-body">
             Keep <strong>gutters, drains, and downspouts</strong> clear of
             debris to ensure proper water flow. Regularly inspect and maintain
             your property's drainage systems, including culverts and ditches,
             to prevent blockages that could exacerbate flooding.
           </div>
         </div>
       </div>

       <div class="accordion-item">
         <h2 class="accordion-header" id="headingFive">
           <button
             class="accordion-button collapsed"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#collapseFive"
             aria-expanded="false"
             aria-controls="collapseFive"
           >
             Elevate your home
           </button>
         </h2>
         <div
           id="collapseFive"
           class="accordion-collapse collapse"
           aria-labelledby="headingFive"
           data-bs-parent="#accordionExample"
         >
           <div class="accordion-body">
             If you live in a flood-prone coastal area, consider elevating your
             home above the expected flood levels. This may involve raising the
             foundation or installing stilts to minimize water damage. Consult
             with local experts or architects who specialize in flood-resistant
             construction techniques.
           </div>
         </div>
       </div>
     </div>
   );

};

export default CoastAccordian;
