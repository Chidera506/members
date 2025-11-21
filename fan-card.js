const fan = JSON.parse(localStorage.getItem("fan"));

if (!fan) {
  window.location.href = "login.html";
}

document.getElementById("welcomeMsg").textContent =
  `Welcome queen, ${fan.displayName} 💛`;

document.getElementById("cardTitle").textContent =
  `${fan.displayName} • Official Fan Card`;

const badge = document.getElementById("membershipBadge");
badge.classList.add("membership-" + fan.membershipLevel);
badge.textContent =
  fan.membershipLevel === "gold" ? "Gold Member • VIP Queen ✨" :
  fan.membershipLevel === "silver" ? "Silver Member • Special Access ⭐" :
  "Bronze Member • Loyal Fan 🧡";

document.getElementById("cardImage").src = fan.image;

// Animation
setTimeout(() => {
  document.querySelector(".animated-card").classList.add("show");
}, 10);


// STATUS SECTIONS
const statusTitle = document.getElementById("statusTitle");
const statusMessage = document.getElementById("statusMessage");
const priceList = document.getElementById("priceList");

// CINDY — Subscription Prices
if (fan.id === "cindy") {

  statusTitle.textContent = "✓ Activation completed";
  statusTitle.classList.add("status-success");

  statusMessage.textContent =
    "Cindy, you haven't subscribed your fan card yet. Choose a subscription level below:";

  priceList.innerHTML = `
    <ul>
      <li><span>Diamond 🔹</span><span class="tier-price">$7,000</span></li>
      <li><span>Gold 🥇</span><span class="tier-price">$6,500</span></li>
      <li><span>Silver</span><span class="tier-price">$5,500</span></li>
      <li><span>Bronze 🥉</span><span class="tier-price">$4,500</span></li>
    </ul>
  `;

// BARB — Activation Prices
} else if (fan.id === "barb") {

  statusTitle.textContent = "⚠ Barb, your fan card is not yet activated";
  statusTitle.classList.add("status-warning");

  statusMessage.textContent =
    "Complete your activation by choosing one of the options below:";

  priceList.innerHTML = `
    <ul>
      <li><span>Diamond 🔹</span><span class="tier-price">$5,000</span></li>
      <li><span>Gold 🥇</span><span class="tier-price">$4,500</span></li>
      <li><span>Silver</span><span class="tier-price">$3,500</span></li>
      <li><span>Bronze 🥉</span><span class="tier-price">$2,500</span></li>
    </ul>
  `;

// SANDY — Hide section
} else {
  document.getElementById("statusSection").style.display = "none";
}

function goBack() {
  localStorage.removeItem("fan");
  window.location.href = "login.html";
}

