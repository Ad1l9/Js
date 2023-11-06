var table=document.createElement('table');
var body=document.querySelector("body")
var tbody = document.createElement('tbody');
var thead = document.createElement('thead');
table.classList.add("border");

var tr=document.createElement('tr')

for (let i = 0; i < 3; i++) {
    var th=document.createElement('th');
    th.classList.add("border")
    if(i==0)th.textContent="Name";
    if(i==1)th.textContent="Surname";
    if(i==2)th.textContent="Age";
    tr.appendChild(th)
}
thead.appendChild(tr);
table.appendChild(thead);











var persons=[
    {name:"Adil", surname:"Nasirli", age:19},
    {name:"Leyla", surname:"Shaifiyeva", age:19},
    {name:"Fatima", surname:"Nasirli", age:24},
    {name:"Suleyman", surname:"Aslanli", age:19}
];

for (let i = 0; i < persons.length; i++) {
    var tr=document.createElement('tr')
    var td=document.createElement('td')
    td.classList.add("border")
    td.textContent=persons[i].name
    tr.appendChild(td)

    var td=document.createElement('td')
    td.classList.add("border")
    td.textContent=persons[i].surname
    tr.appendChild(td)

    var td=document.createElement('td')
    td.classList.add("border")
    td.textContent=persons[i].age
    tr.appendChild(td)
    tbody.appendChild(tr)
}
table.appendChild(tbody);

body.appendChild(table)