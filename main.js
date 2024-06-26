const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 const tabs = document.querySelectorAll('.tab_btn');
 const all_content = document.querySelectorAll('.contant');

 tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
        // var line=document.querySelector('.line');
        // line.style.width = e.target.offsetwidth + "px";
        // line.style.left = e.target.offsetleft + "px";
        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');
    });
 });