import Image from 'next/image';
import React from 'react';

function VideoSection() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '774px', margin: 'auto', padding: '70px 0' }}>
      <video 
        style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} 
        // controls 
        poster="/images/Rectangle-6.png"
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
          textAlign: 'center',
        }}
      >
        <Image src={'/images/Group-11.png'} alt='image' width={78} height={78}/>
        <h3 style={{color:"#FFFFFF", fontSize:"32px", fontWeight:"600",lineHeight:"42px" ,marginBottom:"10px"}}>WELCOME TO THE MOTORS WORLD</h3>
        <p style={{color:"#FFFFFF", fontSize:"16px", fontWeight:"400",lineHeight:"28px" }}>
        Praesent consequat pharetra commodo. Vestibulum nec <br/>
        lectus nibh. Curabitur tellus leo, euismod sit amet gravida at,<br/>
        egestas sed lectus.
        </p>
      </div>
    </div>
  );
}

export default VideoSection;
