import React from 'react';

export default function Main() {
    return (
        <div>
            {/* 1 */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                <div style={{ width: '50%' }}>
                    <p style={{ color: 'white', fontWeight: 'bold' }}> <span style={{ fontSize: '45px', wordSpacing: '50px', textTransform: 'uppercase' }}>Lorem ipsum dolor sit</span><br />
                        <span style={{ fontSize: '20px', color: 'gray' }}>amet consectetur adipisicing elit. Harum aliquam est, molestiae neque incidunt odit minus dolor natus, repellat atque recusandae repudiandae dolorum odio, ratione facilis. Explicabo reprehenderit quis quaerat</span> </p>
                </div>
            </div>
            {/* 2 */}
            <div style={{ marginTop: '-90px' }}>
                <ul class="nav justify-content-center">
                    <li class="nav-item m-2">
                        <button type="button" class="btn btn-info" style={{ fontSize: '20px', padding: '10px 20px' }}>For Free Trial</button>
                    </li>
                    <li class="nav-item m-2" >
                        <button type="button" class="btn btn-outline-light" style={{ fontSize: '20px', padding: '10px 20px' }}>Learn More</button>
                    </li>
                </ul>
            </div>
            {/* 3 */}
            <div style={{ marginTop: '100px' }}>
                <img
                    src="https://open.cruip.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image-01.1f6edd86.jpg&w=1080&q=75"
                    alt=""
                />
            </div>
            {/* 4 */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                <div style={{ width: '50%' }}>
                    <p style={{ color: 'white', fontWeight: 'bold' }}> <span style={{ fontSize: '30px', wordSpacing: '40px', textTransform: 'uppercase' }}>Lorem ipsum dolor sit <br /> neque incidunt odit minus dolor </span><br />
                        <span style={{ fontSize: '20px', color: 'gray', wordSpacing: '20px', lineHeight: '10px' }}>amet consectetur adipisicing elit. Harum aliquam est, molestiae neque incidunt odit minus dolor natus, repellat atque recusandae repudiandae dolorum odio, ratione facilis. Explicabo reprehenderit quis quaerat</span> </p>
                </div>
            </div>
            {/* 5 */}
            <div >
                <div class="card-group" >
                    <div class="card" style={{backgroundColor:'rgba(0,0,0,0)',}}>
                        <img src="" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card" style={{backgroundColor:'rgba(0,0,0,0'}}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card" style={{backgroundColor:'rgba(0,0,0,0'}}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}
