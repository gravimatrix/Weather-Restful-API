const tweetForm = document.querySelector("#tweetForm");
tweetForm.addEventListener("submit",function(e){
  const userNameInput = document.querySelectorAll("input")[0];
  const tweetInput = document.querySelectorAll("input")[1];
  console.log(userNameInput.value);
  e.preventDefault();
});