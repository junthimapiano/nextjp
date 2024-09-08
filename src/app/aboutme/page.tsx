import React from 'react'

export default function page() {
    return (
        <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '50%' }}>
                        <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/395344249_1382208322691724_69746682364407380_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=7PoTr-xrCEIQ7kNvgHNeZW_&_nc_ht=scontent.fbkk5-4.fna&oh=00_AYAfKitEiwEfgClDhBkcvdMrJlgqZpmS6ktGmzVZphvv3Q&oe=66E3A36A" alt="" style={{ width: '512px', height: 'auto', borderRadius: '50%' }} />
                    </div>
                </div>

                <div style={{ width: '50%' }}>
                    <div className='info' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                        <h1>Hello </h1>
                        <p>นางสาว จันทิมา พรมวัง รหัสนักศึกษา 653450280-1 <p></p>สาขาวิทยาการคอมพิวเตอร์เเละสารสนเทศ </p>
                    </div>
                </div>
            </div>
    )
}
