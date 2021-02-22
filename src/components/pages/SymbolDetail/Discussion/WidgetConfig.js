

const dw = (value) => {
    if (value <= 100) {
        return 100;
    } if (value >= 1250) {
        return 1200;
    }
    return (value / 50).toFixed(0) * 50 - 100
}

const dh = (value) => (value / 50).toFixed(0) * 50 - 350;

const innerHTML = (isDarkMode, symb, width, height) => {
    if (isDarkMode === true) {
        return (
            `STWT.Widget({
            container: 'stocktwits-widget-news',
            symbol: '${symb}',
            width: '${dw(width)}',
            height: '${dh(height)}',
            limit: '15',
            scrollbars: 'true',
            streaming: 'true',
            header: 0,
            style: {
                link_color: '849bba',
                link_hover_color: '849bba',
                header_text_color: '000000',
                border_color: '424242',
                divider_color: '939597',
                divider_type: 'solid',
                username_color: 'f7cbd2',
                username_hover_color: 'f7cbd2',
                box_color: '424242',
                stream_color: '303030',
                text_color: 'dddddd',
                time_color: '999999',
                font: 'Roboto',
            }
        })`)
    }
    return (
        `STWT.Widget({
        container: 'stocktwits-widget-news',
        symbol: '${symb}',
        width: '${dw(width)}',
        height: '${dh(height)}',
        limit: '15',
        scrollbars: 'true',
        streaming: 'true',
        header: 0,
        style: {
            link_color: '586e8a',
            link_hover_color: '586e8a',
            header_text_color: '000000',
            border_color: 'cecece',
            divider_color: 'cecece',
            divider_type: 'solid',
            box_color: 'f5f5f5',
            stream_color: 'ffffff',
            text_color: '000000',
            time_color: '999999',
            font: 'Roboto',
        }
    })`
    )
};

export default innerHTML;
