class DynamicModal{
constructor(){
this.modals=document.querySelectorAll('.fs-modal');
this.openButtons=document.querySelectorAll('[data-modal-target]');
this.closeButtons=document.querySelectorAll('[data-modal-close]');
this.init();
}
init(){
this.openButtons.forEach(btn=>{
btn.addEventListener('click',()=>{
const target=document.querySelector(btn.dataset.modalTarget);
if(target)target.classList.add('active');
});
});
this.closeButtons.forEach(btn=>{
btn.addEventListener('click',()=>{
const modal=btn.closest('.fs-modal');
if(modal)modal.classList.remove('active');
});
});
}
}
class DynamicTooltip{
constructor(){
this.triggers=document.querySelectorAll('[data-tooltip]');
this.tooltipEl=document.createElement('div');
this.tooltipEl.className='custom-tooltip';
document.body.appendChild(this.tooltipEl);
this.init();
}
init(){
this.triggers.forEach(btn=>{
btn.addEventListener('mouseenter',()=>{
const text=btn.dataset.tooltip;
const img=btn.dataset.tooltipImg;
let content=`<strong class="text-dark">${text}</strong>`;
if(img)content+=`<br><img src="${img}" alt="Tooltip">`;
this.tooltipEl.innerHTML=content;
this.tooltipEl.classList.add('active');
const rect=btn.getBoundingClientRect();
this.tooltipEl.style.top=(rect.bottom+window.scrollY+15)+'px';
this.tooltipEl.style.left=(rect.left+(rect.width/2)-(this.tooltipEl.offsetWidth/2))+'px';
});
btn.addEventListener('mouseleave',()=>{
this.tooltipEl.classList.remove('active');
});
});
}
}
class DynamicCarousel{
constructor(){
this.carousels=document.querySelectorAll('.carousel');
this.init();
}
init(){
if(typeof bootstrap!=='undefined'){
this.carousels.forEach(c=>{
new bootstrap.Carousel(c,{
interval:3000,
wrap:true
});
});
}
}
}
document.addEventListener('DOMContentLoaded',()=>{
new DynamicModal();
new DynamicTooltip();
new DynamicCarousel();
});