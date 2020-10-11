import React from 'react'
import TimeAgo from 'timeago-react';

import"./Preview.style.scss"
function Preview({item}) {
    return (
        <div className="Preview">
             {item.name}
<TimeAgo    
  datetime={item.uploadDate}
  locale='zh_CN'
/>
        </div>
    )
}

export default Preview
