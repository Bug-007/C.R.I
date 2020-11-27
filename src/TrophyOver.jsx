import React from "react";

function TrophyOver() {
  return (
    <div>
      <div className="trophy">
        <img className="trophy--trop" src="1.png" alt="Trophy" />
        <div className="info">
          <strong>            
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </strong>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img className="grouppic" src="2.png" alt="Group Pic" />
          <p>
            Government of India has awarded the
            <strong> "National Energy Conservation Award 2018" </strong>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div>
        <p className="singleline">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div className="product">
          <img className="product--image" src="3.png" alt="products" />
        </div>
        <p className="singleline">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE
          SEGMENTS
        </p>
      </div>
      <div className="container--break--line">
        <hr className="break--line" />
      </div>
    </div>
  );
}

export default TrophyOver;
