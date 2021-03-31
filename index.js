const tweetForm = document.querySelector("#tweetForm");
tweetForm.addEventListener("submit",function(evt){
  const userNameInput = document.querySelectorAll("input")[0];
  const tweetInput = document.querySelectorAll("input")[1];
  console.log(userNameInput.value);
  evt.preventDefault();
});