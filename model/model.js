//
var homeContent = ` <h1>HOME
<hr class="title-hr"/></h1>

      <div class="heroBanner"></div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fugit
        error voluptatum expedita, perspiciatis totam reiciendis culpa rem
        magnam aspernatur, optio earum voluptates architecto, ad iure quod
        dolorem mollitia neque obcaecati atque voluptate facere aliquam? In
        necessitatibus odio doloremque saepe, ullam, ducimus ea, eligendi
        suscipit eius explicabo totam iste! Voluptatem voluptatum animi nemo.
        Tenetur ratione nulla pariatur a praesentium ex rerum nisi. Commodi
        eaque eum amet nam debitis, provident sit ea! Maiores officia omnis ex
        veniam quo accusantium! Laboriosam veniam minus dicta animi. Impedit
        maiores voluptatem voluptates modi reiciendis eligendi, possimus enim!
        Beatae suscipit dolores pariatur ipsam corporis aspernatur? Minus.
      </p>`;
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