const main=document.querySelector('.main');
const filmListContainer=document.querySelector('.film-list__container');


const producers=[
    {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссер, Актер, Сценарист, Монтажер',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
    },
    {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссер, Оператор, Монтажер, Актер, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
    },
    {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссер, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
    name: 'Алексей Балабанов',
    career: 'Режиссер, Сценарист, Актер, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
    },
    {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссер, Сценарист, Актер',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зеленая книга'
    },
    {
    name: 'Юрий Быков',
    career: 'Актер, Режиссер, Сценарист, Композитор, Монтажер, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
    },
    {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажер, Актер, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
    },
];

const topFilmsList = producers.map(item => {
    return item.top_rated_film;
});

filmListContainer.textContent=topFilmsList;

producers.forEach(function (item) {
    const filmmakerContainer=document.createElement('div');
    filmmakerContainer.className='filmmaker';
    main.append(filmmakerContainer);

    const filmmakerNumber=document.createElement('img');
    filmmakerNumber.className='filmmaker__number';
    filmmakerContainer.prepend(filmmakerNumber);
    filmmakerNumber.src='./assets/images/icon.png';

    const filmmakerInfo=document.createElement('div');
    filmmakerInfo.className='filmmaker__info';
    filmmakerContainer.append(filmmakerInfo);

    const filmmakerName=document.createElement('p');
    filmmakerName.className='name';
    filmmakerInfo.prepend(filmmakerName);
    filmmakerName.textContent=item.name;

    const filmmakerPosition=document.createElement('p');
    filmmakerPosition.className='position';
    filmmakerInfo.append(filmmakerPosition);
    filmmakerPosition.textContent=item.career;

    const filmmakerFilmography=document.createElement('div');
    filmmakerFilmography.className='filmography';
    filmmakerContainer.append(filmmakerFilmography);

    const filmmakerFilmographyLink=document.createElement('a');
    filmmakerFilmographyLink.className='filmography__link';
    filmmakerFilmography.append(filmmakerFilmographyLink);
    filmmakerFilmographyLink.textContent='фильмография';
    filmmakerFilmographyLink.href=item.films;

});





{/* <div class="filmmaker container--1">
<div class="filmmaker__number number--1">1</div>
<div class="filmmaker__info info--1">
    <p class="name name--1"></p>
    <p class="position position--1"></p>
</div>
<div class="filmography filmography--1"><a class="filmography__link link--1" href="">фильмография</a></div>
</div>

<div class="filmmaker container--2">
<div class="filmmaker__number number--2">2</div>
<div class="filmmaker__info info--2">
    <p class="name name--2"></p>
    <p class="position position--2"></p>
</div>
<div class="filmography filmography--2"><a class="filmography__link link--2" href="">фильмография</a></div>
</div>

<div class="filmmaker container--3">
<div class="filmmaker__number number--3">3</div>
<div class="filmmaker__info info--3">
    <p class="name name--3"></p>
    <p class="position position--3"></p>
</div>
<div class="filmography filmography--3"><a class="filmography__link link--3" href="">фильмография</a></div>
</div>

<div class="filmmaker container--4">
<div class="filmmaker__number number--4">4</div>
<div class="filmmaker__info info--4">
    <p class="name name--4"></p>
    <p class="position position--4"></p>
</div>
<div class="filmography filmography--4"><a class="filmography__link link--4" href="">фильмография</a></div>
</div>

<div class="filmmaker container--5">
<div class="filmmaker__number number--5">5</div>
<div class="filmmaker__info info--5">
    <p class="name name--5"></p>
    <p class="position position--5"></p>
</div>
<div class="filmography filmography--5"><a class="filmography__link link--5" href="">фильмография</a></div>
</div>

<div class="filmmaker container--6">
<div class="filmmaker__number number--6">6</div>
<div class="filmmaker__info info--6">
    <p class="name name--6"></p>
    <p class="position position--6"></p>
</div>
<div class="filmography filmography--6"><a class="filmography__link link--6" href="">фильмография</a></div>
</div>

<div class="filmmaker container--7">
<div class="filmmaker__number number--7">7</div>
<div class="filmmaker__info info--7">
    <p class="name name--7"></p>
    <p class="position position--7"></p>
</div>
<div class="filmography filmography--7"><a class="filmography__link link--7" href="">фильмография</a></div>
</div>

<div class="filmmaker container--8">
<div class="filmmaker__number number--8">8</div>
<div class="filmmaker__info info--8">
    <p class="name name--8"></p>
    <p class="position position--8"></p>
</div>
<div class="filmography filmography--8"><a class="filmography__link link--8" href="">фильмография</a></div>
</div> */}