const generateMenu = () => {
  const body = document.querySelector(".body");
  body.innerHTML = `
  <div class="bodyContainer">
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
      HOW ABOUT SOME BISCUITS AND CHIPS?
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

export default generateMenu;
