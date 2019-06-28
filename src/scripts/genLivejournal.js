export const livejournal = [
  { category: "currently reading", name: "The New Jim Crow" },
  { category: "currently playing", name: "Persona Q2" },
  { category: "currently watching", name: "Chernobyl" },
  { category: "currently playing (mmo edition)", name: "SHADOWBRINGERS" },
  {
    category: "currently watching (anime edition)",
    name: "Evangelion (new dub)"
  }
];

let stats = document.getElementById("livejournal");

livejournal.map(stat => {
  let tr = document.createElement("tr");
  tr.classList.add("livejournal_data");

  let label = document.createElement("td");
  let labelText = document.createTextNode(stat.category);
  label.classList.add("livejournal_label");
  label.appendChild(labelText);

  let attr = document.createElement("td");
  let attrText = document.createTextNode(stat.name);
  attr.classList.add("livejournal_attr");
  attr.appendChild(attrText);

  tr.appendChild(label);
  tr.appendChild(attr);

  stats.appendChild(tr);
});
