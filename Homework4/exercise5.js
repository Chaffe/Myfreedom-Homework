let clients = [{name: "Вася", age: 20}, {name: "Олег", age: 25}];
let tbody = document.querySelector('table tbody');

addClients(clients);

function addClients (clients) {
  for (let client of clients) {
    let tr = document.createElement("tr");
    let nameTd = document.createElement('td');
    nameTd.textContent = client.name;
    nameTd.style.color = 'red';

    let ageTd = document.createElement('td');
    ageTd.textContent = client.age;
    ageTd.style.color = 'green';

    tr.appendChild(nameTd);
    tr.appendChild(ageTd);
    tbody.appendChild(tr);
  }
}