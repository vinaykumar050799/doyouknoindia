var readlineSync = require('readline-sync')

//ask username
var userName = readlineSync.question('what is your name: ')
console.log('welcome '+userName+' to Do You Know INDIA!')

//questions array
var questions = [
  {
    question:`India is in which continent ?
      a) asia
      b) europe
      c) africa
      `
    ,
    answer:'asia',
  },
  {
    question:`how many colors in indian flag ? 
          a) two
          b) three
          c) four
          `,
    answer:'four',
  },
  {
    question:`national animal of india? 
          a) lion
          b) tiger
          c) wolf
          `,
    answer:'tiger',
  },
  {
    question:`national bird of india? 
          a) penguin
          b) peacock
          c) sparrow
          `,
    answer:'peacock',
  },
   {
    question:`capital city of india? 
          a) delhi
          b) mumbai
          c) hyderabad
          `,
    answer:'delhi',
  },
  
]

var topScores = [
  {
    name :'teja ',
    score:5,
  },
  {
    name:'ajay ',
    score:4,
  }
                ]


//function 
score = 0
function quiz(question,answer){
  var uans = readlineSync.question(question)

  if (uans.toLowerCase() == answer.toLowerCase()){
    console.log('right!');
    score = score +1;
  }else{
    console.log('wrong!')
    score = score -1;
  }
  console.log("current Score: "+score);
  console.log('*************************')
}

//for loop
for(var i =0;i<questions.length;i=i+1){
  quiz(questions[i].question,questions[i].answer)
}

console.log("Your final score:"+score)
console.log('These are top scores->')

console.log(topScores[0].name+topScores[0].score)
console.log(topScores[1].name+topScores[1].score)
console.log('If you beat them ping me with a screenshot!')