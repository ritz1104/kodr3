const bird = document.getElementById('bird')
const game = document.getElementById('game')
const scoreEl = document.getElementById('score')

let topHeight = 200;
let gravity = 2;
let isGameOver = false;
let score = 0
setInterval(()=>{
  if(isGameOver) return
  topHeight = topHeight +gravity;
  bird.style.top = topHeight + 'px'
   
  if(topHeight>600 || topHeight<0){
   gameOver()
  }
},20)


document.addEventListener('keydown',(e)=>{
 topHeight = topHeight-60
 bird.style.top = topHeight + 'px'
})

function createPipe(){
  const pipeTop = document.createElement('div')
  const pipeBottom = document.createElement('div')

  pipeTop.className = 'pipe'
  pipeBottom.className = 'pipe'

  let pipeHeight = Math.random()*250 + 50
   

  let gap = 150;  
  pipeTop.style.height = pipeHeight + 'px';
  pipeBottom.style.height = 600 - pipeHeight-gap + 'px'


  pipeTop.style.top = 0 + 'px'
  pipeBottom.style.bottom = 0 + 'px'
  game.appendChild(pipeTop)
  game.appendChild(pipeBottom)
 
  let pipeleft = 400

  pipeTop.style.left = pipeleft + 'px'
  pipeBottom.style.left = pipeleft + 'px'
   let scored = false
 const move =setInterval(()=>{
  pipeleft = pipeleft - 2;

 pipeTop.style.left = pipeleft + 'px'
  pipeBottom.style.left = pipeleft + 'px'

const birdRect = bird.getBoundingClientRect()
const topRect = pipeTop.getBoundingClientRect()
const bottomRect = pipeBottom.getBoundingClientRect()

if(birdRect.right>topRect.left && birdRect.left<topRect.right && (birdRect.top<topRect.bottom || birdRect.bottom>bottomRect.top)){
  gameOver()
}

let birdX = birdRect.left

if(pipeleft<60 && !scored)
  score++
scoreEl.textContent  = score
scored = true
},20)
  
if(pipeleft<-60){
  pipeTop.remove();
  pipeBottom.remove()
 clearInterval(move)
}

}
setInterval(createPipe,2000)

function gameOver(){
 if(isGameOver) return
 alert('game over ! your score : '+score)
 isGameOver = true
 location.reload()
}
