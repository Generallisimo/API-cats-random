const button = document.querySelector(".btn");
const image = document.querySelector(".img");
// API с сервера рандомных котов
const url = "http://aws.random.cat/meow";
// использывая featch запросы мы можем обращаться к серверу через разные методы тот же AJAX
// указываем что фун-ия ассинхронная, которая ждет ответ для того чтобы не получить просто promisse
async function featchHandler(){
    // используем стандартную фун-ию которая проверяет на ошибки 
    try{
        // фетч возращает промис указываем ему await и нам приходит ответ ссылкой
        const response = await fetch(url);
        // декодируем в json позволяет забрать то, что лежит в body данные то есть ссылку
        const data = await response.json()
        // теперь получаем из поиска картинку
        image.src = data.file;
        console.log(data)
    }catch{
        console.log(error);
    }
}
button.addEventListener("click",()=>{
    // сделаем проверку, чтобы нельзя было тысячу запросов за раз сделать без загрузки картинки 
    let saveRandom = image.complete;
    if (saveRandom){
        featchHandler();
    }
})