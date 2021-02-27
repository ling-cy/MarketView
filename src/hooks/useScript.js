import { useEffect, useState } from 'react';

const useScript = (url, type, innerHTML, id, parentsId) => {

    const [debouncedText, setDebouncedText] = useState(innerHTML)

    useEffect(() => {
        const div = document.createElement('div')
        div.id = id
        document.getElementById(parentsId).appendChild(div)

        const timeoutId = setTimeout(() => {
            setDebouncedText(innerHTML);
        }, 300)

        return () => {
            clearTimeout(timeoutId);
        }
    }, [innerHTML, id, parentsId])

    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = url;
        script1.type = type;
        script1.async = true;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');

        script1.onload = () => {
            script2.type = type;
            script2.async = true;
            script2.innerHTML = debouncedText;
            document.body.appendChild(script2);
        }

        return () => {
            const panelDiv = document.getElementById(id);
            if (panelDiv !== null) {
                panelDiv.remove();
            }
        }
    }, [debouncedText, id, type, url]);
};

export default useScript;