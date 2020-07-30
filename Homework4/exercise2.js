let tagName = "p";
let backgroundColor = "green";
let fontSize = "36px";
let fontWeight = "bold"
let tagContent = "Lorem ipsum dolor, sit amet consectetur adipisicing."

addTagColorContent(tagName, backgroundColor, fontSize, fontWeight, tagContent);

function addTagColorContent(tagName, backgroundColor, fontSize, fontWeight, tagContent) {
  let tag = document.createElement(tagName);
  tag.style.backgroundColor = backgroundColor;
  tag.style.fontSize = fontSize;
  tag.style.fontWeight = fontWeight;
  tag.textContent = tagContent;
  document.body.appendChild(tag);
}