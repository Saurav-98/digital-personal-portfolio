import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact", "testimonials"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            className="app__navigation-dot"
            key={item + index}
            style={active === true ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
