function scrollToTop() {
  window.scrollTo(0, 0);
}

let arr = [];
arr[0] = ` <div class="adv-items-child">
<div class="adv-content">
  <div>
    <img src="./assets/logo1.png" />
  </div>
  <div>
    <h1 class="temp-header">What's in it for Teacher</h1>
    <ul class="temp-list">
      <li>Familiar and easy , always up-to-date tools to each</li>
      <li>Acces to latest version of Windows 10</li>
      <li>
        anytime anywhere acess to Office 365 across multiple devise
      </li>
    </ul>
  </div>
</div>

<div class="adv-image">
  <img src="./assets/adv1.png" />
</div>
</div>

<div class="adv-items-child">
<div class="adv-image">
  <img src="./assets/adv2.png" />
</div>

<div class="adv-content">
  <div>
    <img src="./assets/logo2.png" />
  </div>
  <div>
    <h1 class="temp-header">whats in it for students</h1>
    <ul class="temp-list">
      <li>
        Be productive anywhere with office 365 , accessible anytime
        across multiple devices
      </li>
      <li>
        Connect and collaborate with other students and friends ,
        truck reviews and inputs through threade updates
      </li>
    </ul>
  </div>
</div>
</div>`;

arr[1] = `<div class="adv-items-child">
<div class="adv-image">
  <img src="./assets/adv2.png" />
</div>

<div class="adv-content">
  <div>
    <img src="./assets/logo2.png" />
  </div>
  <div>
    <h1 class="temp-header">whats in it for students</h1>
    <ul class="temp-list">
      <li>
        Be productive anywhere with office 365 , accessible anytime
        across multiple devices
      </li>
      <li>
        Connect and collaborate with other students and friends ,
        truck reviews and inputs through threade updates
      </li>
    </ul>
  </div>
</div>
</div>
<div class="adv-items-child">
<div class="adv-content">
  <div>
    <img src="./assets/logo1.png" />
  </div>
  <div>
    <h1 class="temp-header">What's in it for Teacher</h1>
    <ul class="temp-list">
      <li>Familiar and easy , always up-to-date tools to each</li>
      <li>Acces to latest version of Windows 10</li>
      <li>
        anytime anywhere acess to Office 365 across multiple devise
      </li>
    </ul>
  </div>
</div>

<div class="adv-image">
  <img src="./assets/adv1.png" />
</div>
</div>`;

arr[2] = arr[0];

const arr2 = ["bt1", "bt2", "bt3"];
const container = document.querySelector(".adv-items");
for (let i = 0; i < arr2.length; i++) {
  let btn = document.getElementById(arr2[i]);
  btn.addEventListener("click", () => {
    container.innerHTML = arr[i];
  });
}
