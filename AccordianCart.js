import React, { useState } from "react";

const AccordianCart = ({ id }) => {
  const [visibility = id, setvisibility] = useState(false);

  return (
    <>
      <div>
        <div>
     
          {!visibility ? (

              <div className="row border  mb-3">
                  <div className="col-md-12 mt-2">
                  <p className="float-start">Description-1</p>
                  <p className="float-end" onClick={() => setvisibility(true)}> <i class="fas fa-chevron-down"/></p>

                      </div>
                  </div>
         
          ) : (
            <div className="row border ">
            <div className="col-md-12 mt-2">
            <p className="float-start">Description-1</p>
            <p className="float-end" onClick={() => setvisibility(false)}> <i class="fas fa-chevron-up"/></p>

                </div>
                </div>
         
          )}
        </div>
        {visibility && (
          <>
            <div className="border mt-2 ">
            <div>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.</p>
            </div>
            
            </div>
          </>
        )}
      </div>
    </>
  );
};

export { AccordianCart };
