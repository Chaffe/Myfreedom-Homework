let clients = [{
  name: "Женя",
  order: true
  },
  {
  name: "Кристина",
  order: true
  },
  {
  name: "Павел",
  order: false
  },
  {
  name: "Виолетта",
  order: false
  },
  {
  name: "Костя",
  order: true
  }];

addOrderStatus (clients)

function addOrderStatus (clients) {
  let ul = document.createElement("ul");
  document.body.appendChild(ul);

  for (let client of clients) {
    let li = document.createElement("li");
    let orderStatus = (client.order) ? " оплатил(a)" : " отменил(a)";

    li.textContent = "Клиент " + client.name + orderStatus + " заказ.";
    ul.appendChild(li);
  }
}