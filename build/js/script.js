const container = document.getElementById('root');
const output = document.getElementById('result');
const reset = document.getElementById('reset');
const btnx = document.getElementById('X');
const btny = document.getElementById('O');
const choiceNotSelected = document.getElementById('choice');


for(let i=0; i<9; i++){
  const btn = document.createElement('input');
  btn.type = 'button'
  btn.value = null;
  btn.id = i;
  btn.setAttribute('class', 'h-24 w-24 bg-blue-400 text-4xl rounded-sm text-white');
  btn.onclick = ((e)=>btnClick(e));
  container.appendChild(btn);
}

const choiceArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

let x;
let choice = false;

btnx.onclick = () => {
  btnx.classList.add('bg-green-500','text-white');
  btnx.onclick = false;
  btny.style.display = 'none';
  x = true;
  choice = true;
}

btny.onclick = () => {
  btny.classList.add('bg-green-500','text-white');
  btny.onclick = false;
  btnx.style.display = 'none';
  x = false;
  choice = true;
}

const btn = document.querySelectorAll('input');
let winnerFound = false;

const btnClick = (e, status) => {

  if(!choice){
    alert('Please select a option from your choice');
    choiceNotSelected.classList.add('border-4', 'border-red-200');
    setTimeout(()=>{choiceNotSelected.classList.remove('border-4')}, 2000);
    return;
  }else{
    status = x? 'X':'O';
  }

  e.target.value = status;
  e.target.onclick = false;
  let temp = e.target.id;
  
  for(let i=0; i<choiceArr.length; i++){
    let el = choiceArr[i];
    
    if(el == temp){
      
      temp = choiceArr[choiceArr.length - 1];
      choiceArr[i] = temp;
      choiceArr.pop();
      break;
    }
  }

  winArr.forEach((a)=>{
    if(btn[a[0]].value===(status= x? 'X':'O') && btn[a[1]].value===(status= x? 'X':'O') && btn[a[2]].value===(status= x? 'X':'O')){
      output.innerText = 'You Win! 😃';
      btn.forEach(btn => btn.onclick = false)
      winnerFound = true;
      return 
    }else if(btn[a[0]].value===(status= x? 'O':'X') && btn[a[1]].value===(status= x? 'O':'X') && btn[a[2]].value===(status= x? 'O':'X')){
      output.innerText = status + ' Wins!\nYou Lost 😢';
      btn.forEach(btn => btn.onclick = false)
      winnerFound = true;
      return 
    }
  })

  if(winnerFound) return

  if(choiceArr.length){
    let r = Math.floor(Math.random() * choiceArr.length);
    btn[choiceArr[r]].value = x? 'O':'X';
    btn[choiceArr[r]].onclick = false;
    temp = btn[choiceArr[r]].id;
    
    for(let i=0; i<choiceArr.length; i++){
      let el = choiceArr[i];
      
      if(el == temp){
        
        temp = choiceArr[choiceArr.length - 1];
        choiceArr[i] = temp;
        choiceArr.pop();
        break;
      }
    }
  }
  

//   if(x){
//     status = 'X';
//     e.target.value = status;
//     x = false;
//     e.target.onclick = false;
//     let temp = e.target.id
//     choiceArr.forEach((el, i)=>{
//       if(el === temp){
//         temp = choiceArr[choiceArr.length - 1];
//         choiceArr[i] = temp;
//         choiceArr.pop();
//         return;
//       }
//     })

//     const r = Math.floor(Math.random() * choiceArr.length);
//     temp = choiceArr[r];
//     choiceArr.forEach((el, i)=>{
//       if(el === temp){
//         temp = choiceArr[choiceArr.length - 1];
//         btn[el].value = 'O';
//         btn[el].onclick = false;
//         choiceArr[i] = temp;
//         choiceArr.pop();
//         return;
//       }
//     })
//   }else{
//     status = 'O';
//     e.target.value = status;
//     x = true;
//     e.target.onclick = false;
//     let temp = e.target.id
//     choiceArr.forEach((el, i)=>{
//       if(el === temp){
//         temp = choiceArr[choiceArr.length - 1];
//         choiceArr[i] = temp;
//         choiceArr.pop();
//         return;
//       }
//     })

//     const r = Math.floor(Math.random() * 9);
//     temp = choiceArr[r];
//     choiceArr.forEach((el, i)=>{
//       if(el === temp){
//         temp = choiceArr[choiceArr.length - 1];
//         choiceArr[i] = temp;
//         choiceArr.pop();
//         return;
//       }
//     })
//   }



  winArr.forEach((a)=>{
    if(btn[a[0]].value===(status= x? 'X':'O') && btn[a[1]].value===(status= x? 'X':'O') && btn[a[2]].value===(status= x? 'X':'O')){
      output.innerText = 'You Win! 😃';
      btn.forEach(btn => btn.onclick = false)
      winnerFound = true;
      return 
    }else if(btn[a[0]].value===(status= x? 'O':'X') && btn[a[1]].value===(status= x? 'O':'X') && btn[a[2]].value===(status= x? 'O':'X')){
      output.innerText = status + ' Wins!\nYou Lost 😢';
      btn.forEach(btn => btn.onclick = false)
      winnerFound = true;
      return
    }
  })

  if(winnerFound) return
  
  if(nullChecker() && !winnerFound){
    output.innerText = 'Draw!\nPlay Again';
    return 
  }
  
  
}

let count = 0;
const nullChecker = () => {
  btn.forEach(e => {
    if(e.value){
      count++;
    }
  })
  
  if(count === 9){
    return true;
  }else{
    count = 0;
    return false;
  }
} 


reset.addEventListener('click', (e)=>{
  e.preventDefault();
  btn.forEach((btn) => {
    btn.value = null;
    btn.onclick = ((e)=>btnClick(e));
  })

  choice = false;
  btnx.classList.remove('bg-green-500', 'text-white');
  btny.classList.remove('bg-green-500', 'text-white');
  btny.style.display = 'unset';
  btnx.style.display = 'unset';

  btnx.onclick = () => {
    btnx.classList.add('bg-green-500','text-white');
    btnx.onclick = false;
    btny.style.display = 'none';
    x = true;
    choice = true;
  }

  btny.onclick = () => {
    btny.classList.add('bg-green-500','text-white');
    btny.onclick = true;
    btnx.style.display = 'none';
    x = false;
    choice = true;
  }
  count = 0;

  let l = choiceArr.length;
  for(let i=0; i<l; i++){
    choiceArr.pop();
  }
  for(let i=0; i<9; i++){
    choiceArr.push(i);
  }
  winnerFound = false;
  output.innerText = '';
})