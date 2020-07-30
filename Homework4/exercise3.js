let beginYear = 1960;
let EndYear = 2020;


addSelectOptions (beginYear, EndYear)

function addSelectOptions (beginYear, EndYear) {
  let select = document.createElement("select");
  document.body.appendChild(select);

  for (i = beginYear; i <= EndYear; i++) {
    let option = document.createElement("option");
    option.textContent = i;
    select.appendChild(option);
  }
}