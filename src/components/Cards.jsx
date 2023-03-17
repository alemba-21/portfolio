import React from 'react';

function Menu({ menuItem }) {
  return (
    <div className="item">
      {menuItem.map((item) => {
        return (
          <div className="item-con" key={item.id}>
            <div className="item-container">
              <div className="cards">
                <div className="cards-img">
                  <a href={item.path}><img src={item.image}/></a>
                </div>
                  <h2>{item.title}</h2>
                  {/* <p>{item.description}</p> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
