"use strict";
// // Minimal interactivity for tabs, chips, and rating output
// (function(){
//   const $ = (q,ctx=document)=>ctx.querySelector(q);
//   const $$ = (q,ctx=document)=>Array.from(ctx.querySelectorAll(q));

//   // Tabs: Trending Now
//   const tabButtons = $$('.chip--tab');
//   tabButtons.forEach(btn=>btn.addEventListener('click',()=>{
//     tabButtons.forEach(b=>b.classList.remove('is-active'));
//     btn.classList.add('is-active');
//     // Placeholder: in real app, fetch different datasets
//   }));

//   // Filter chips toggle
//   $$('.chip').forEach(chip=>{
//     chip.addEventListener('click',()=>{
//       chip.classList.toggle('is-active');
//     });
//   });

//   // Rating slider output
//   const range = $('#ratingRange');
//   const out = $('#ratingOut');
//   if(range && out){
//     const set = v=> out.textContent = Number(v).toFixed(1);
//     range.addEventListener('input', e=> set(e.target.value));
//     set(range.value);
//   }

//   // Keyboard scroll for rails
//   $$('.rail').forEach(rail=>{
//     rail.addEventListener('wheel', (e)=>{
//       if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
//         rail.scrollLeft += e.deltaY; e.preventDefault();
//       }
//     }, {passive:false});
//   });
// })();

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' ;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzI4N2Q0ZjA2MWMwMDgyN2FmMjE1NWNmNTEwZDJmYiIsIm5iZiI6MTc2Mjc3NjcxMy41ODQsInN1YiI6IjY5MTFkNjg5NGVmNzJiNjEyZTMxYjNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hp4VH8EGW56bf_SqMPFubv9JRMXejo4wSH-Rc3DJEl4",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const favorite_tv = document.querySelector("#favorites");
    console.log(favorite_tv);

    data.results.forEach((movie) => {
      console.log( movie);
      favorite_tv.innerHTML += `
      <div class="section__header">
        <h2 class="section__title">Favorites</h2>
      </div>
      <div class="grid">
        <article class="tile"><div class="tile__img"; > <img src =https://api.themoviedb.org/${movie.backdrop_path}></div><h3 class="tile__title">${movie.original_title}</h3><p class="tile__meta">2018 • ★ 6.6</p></article>
      `;
    });
  });

// "results": [
//   {
//     "adult": false,
//     "backdrop_path": "/bsNm9z2TJfe0WO3RedPGWQ8mG1X.jpg",
//     "genre_ids": [
//       18,
//       80
//     ],
//     "id": 1396,
//     "origin_country": [
//       "US"
//     ],
//     "original_language": "en",
//     "original_name": "Breaking Bad",
//     "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
//     "popularity": 292.904,
//     "poster_path": "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
//     "first_air_date": "2008-01-20",
//     "name": "Breaking Bad",
//     "vote_average": 8.878,
//     "vote_count": 11548
//   },
