const storyList = document.querySelector('ul');

let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=a9d5d5470b5e47a59df5a3ff6159d704";
fetch(url).then(r=>{
  return r.json();
})
.then(jsonData => {

  let theArticles=jsonData.articles;

  theArticles.forEach(story=>{

    let storyHeadline =document.createElement('li');

    storyHeadline.innerHTML='<a href="' + story.url+'">"' + story.title+'"'+"</a>";

    storyList.appendChild(storyHeadline);

   });
})
.catch(e => {
    console.log(`An error occurred: ${e}`);
});
