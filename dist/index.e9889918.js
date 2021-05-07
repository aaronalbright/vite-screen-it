import{r as e,v as t,a}from"./vendor.30762af1.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const i=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,n)=>{const r=new URL(e,i);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const o=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){n(new Error(`Failed to import: ${e}`)),l(s)},onload(){a(self[t].moduleMap[r]),l(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/");var i=[{title:"Lord of the Rings: The Two Towers",cat:"Action/Adventure",rating:5},{title:"Zoolander",cat:"Comedy",rating:5},{title:"Jurassic Park",cat:"Action/Adventure",rating:5},{title:"Tropic Thunder",cat:"Comedy",rating:4},{title:"Shutter Island",cat:"Thriller",rating:4}],l="/star.918040ac.svg";const n=["Action/Adventure","Comedy","Horror","Thriller","Romance","Historical","Drama","Sci-Fi","Western","Crime","Documentary"];function r(a){const[i,r]=e.useState(""),[o,s]=e.useState(""),[c,m]=e.useState(0);e.useEffect((()=>{1==a.editFlag.flag?(r(a.editFlag.movie.title),s(a.editFlag.movie.cat),m(a.editFlag.movie.rating)):(r(""),s(""),m(0))}),[a.editFlag]);const d=e=>{e.target.dataset.filled,m(e.target.dataset.key)};return e.createElement("div",{className:"movie-info "+(a.editFlag.flag?"movie-info--edit":"")},e.createElement("div",{className:"info__title"},e.createElement("label",{htmlFor:"movieTitle"},"Name"),e.createElement("input",{id:"movieTitle",name:"title",type:"text",value:i,placeholder:"Name of the movie",onChange:e=>r(e.target.value)})),e.createElement("div",{className:"info__cat"},e.createElement("label",{htmlFor:"movieCat"},"Category"),e.createElement("select",{className:""==o?"select select--none":"select",id:"movieCat",name:"cat",value:o,onChange:e=>s(e.target.value)},e.createElement("option",{value:"",disabled:!0},"Select a category"),n.map(((t,a)=>e.createElement("option",{key:`cat--${a}`,value:t},t))))),e.createElement("div",{className:"info__rating"},e.createElement("label",{htmlFor:"movieRating"},"Rating"),e.createElement("div",{className:"rating__stars"},[...Array(5).keys()].map((t=>t<c?e.createElement("img",{className:"rating__star star--filled",key:`star--${t}`,"data-filled":!0,"data-key":t+1,src:"/star-filled.ca8d5b8e.svg",alt:"filled star",onClick:d}):e.createElement("img",{className:"rating__star",key:`star--${t}`,"data-filled":!1,"data-key":t+1,src:l,alt:"empty star",onClick:d}))))),e.createElement("button",{className:"info__button "+(a.editFlag.flag?"info__button--edit":""),onClick:()=>{if(0==a.editFlag.flag){if(""==i||""==o||0==c)return void alert("Please completely fill in the movie information");const e={title:i,cat:o,rating:c,id:t()};a.sendEntry(e),r(""),s(""),m(0)}else{const e={title:i,cat:o,rating:c,id:a.editFlag.movie.id};a.sendEntry(e,!0)}}},a.editFlag.flag?"Update Movie":"Add Movie"))}function o({movies:t,onRemove:a,onEdit:i}){const[n,r]=e.useState(t);e.useEffect((()=>{r(t)}),[t]);return e.createElement("div",{className:"movies-list"},n.map(((t,n)=>{return e.createElement("div",{className:"movies-list__item",index:n,key:`movie--${n}`},e.createElement("div",{className:"item__icon"},""!==t.title?t.title.match(/\b(\w)/g).join("").toUpperCase().slice(0,4):""),e.createElement("div",{className:"item__title"},t.title),e.createElement("div",{className:"item__cat"},t.cat),e.createElement("div",{className:"item__rating"},(r=t.rating,[...Array(5).keys()].map((t=>t<r?e.createElement("img",{className:"rating__star star--filled",key:`star--${t}`,src:"/star-filled.ca8d5b8e.svg",alt:"filled star"}):e.createElement("img",{className:"rating__star",key:`star--${t}`,src:l,alt:"empty star"}))))),e.createElement("div",{className:"item__buttons"},e.createElement("button",{onClick:()=>a(t.id)},"Remove"),e.createElement("button",{className:"button__edit",onClick:()=>i(!0,t)},"Edit")));var r})))}for(const c of i)"id"in c||(c.id=t());function s(){const[t,a]=e.useState(i),[l,n]=e.useState({flag:!1,movie:{}});return e.createElement(e.Fragment,null,e.createElement(r,{editFlag:l,sendEntry:(e,i=!1)=>{if(i){const i=[...t],l=i.findIndex((t=>t.id==e.id));i[l]=e,a(i),n({flag:!1,movie:{}})}else console.log("Edit is false"),a([e,...t])}}),e.createElement(o,{movies:t,onRemove:e=>{a(t.filter((t=>t.id!==e)))},onEdit:(e,t)=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),n({flag:e,movie:t})}}))}a.render(e.createElement(e.StrictMode,null,e.createElement(s,null)),document.getElementById("root"));