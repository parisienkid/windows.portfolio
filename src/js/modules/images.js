const images = () => {

    const imgagesWrapper = document.querySelector('.works'),
          popup = document.createElement('div'),
          image = document.createElement('img');

    popup.style.display = 'flex';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    popup.append(image);
    
    if (document.documentElement.clientWidth < 830) {
        image.style.width = '70%';
    }

    imgagesWrapper.addEventListener('click', (e) => {

        if (e.target && e.target.classList.contains('preview')) {
            e.preventDefault();
            document.body.style.overflow = 'hidden';
            popup.classList.add('popup');
            document.body.append(popup);
            image.setAttribute('src', e.target.parentNode.getAttribute('href'));
            popup.addEventListener('click', (e) => {
                if (e.target && e.target.classList.contains('popup')) {
                    popup.remove();
                    document.body.style.overflow = 'visible';
                }
            });
        }

    });

};

export default images;