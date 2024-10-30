function showMenubar(){
    const menubar = document.querySelector('.menubar')
    menubar.style.display = 'flex'
};
function hideMenubar(){
    const menubar = document.querySelector('.menubar')
    menubar.style.display = 'none'
};

document.addEventListener('DOMContentLoaded', ()=>{
    const sections = document.querySelectorAll('section');
    const fadeIn = (entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
            }
        });
        };
        const observer = new IntersectionObserver(fadeIn,{
            threshold : 0.2
        });
        sections.forEach(section=>{
            observer.observe(section)
        })
})