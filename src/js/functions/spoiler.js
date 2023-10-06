//Робота зі спойлером =======================================================================================================================================================================================================================

export function spoiler(){
    document.addEventListener('click', function(e){
        const targetElement = e.target
        if(targetElement.closest('[data-spoller-btn]')){
            const targetSpoilerBtn = targetElement.closest('[data-spoller-btn]')
            const spoilerContainer = targetSpoilerBtn.parentElement.closest('[data-spoller-container]')
            const spoiler = targetSpoilerBtn.parentElement.closest('[data-spoller]')
            const spoilerItem = spoiler.querySelector('[data-spoller-item]')

            if(!e.target.classList.contains('_spoiler-active')){
                closeAllSpoilers()
                openSpoiler ()

            }else if(e.target.classList.contains('_spoiler-active')){
                closeSpoiler ()
                closeAllSpoilers()
            }
            function openSpoiler () {
                spoilerContainer.classList.add('_spoiler-active')
                spoiler.classList.add('_spoiler-active')
                spoilerItem.classList.add('_spoiler-active')
                e.target.classList.add('_spoiler-active')

                // spoilerItem.style.display = 'block'
            }
            //Функція закривання спойлера
            function closeSpoiler () {
                spoilerContainer.classList.remove('_spoiler-active')
                spoiler.classList.remove('_spoiler-active')
                spoilerItem.classList.remove('_spoiler-active')
                e.target.classList.remove('_spoiler-active')
                // spoilerItem.style.display = 'none'
            }

            function closeAllSpoilers (){
                if(spoilerContainer.closest('[auto-close]')){

                    spoilerContainer.classList.remove('_spoiler-active')
                    // const spoilerActive = spoilerContainer
                    const activeItem = spoilerContainer.querySelectorAll('._spoiler-active')
                    activeItem.forEach((item)=>{
                        item.classList.remove('_spoiler-active')
                        if(item.closest('[data-spoller-item]')){
                            //Дії зі
                            // item.style.display = 'none'
                        }
                    })
                }
            }
        }
        if(!targetElement.closest('[data-spoller-container]')){
            const closeOutsideContainers = document.querySelectorAll('[close-outside]')
            closeOutsideContainers.forEach((container)=>{
                const activeItem = container.querySelectorAll('._spoiler-active')
                activeItem.forEach((item)=>{
                    item.classList.remove('_spoiler-active')
                })
            })
        }
    })
}
