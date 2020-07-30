let tagName = "p";
let backgroundColor = "green";
let tagContent = "Lorem ipsum dolor, sit amet consectetur adipisicing."

addTagColorContent(tagName, backgroundColor, tagContent);

function addTagColorContent(tagName, backgroundColor, tagContent) {
  let tag = document.createElement(tagName);
  tag.style.backgroundColor = backgroundColor;
  tag.textContent = tagContent;
  document.body.appendChild(tag);
}