import { useState } from 'react';

const Test_2 = () => {
    const [show, toggle] = useState(false)

    return(
        <div>
            테스트 react

            <button onClick={() => toggle(p => !p)}>토글</button>
            <p>{show ? '켜짐' : '꺼짐'}</p>
        </div>
    )
}

export default Test_2;