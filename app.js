const data = [
  {
    "id": 1,
    "name": "Tanya Sinclair",
    "job": "UX Engineer",
    "story": "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    "image": "images/image-tanya.jpg"
  },
  {
    "id": 2,
    "name": "John Tarkpor",
    "job": "Junior Front-end Developer",
    "story": "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    "image": "images/image-john.jpg"
  }
]

const Name = document.querySelector('.info-name')
const Job = document.querySelector('.info-job')
const Story = document.querySelector('.story')
const Image = document.querySelector('.image')


const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let start = 0;
let current = 0;
let last = data.length - 1;

function updateSlider() {
  Name.textContent = data[current].name;
  Job.textContent = data[current].job;
  Story.textContent = data[current].story;
  Image.setAttribute('src', data[current].image)
}

updateSlider()

prevButton.addEventListener('click', () => {
  if(current > start && current !== start) {
    current--
  }
  else {
    current = last
  }

  updateSlider()
})

nextButton.addEventListener('click', () => {
  if(current >= start && current !== last) {
    current++
  }else{
    current = start;
  }

  updateSlider()
})

