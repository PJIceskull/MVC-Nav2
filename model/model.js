//
var homeContent = `<h1>HOME</h1>`;
var aboutContent = `<h1>ABOUT</h1> 
<button onclick="dynamicListener()">PRESS</button> 
<a href="#">ABOUT Button</a>`;
var productsContent = `<h1>PRODUCT</h1>`;
var contactContent = `<h1>CONTACT<hr class="title-hr" />
    </h1>
      <form>
        <!-- Name -->
        <div>
          <label>Name:</label>
          <input class="contactBox" type="text" placeholder="Name..." name="" />
        </div>
        <!-- email -->
        <div>
          <label>Email:</label>
          <input
            class="contactBox"
            type="email"
            placeholder="Email..."
            name=""
          />
        </div>

        <!-- Phone number -->
        <div>
          <label>Phone Number:</label>
          <input
            class="contactBox"
            type="text"
            placeholder="Phone Number..."
            name=""
          />
        </div>

        <!-- submit box -->
        <input class="submitBOX" type="submit" value="SUBMIT" />
      </form>`;

export var myName = "Pierce";

// This function is being called from the app.js and it has page name
export function modelPageName(pgName) {
    // console.log(pageName);
    console.log(pgName);

    $("#app").html(eval(pgName));
}