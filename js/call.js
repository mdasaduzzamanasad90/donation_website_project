// item-1
document.getElementById("donatebutton1").addEventListener("click", function () {
  const inputfield1 = inputfield("inputfield1");
  const mainbalance = balance("main-balance");
  const contantbalance = balance("itembalance1");

  // condition not a number
  if (isNaN(inputfield1)) {
    alert("Sorry | Select Your Amount");
    return;
  } else {
    // condition check balance
    if (mainbalance < inputfield1) {
      alert(
        "Sorry | You Do Not Have Enough Money - Please Deposit And Try Again"
      );
    } else {
      document.getElementById("alreat").classList.remove("hidden");
      document
        .getElementById("alreatdonationandhistory")
        .classList.add("hidden");
      document.getElementById("donationfrom").classList.add("hidden");

      document
        .getElementById("alreatbutton")
        .addEventListener("click", function () {
          document.getElementById("alreat").classList.add("hidden");
          document
            .getElementById("alreatdonationandhistory")
            .classList.remove("hidden");
          document.getElementById("donationfrom").classList.remove("hidden");
        });

      const sum = contantbalance + inputfield1;
      document.getElementById("itembalance1").innerText = sum;
      const maines = mainbalance - inputfield1;
      document.getElementById("main-balance").innerText = maines;
      document.getElementById("inputfield1").value = "";

      // add history
      const filename = document.getElementById("historyfield");

      // h1 tag
      const h1 = document.createElement("h1");
      h1.style.fontWeight = "bold";
      h1.style.fontSize = "20px";
      h1.innerText = `${inputfield1} BDT is Donated for Flood at Noakhali, Bangladesh`;

      // p tag
      const p = document.createElement("p");
      p.innerText = `Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)`;

      // div tag
      const div = document.createElement("div");
      div.style.border = "1px,solid,rgb(192,192,192)";
      div.style.padding = "30px";
      div.style.borderRadius = "12px";

      // append tag
      div.appendChild(h1);
      div.appendChild(p);
      filename.appendChild(div);
    }
  }
});

// item-2
document.getElementById("donatebutton2").addEventListener("click", function () {
  const inputfield2 = inputfield("inputfield2");
  const mainbalance = balance("main-balance");
  const contantbalance = balance("itembalance2");

  if (isNaN(inputfield2)) {
    alert("Sorry | Select Your Amount");
    return;
  } else {
    // condition check balance
    if (mainbalance < inputfield2) {
      alert(
        "Sorry | You Do Not Have Enough Money - Please Deposit And Try Again"
      );
    } else {
      document.getElementById("alreat").classList.remove("hidden");
      document
        .getElementById("alreatdonationandhistory")
        .classList.add("hidden");
      document.getElementById("donationfrom").classList.add("hidden");

      document
        .getElementById("alreatbutton")
        .addEventListener("click", function () {
          document.getElementById("alreat").classList.add("hidden");
          document
            .getElementById("alreatdonationandhistory")
            .classList.remove("hidden");
          document.getElementById("donationfrom").classList.remove("hidden");
        });

      const sum = contantbalance + inputfield2;
      document.getElementById("itembalance2").innerText = sum;
      const maines = mainbalance - inputfield2;
      document.getElementById("main-balance").innerText = maines;
      document.getElementById("inputfield2").value = "";

      // add history
      const filename = document.getElementById("historyfield");

      // h1 tag
      const h1 = document.createElement("h1");
      h1.style.fontWeight = "bold";
      h1.style.fontSize = "20px";
      h1.innerText = `${inputfield2} BDT is Donated for Flood Relief in Feni,Bangladesh`;

      // p tag
      const p = document.createElement("p");
      p.innerText = `Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)`;

      // div tag
      const div = document.createElement("div");
      div.style.border = "1px,solid,rgb(192,192,192)";
      div.style.padding = "30px";
      div.style.borderRadius = "12px";

      // append tag
      div.appendChild(h1);
      div.appendChild(p);
      filename.appendChild(div);
    }
  }
});

// item-3
document.getElementById("donatebutton3").addEventListener("click", function () {
  const inputfield3 = inputfield("inputfield3");
  const mainbalance = balance("main-balance");
  const contantbalance = balance("itembalance3");

  // condition not a number
  if (isNaN(inputfield3)) {
    alert("Sorry | Select Your Amount");
    return;
  } else {
    // condition check balance
    if (mainbalance < inputfield3) {
      alert(
        "Sorry | You Do Not Have Enough Money - Please Deposit And Try Again"
      );
    } else {
      document.getElementById("alreat").classList.remove("hidden");
      document
        .getElementById("alreatdonationandhistory")
        .classList.add("hidden");
      document.getElementById("donationfrom").classList.add("hidden");

      document
        .getElementById("alreatbutton")
        .addEventListener("click", function () {
          document.getElementById("alreat").classList.add("hidden");
          document
            .getElementById("alreatdonationandhistory")
            .classList.remove("hidden");
          document.getElementById("donationfrom").classList.remove("hidden");
        });

      const sum = contantbalance + inputfield3;
      document.getElementById("itembalance3").innerText = sum;
      const maines = mainbalance - inputfield3;
      document.getElementById("main-balance").innerText = maines;
      document.getElementById("inputfield3").value = "";

      // add history
      const filename = document.getElementById("historyfield");

      // h1 tag
      const h1 = document.createElement("h1");
      h1.style.fontWeight = "bold";
      h1.style.fontSize = "20px";
      h1.innerText = `${inputfield3} BDT is Donated for Aid for Injured in the Quota Movement, Bangladesh`;

      // p tag
      const p = document.createElement("p");
      p.innerText = `Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)`;

      // div tag
      const div = document.createElement("div");
      div.style.border = "1px,solid,rgb(192,192,192)";
      div.style.padding = "30px";
      div.style.borderRadius = "12px";

      // append tag
      div.appendChild(h1);
      div.appendChild(p);
      filename.appendChild(div);
    }
  }
});
