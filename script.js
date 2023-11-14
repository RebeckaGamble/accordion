// function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;

  element.classList.toggle("active");
}

/**add json data to accordion */
const accordion = document.querySelector(".accordion"); //get the accordion
const sectionEl = document
  .querySelector("section")
  .addEventListener("click", toggle); //add click event, toggle section

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/"); //fetch data
  const data = await response.json(); 

  data.forEach((item) => {
    const title = document.createElement("div"); //create div for title
    const body = document.createElement("div"); //create div for body
    const bodyContent = document.createElement("p"); //create p for body text

    title.classList.add("title"); //add class - title
    title.setAttribute("id", `section-${item.id}`); //add id - section + id
    body.classList.add("description"); //add class - description

    title.innerText = `${item.id}. ${item.title}`; //set the title - id + title
    bodyContent.innerText = ` ${item.body}`; //set the body content of the p tag

    body.appendChild(bodyContent); //put the p-body content, in the body div
    accordion.appendChild(title); //add the title/question to the accordion
    accordion.appendChild(body); //add the answer/text to the accordion
  });
}

fetchData();
