import React from 'react'

export default function page() {
    return (
        <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '50%' }}>
                        <img src="https://scontent.futh1-1.fna.fbcdn.net/v/t39.30808-6/438204877_1486482015597687_6547977028918286329_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=xNyLQzZgxbQQ7kNvgHJRrAG&_nc_ht=scontent.futh1-1.fna&oh=00_AYAvojLlUnSV4Q9kUKPZC5n52BaDMX9KVNB3GLHe3VDpqw&oe=66DA5C1C" alt="" style={{ width: '512px', height: 'auto', borderRadius: '50%' }} />
                    </div>
                </div>

                <div style={{ width: '50%' }}>
                    <div className='info' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                        <h1>Hello welcome</h1>
                        <p>นางสาว จันทิมา พรมวัง รหัสนักศึกษา 653450280-1 <p></p>สาขาวิทยาการคอมพิวเตอร์เเละสารสนเทศ .</p>
                    </div>
                </div>
            </div>
    )
}
