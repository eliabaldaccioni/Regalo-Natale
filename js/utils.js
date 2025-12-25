function fitTextToBox(element, fullText) {
    element.textContent = '';
    
    const words = fullText.split(' ');
    let result = '';

    for (let i = 0; i < words.length; i++) {
        const testText = result + words[i] + ' ';
        element.textContent = testText;

        if (element.scrollHeight > element.clientHeight) {
            // supera lo spazio → fermati
            break;
        }

        result = testText;
    }

    element.textContent = result.trim();
}


