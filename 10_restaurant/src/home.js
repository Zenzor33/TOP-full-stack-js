const generateHome = () => {
  const body = document.querySelector(".body");
  body.innerHTML = `<div class="bodyContainer">
  <div class="display-title-container">
    <div class="display-title-image">
      <img
        id="cheeseburger"
        src="./cheeseburger.png"
        alt=""
        srcset=""
      />
    </div>
    <div class="display-title"><h1>Chad's Bar & Casino</h1></div>
    <div class="display-title-image">
      <div class="display-title-image">
        <img
          id="slotmachine"
          src="./slot-machine.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
  <div class="display">
    <div id="display-review-text">
      My experience at this restaurant lasted for about two seconds. I
      went in, asked them if they have meatballs, and the waiter smirked
      at me, yelled "you can meet these balls!" and proceded to flipping
      the table in front of him.

      <br />
      <br />
      1 star because I never got to meet those balls.. this place
      doesn't deliver what they offer.<br />
      <br />
      - Karen
    </div>
  </div>
  <div class="display">
    <div id="display-hours">
      <h2>Hours</h2>
      <br />
      Sunday: 8am - 8pm <br />Monday: 6am - 6pm <br />
      Tuesday: 6am - 6pm <br />
      Wednesday: 6am - 6pm <br />Thursday: 6am - 10pm <br />
      Friday: 6am - 10pm <br />
      Saturday: 8am - 10pm
    </div>
  </div>
</div>`;
};

export default generateHome;
