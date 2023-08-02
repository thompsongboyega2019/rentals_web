//login  validation for Tenant and Landlord
function tenantOrLandlord() {
  let userId = document.getElementById("user-email").value;
  let userPassword = document.getElementById("user-password").value;
  if (userId === "tenant@rentalsproperty.com" && userPassword === "1234") {
   window.open("tenants/dashboard.html", "_self");
 }
 else if (userId === "landlord@tenantsproperty.com" && userPassword === "5678") {
   window.open("landlords/dashboard.html", "_self");
 } else {
   alert("You are not a user");
 }
}
