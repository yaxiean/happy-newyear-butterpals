/* ===== MATRIX LOVE ===== */
const canvas = document.getElementById("canvas-matrix");
const ctx = canvas.getContext("2d");
let drops = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  drops = Array(Math.floor(canvas.width / 20)).fill(1);
}
window.onresize = resize;
resize();

function draw() {
  ctx.fillStyle = "rgba(255,249,241,0.15)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#ffb7ce";
  ctx.font = "16px Arial";
  drops.forEach((y,i)=>{
    ctx.fillText("❤",i*20,y*20);
    if(y*20>canvas.height && Math.random()>0.98) drops[i]=0;
    drops[i]++;
  });
}
setInterval(draw,50);

/* ===== MUSIC ===== */
const song = document.getElementById("mySong");
let playing = false;
function togglePlay(){
  if(!playing){
    song.play();
    playing=true;
  }else{
    song.pause();
    playing=false;
  }
}

/* ===== MODAL ===== */
function openModal(el){
  document.getElementById("modalImg").src =
    el.querySelector("img").src;
  document.getElementById("imgModal").style.display="flex";
  document.body.style.overflow="hidden";
}
function closeModal(){
  document.getElementById("imgModal").style.display="none";
  document.body.style.overflow="";
}

/* ===== QUOTES ===== */
const quotes=[
 "Semoga kamu selalu dipeluk baik semesta 🤍",
  "Terima kasih sudah bertahan 🦋",
  "2026 semoga banyak bahagianya ✨",
  "Dan dipenuhi banyak hal baik 🍀"
];
let i=0;
setInterval(()=>{
  const q=document.getElementById("quote-text");
  q.style.opacity=0;
  setTimeout(()=>{
    q.textContent=quotes[i];
    q.style.opacity=1;
    i=(i+1)%quotes.length;
  },800);
},4000);