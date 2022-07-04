const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "is_liked" : true,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "is_liked" : false,
        "created": "2022-06-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "is_liked" : true,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "is_liked" : false,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Stefano Tortellini",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
         "is_liked" : false,
        "created": "2022-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=536",
        "author": {
            "name": "Luigia Micca",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 95,
         "is_liked" : true,
        "created": "2022-02-02"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=531",
        "author": {
            "name": "Grace Hunterdan",
            "image": "https://unsplash.it/300/300?image=59"
        },
        "likes": 95,
         "is_liked" : false,
        "created": "2022-02-01"
    },
    {
        "id": 8,
        "content": "Ao! Che nun ce lo sai che io so l'unico post scritto in romanesco de tutta sta lista autogenerata! Dico e scrivo nummeri da quanno so nato, ce manca pure che me faccio un post autogennerato!",
        "media": "https://unsplash.it/600/400?image=554",
        "author": {
            "name": "Mario Di Nio",
            "image": "null"
        },
        "likes": 95,
         "is_liked" : true,
        "created": "2021-12-11"
    }
];

// Convert creation data of each post into Italian format
posts.forEach((element) => {
    element.created = convertDateToItalianFormat(element.created);
})



// Create the container element and append a post card element for each post in the object data array
const postListContainer = document.getElementById("container");

posts.forEach((element) => {
    createPost(element);
})


function createPost (postData){

    const {id, content, media, author, likes, created, is_liked} = postData;

    const postCard = createElementWithClasses("div", "post");

    // POST HEADER
    const postHeader = createElementWithClasses("div", "post__header");

    let avatar = ""; // Avatar placeholder if an image is not available
    if (author.image === "null" || author.image === null){
        const authorNameFirstLetter = author.name.split(" ")[0].charAt(0);
        const authorSurnameFirstLetter = author.name.split(" ")[1].charAt(0);
        avatar = `<div class="profile-pic-default"><span>${authorNameFirstLetter + authorSurnameFirstLetter}</span></div>`;
    } else {
        avatar =`<img class="profile-pic" src=${author.image} alt="${author.name}">`;
    }

    const postDateDifference = getMonthsDifference(created);

    postHeader.innerHTML =
    `
    <div class="post-meta">
    <div class="post-meta__icon">
        ${avatar}
    </div>
    <div class="post-meta__data">
        <div class="post-meta__author">${author.name}</div>
        <div class="post-meta__time">${(postDateDifference === 1 ? `${postDateDifference} mese fa` : `${postDateDifference} mesi fa`)}</div> 
    </div>
    </div>
    `;



    // POST BODY
    const postText = createElementWithClasses("div", "post__text");
    postText.innerHTML = content;

    const postImage = createElementWithClasses("div", "post__image");
    postImage.innerHTML = `<img src=${media} alt=""></div>`



    // POST FOOTER
    const postFooter = createElementWithClasses("div", "post__footer");

    const likesSection = createElementWithClasses("div", "likes", "js-likes");
    const likeButton = createElementWithClasses("a", "like-button", "js-like-button");

    if (is_liked){
        likeButton.classList.add("like-button--liked");
    }

    likeButton.setAttribute("href", "#");
    likeButton.setAttribute("data-postid", id);
    likeButton.innerHTML = `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>`;
    
    const likesCounter = createElementWithClasses("div", "likes__counter");
    likesCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${postData.likes}</b> persone`

    // If the post is not already liked, change the button color and increment the likes counter by one. Viceversa, do the opposite.
    likeButton.addEventListener("click", function(e){
        e.preventDefault();
        if(likeButton.classList.contains("like-button--liked") == false){
            likeButton.classList.add("like-button--liked");
            likes++;
        } else {
            likeButton.classList.remove("like-button--liked");
            likes--;
        }
        likesCounter.innerHTML = `Piace a <b id="like-counter-${id}" class="js-likes-counter">${postData.likes}</b> persone`;

    })


    likesSection.append(likeButton, likesCounter);
    postFooter.append(likesSection);

    postCard.append(postHeader, postText, postImage, postFooter);
    postListContainer.append(postCard);


}

function createElementWithClasses(elementType, ...elementClasses){
    const newElement = document.createElement(elementType);
    elementClasses.forEach((element) => {
        newElement.classList.add(element)
    })
    return newElement
}


function convertDateToItalianFormat (originalDate){
    const splittedDate = originalDate.split("-");
    const formattedDate = splittedDate[2] + "/" + splittedDate[1] + "/" + splittedDate[0];
    return formattedDate
}


function getMonthsDifference (pastDate){
    // !FIXME Attualmente non gestisce differenze di mese > 12 (es. se TODAY 07/2023 e post 06/2022 la differenza è 1 mese)
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const postDateMonth = parseInt(pastDate.split("/")[1]);
    let dateDifference = currentMonth - postDateMonth;

    return (dateDifference < 1) ? dateDifference += 12 : dateDifference;
}



