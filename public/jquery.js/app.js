



console.log('hello')






$( () => {


    $(window).ready(()=> {
        getUser()
    
        });







let url = 'https://randomuser.me/api/?'

const getUser=()=>{
   fetch(url).then((response) => (response.json())).then((data)=>{
      const randomUser = data.results[0]
      const loginUser = randomUser.login.username

      const thumbnailImg = randomUser.picture.thumbnail


      const newDiv= $('<div>').addClass('hpost')
      newDiv.append(`   
         <div class="userTag"> <img class="tagImg"src="${thumbnailImg}"> <span class="tagImg">${loginUser}</span></div> 
      <div >
          <img class"apiImg" src="https://picsum.photos/50${Math.floor(Math.random()*5)}/50${Math.floor(Math.random()*5)}">
      </div>
      <div class"LikeShare"> 
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>  

            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
            </svg>
          
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-share" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
            </svg>
    </div>
      `
      
    )
      $("#wrap").append(newDiv)
   })
  }



    $(window).scroll(function() {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {

            getUser()
       




 
    
        }
    });










  });








