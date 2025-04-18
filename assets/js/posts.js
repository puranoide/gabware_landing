const formAddPost=document.getElementById("post-form");

formAddPost.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log(formData.get("title"));
    console.log(formData.get("content"));
    console.log(formData.get("enlace"));
    console.log(formData.get("image"));

    //addPostApi(formData.get("title"), formData.get("content"), formData.get("enlace"), formData.get("image"));
    saveImageImgur("bac59c579ba9db1",formData.get("title"), formData.get("content"), formData.get("enlace"), formData.get("image"));
});

function saveImageImgur(idClient,titleB, contentB, enlaceB,imgB){

    const formData = new FormData();
    formData.append('image', imgB);

    fetch(`https://api.imgur.com/3/image`, {
        method: 'POST',
        headers: {
            Authorization: `Client-ID ${idClient}`
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        if (data.success) {
            //console.log(data);
            const urlImgGenerate=data.data.link
            addPostApi(titleB, contentB, enlaceB, urlImgGenerate);
        }
    })
    .catch(error => {
        console.log(error);
    });

}


function addPostApi(title, content, enlace, url) {
    fetch("../controllers/posts.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'addPost',
            title: title,
            content: content,
            enlace: enlace,
            imageurl:url
        })
    })
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        if (data.success) {
            console.log("respuesta :",data);
        }
    })
    .catch(error => {
        console.log(error);
    });

}

