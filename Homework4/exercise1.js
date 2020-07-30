let tagName = "p";
let color = "green";
let tagContent = "Lorem ipsum dolor, sit amet consectetur adipisicing."

addTagColorContent(tagName, color, tagContent);

function addTagColorContent(tagName, color, tagContent) {
  let tag = document.createElement(tagName);
  tag.style.backgroundColor = color;
  tag.textContent = tagContent;
  document.body.appendChild(tag);
}