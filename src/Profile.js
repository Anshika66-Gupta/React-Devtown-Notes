import React from 'react';
function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  function Target() {
    return (
      <img
        src="https://www.india.com/wp-content/uploads/2017/06/isro-1.jpg"
        alt="Aditya L-1"
      />
    );
  }
  

  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
            <Profile /> <br/>
            <Profile />
            <Profile />
            
            <div>
                <h1>Anshika Gupta   </h1>
                <Target />
            </div>

      </section>
    );
  }
  
  