document.forms['newTask']['submit'].addEventListener('click', (event) => {
    event.preventDefault();

    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    h4.textContent = document.forms['newTask']['name'].value.trim();
    p.textContent = document.forms['newTask']['description'].value.trim();
    li.append(h4);
    li.append(p);
    document.getElementById('pending-tasks').children[1].append(li);
    document.forms['newTask']['name'].value = '';
    document.forms['newTask']['description'].value = '';
});

document.getElementById('pending-tasks').children[1].addEventListener('click', (event) => {
    let content = null;
    if (event.path[0].nodeName == 'LI') {
        content = event.path[0].children[0] ? event.path[0].children[0].textContent : event.path[0].textContent;
        event.path[0].remove();
    } else if (event.path[1].nodeName == 'LI') {
        content = event.path[1].children[0] ? event.path[1].children[0].textContent : event.path[1].textContent;
        event.path[1].remove();
    }
    if (content) {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        h4.textContent = content;
        li.append(h4);
        document.getElementById('right-section').children[1].append(li);
    }
});

document.getElementById('right-section').children[1].addEventListener('click', (event) => {
    event.path[1].localName == 'li' ? event.path[1].remove() : null;
});
