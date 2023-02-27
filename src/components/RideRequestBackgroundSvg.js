function RideRequestBackgroundSvg(){
    return (
        <div>
            <svg width="1920" height="400">
                <polygon points="0 0, 200 0, 200 400, 0 400"
                style=
                    {{
                    fill:'black',
                    fillRule:'evenodd'
                    }} 
                />
                <polygon points="0 0, 1300 0, 1400 400, 100 400"
                style=
                    {{
                    fill:'rgba(245, 173, 23, 0.7)',
                    fillRule:'evenodd'
                    }} 
                />
                <polygon points="0 0, 1200 0, 1300 400, 100 400"
                style=
                    {{
                    fill:'#F5AD17',
                    fillRule:'evenodd'
                    }} 
                />
                <polygon points="1800 0, 1920 0, 1920 400, 1920 300"
                style=
                    {{
                    fill:'black',
                    fillRule:'evenodd'
                    }} 
                />
            </svg>
        </div>
    );
}

export default RideRequestBackgroundSvg;