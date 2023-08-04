

// const accordion = document.querySelectorAll(".title");

// for (let i = 0; i < accordion.length; i++) {
//   const content = accordion[i].nextElementSibling;
//   const sectionIndex = i;
  
//   accordion[i].addEventListener("click", function() {
//     if (content.style.display === "block") {
//       content.style.display = "none";
//       console.log(this.lastElementChild)
//       this.lastElementChild.classList.remove("active");
//       this.classList.add("active");
   
//     } else {
//       for (let j = 0; j < accordion.length; j++) {
//         if (j !== sectionIndex) {
//           accordion[j].nextElementSibling.style.display = "none";
//           accordion[j].lastElementChild.classList.remove("active");
//         }
//       }
//       content.style.display = "block";
//       this.classList.add("active");
//     }
//   });
// }



// const questionElements = document.querySelectorAll('.question');
// questionElements.forEach(questionElement => {
//     const titleElement = questionElement.querySelector('.title');
//     titleElement.addEventListener('click', () => {
//         questionElement.classList.toggle('active');
       
//         questionElement.lastChild.classList.remove('active')
//     });
// });







const question = document.getElementsByClassName("title");

for (let i = 0; i < question.length; i++) {
    const element = question[i];
    element.addEventListener("click", function (e) {
        var answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
            element.classList.remove("bold");
            element.lastElementChild.classList.remove("rotate");
        } else {
            answer.style.display = "block";
            element.classList.add("bold");
            element.lastElementChild.classList.add("rotate");
        }
        const allAnswers = document.getElementsByClassName("content");
        for (let j = 0; j < allAnswers.length; j++) {
            const otherAnswer = allAnswers[j];
            if (otherAnswer !== answer) {
                otherAnswer.style.display = "none";
                const question = otherAnswer.previousElementSibling;
                question.classList.remove("bold");
                question.lastElementChild.classList.remove("rotate");
            }
        }
    });
}