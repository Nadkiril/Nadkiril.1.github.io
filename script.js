const imagesData = [
    {photo: 'https://cdn.pixabay.com/photo/2021/01/08/21/43/hyangwonjeong-pavilion-5900902_960_720.jpg', title: 'Hyangwonjeong pavilion', description: 'Hatszögletű pavilon egy híddal átkelve a lótusz tavon, Gyeongbokgung, Korea'},
    {photo: 'https://cdn.pixabay.com/photo/2016/08/11/09/30/water-lily-1585159_960_720.jpg', title: 'Tavirózsa', description: 'A tavirózsa tápanyagban gazdag, iszapos talajú álló- vagy lassan folyó vizek lakója. Körülbelül 3 méter is lehet a vízmélység. A virágzási ideje június–szeptember között van.'},
    {photo: 'https://cdn.pixabay.com/photo/2017/11/08/08/07/gyeongbok-palace-2929520_960_720.jpg', title: 'Kjongbokkung', description: 'A Kjongbokkung Szöul öt királyi palotájának egyike, mely 1395-re készült el. nevének jelentése „A mennyek által megáldott”.'},
    {photo: 'https://cdn.pixabay.com/photo/2017/04/18/04/35/damyang-2237701_960_720.jpg', title: 'Gwangbangjerim erdő', description: 'Damyang megye Jeollanam-do megyében, Dél-Koreában. Séta a Metasequoia ösvényen '},
    {photo: 'https://cdn.pixabay.com/photo/2016/10/14/16/24/korea-1740483_960_720.jpg', title: 'Gyeongbokgung palota őrei', description: 'Naponta kétszer bepillantást nyújt a múltba, amikor a Sumunjang vagy a királyi gárda őrizte a Gyeongbokgung palota bejáratát.'},
    {photo: 'https://cdn.pixabay.com/photo/2018/07/17/03/08/tiger-3543416_960_720.jpg', title: 'Tigris és Sárkány', description: 'Legendák fesztiválja'},
    {photo: 'https://cdn.pixabay.com/photo/2018/09/09/12/42/seoul-3664487_960_720.jpg', title: 'Szerelemlakatok', description: 'Egy 23 éves amerikai nő több mint tízezer kilométert repült Los Angelesből Szöulba, hogy szakítása után elvágja azt a szerelemlakatot, amit még volt barátjával helyezett el a dél-koreai fővárosban.'},
    {photo: 'https://cdn.pixabay.com/photo/2017/10/10/11/56/korea-2836948_960_720.jpg', title: 'Han folyó', description: 'Korea. Szöul. Éjszakai neon város.'}
];

const maxImgIndex = imagesData.length - 1;

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    
    $(".box.active").removeClass("active");
    const currImg = imagesData[photoNumber];
    $('#bigPic').attr('src', currImg.photo);
    $('#title').text(currImg.title);
    $('#desc').text(currImg.description);
    $(".box[data-index=" + photoNumber + "]").addClass("active");
};

$(document).ready(() => {
    currentPhoto = 0;
    loadPhoto(currentPhoto);
    imagesData.forEach((item, index) => {
      $('#lower').append(`
      <div class = "box" data-index = "${index}" 
      style="background-image: url(${item.photo}); background-size: cover;">
      <div class = "title">${item.title}</div>
      </div>`)  
    });
    $(".box[data-index=" + currentPhoto + "]").addClass("active");
});

$('#rightBigArrow').click(() => {
    if (currentPhoto < maxImgIndex){
        currentPhoto++;
    }
    else {
      currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

$('#leftBigArrow').click(() => {
    if (currentPhoto > 0){
        currentPhoto--;
    }
    else {
        currentPhoto = maxImgIndex;
    }
    loadPhoto(currentPhoto);
});

$(document).on("click", ".box", (event) => {
    let indexClicked = $(event.target).data('index');
    loadPhoto(indexClicked);
});