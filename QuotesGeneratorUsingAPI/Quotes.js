const container= document.querySelector(".Quotes-Container");

const url="https://type.fit/api/quotes";

fetch(url)
.then((res)=> res.json())
.then((data)=>{
    data.forEach((item) => {
        const card=document.createElement("div");
        card.classList.add("quotes");

        card.innerHTML=`<p class="quote-text">${item.text}</p>
                        <p class="author">${item.author}</p>`
        container.appendChild(card);
    });
}).catch((e)=>{
    console.log(e)
    container.innerHTML=`Cant connect ti internet at the moment`;
});


// quote.innerText=`${data[0].text}`;
//     author.innerText=`${data[0].author}`