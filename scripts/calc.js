// получаем список стоимостей
const sum = document.querySelectorAll(".sum");
const sumList = Array.from(sum);

// получаем список периодов
const period = document.querySelectorAll(".period");
const periodList = Array.from(period);

// получаем список валют
const curren = document.querySelectorAll(".currency");
const currenList = Array.from(curren);

currenList.forEach(function (c) {
  c.addEventListener("click", function () {
    for (let i = 0; i < currenList.length; i++) {
      // проходим циклом по всем элементам
      console.log(currenList[i]);
      if (currenList[i].textContent === "$") {
        sumList.forEach(function (sum) {
          sum.textContent = (+sum.textContent * 89).toFixed(0);
          currenList.forEach(function (c) {
            c.textContent = "₽";
          });
        });
        break;
      } else if (currenList[i].textContent === "₽") {
        sumList.forEach(function (sum) {
          const euroConvert = +sum.textContent / 96;
          sum.textContent = euroConvert.toFixed(0);
          currenList.forEach(function (c) {
            c.textContent = "€";
          });
        });
        break;
      } else if (currenList[i].textContent === "€") {
        sumList.forEach(function (sum) {
          const dollConvert = (+sum.textContent * 96) / 89;
          sum.textContent = dollConvert.toFixed(0);
          currenList.forEach(function (c) {
            c.textContent = "$";
          });
        });
        break;
      }
    }

  });
});

// меняем месяц на один день
periodList.forEach(function (p) {
  p.addEventListener("click", function () {
    sumList.forEach(function (n) {
      if (p.innerText == "/Months") {
        n.innerText = (+n.innerText / 30).toFixed(0);
      } else if (p.innerText == "/Day") {
        n.innerText = (+n.innerText * 30).toFixed(0);
      }
    });

    periodList.forEach(function (p) {
      if (p.innerText == "/Months") {
        p.innerText = "/Day";
      } else if (p.innerText == "/Day") {
        p.innerText = "/Months";
      }
    });
  });
});
