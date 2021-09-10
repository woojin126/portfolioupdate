
//Navbar 를 스크롤에 따라 위로가면 투명하게 아래로내리면 핑크색
const navbar = document.querySelector("#Navbar");
const navbarheight = navbar.getBoundingClientRect().height;
//메뉴 선택시 그위치로 자동 스크롤링
const navbarMenu = document.querySelector("#navbar__menu");
const li = navbarMenu.childNodes;
//home 구간  Contact me 클릭시 이동.
const contactMe = document.querySelector(".home__contact");
//home 구간 FADE IN
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
//arrow-up button 조작
const upBtn = document.querySelector(".arrow-up");
//filtering button
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll('.project');

function scrollIntoView(selector){
    
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"}); 
}

function ScrollContactMe(){
    contactMe.addEventListener('click',(event)=>{
        target = event.target;
        id = target.dataset.id;

        scrollIntoView(id);
    });
}
function ScrollMenu(){
 
   /*  console.log(li); 
    for(let i=0;i<li.length;i++){

        li[i].addEventListener('click',(event)=>{ //event사용 안하고.  
           const hi = li[i].id;
        
           const select = document.querySelector(hi);
           select.scrollIntoView();
  

        }) ;
       
    } */

   
     navbarMenu.addEventListener('click',(event)=>{
       const target = event.target;
        const id = target.dataset.id;
       
        if(id === null)
            return;
       
            scrollIntoView(id);
    }); 
    }


function NavBarScroll(){
    window.addEventListener('scroll',() =>{
        if(window.scrollY > navbarheight)
        navbar.classList.add('navbar--dark');
       else
       navbar.classList.remove('navbar--dark')
     });
}

function NavBarFadeIn(){
    window.addEventListener('scroll',()=>{
    
        home.style.opacity = 1 - scrollY/homeHeight;     
        
    });
}
function ScrollUpButtonVisible(){
    
    document.addEventListener('scroll',()=>{
        if(window.scrollY > homeHeight/2){        
           upBtn.classList.add('visible');
        }else{           
            upBtn.classList.remove('visible');
        }

    });
}

function ArrowUp(){
    upBtn.addEventListener('click',()=>{
        return scrollIntoView("#home")
        //window.scrollTo(0,0);
        //다른방법 window.scroll
      
    });
}

function CategoryFilter(){
    workBtnContainer.addEventListener('click',(event)=>{
        const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
        if(filter ==null){
            return;
        }
        projectContainer.classList.add('anim-out');
       
        setTimeout(()=>{ //0.3초뒤에 위에블록을 실행해
            projects.forEach((project)=>{ 
                if(filter==='*' || filter === project.dataset.type){
                    project.classList.remove('invisible');
    
                }else{
                    project.classList.add('invisible');
                } 
            }); 
            projectContainer.classList.remove('anim-out');
        },300);
    });
}
function init(){
    NavBarScroll();
    ScrollMenu();
    ScrollContactMe();
    NavBarFadeIn();
    ScrollUpButtonVisible();
    ArrowUp();
    CategoryFilter();
}

init();