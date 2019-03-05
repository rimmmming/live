import React from 'react';

function NewsList({date, title, href, img, newsContent}){
    return(
        <li>
            <a href={href}>
                <div className="bx2"><img src={img} width="60" height="60" alt="" /></div>
                <dl>
                    <dt>
                        <time dateTime={date}></time> {title} 
                    </dt>
                    <dd>
                        <p>{newsContent}</p>
                    </dd>
                </dl>
            </a>
        </li>
    )
}

export default NewsList;