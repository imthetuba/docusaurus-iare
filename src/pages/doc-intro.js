import React from 'react';
import Layout from '@theme/Layout';

const MyPage = () => {
  // Define your data with button information
  const buttonData = [
    { id: 1, label: 'Ledamöter till Kårfullmäktige', href: 'docs/central/karfullmaktige', position: { top: '25%', left: '82%' } },
    { id: 2, label: 'Clubmästeriet', href: 'docs/event/cmi', position: { top: '75%', left: '12%' } },
    { id: 3, label: 'GenI', href: 'docs/social/geni', position: { top: '80%', left: '20%' } },
    { id: 4, label: 'Näringslivsnämnden', href: 'docs/business/businesscom', position: { top: '80%', left: '20%' } },
    { id: 5, label: 'iSkillnad', href: 'docs/projects/iskillnad', position: { top: '80%', left: '20%' } },
    { id: 6, label: 'Skyddsombud', href: 'docs/central/skyddsombud', position: { top: '80%', left: '20%' } },
    { id: 7, label: 'I-Alumni', href: 'docs/social/ialumni', position: { top: '80%', left: '20%' } },
    { id: 8, label: 'Dagen-I', href: 'docs/business/dageni', position: { top: '80%', left: '20%' } },
    { id: 9, label: 'Kravallen', href: 'docs/projects/kravallen', position: { top: '80%', left: '20%' } },
    { id: 10, label: 'Valberedningen', href: 'docs/central/valberedningen', position: { top: '80%', left: '20%' } },
    { id: 11, label: 'ESTIEM', href: 'docs/event/estiem', position: { top: '80%', left: '20%' } },
    { id: 12, label: 'Idrottsnämnden', href: 'docs/social/idrottsnamnden', position: { top: '80%', left: '20%' } },
    { id: 13, label: 'I-Case', href: 'docs/business/icase', position: { top: '80%', left: '20%' } },
    { id: 14, label: 'Seniorkollegiet', href: 'docs/projects/seniorkollegiet', position: { top: '80%', left: '20%' } },
    { id: 15, label: 'iSpexet', href: 'docs/event/ispexet', position: { top: '80%', left: '20%' } },
    { id: 16, label: 'Internationella Gruppen', href: 'docs/social/internationalgroup', position: { top: '80%', left: '20%' } },
    { id: 17, label: 'I-Start', href: 'docs/business/istart', position: { top: '80%', left: '20%' } },
    { id: 18, label: 'Mottagningen', href: 'docs/event/reception', position: { top: '80%', left: '20%' } },
    { id: 19, label: 'Portergeneral', href: 'docs/social/portergeneral', position: { top: '80%', left: '20%' } },
    { id: 20, label: 'SOFt', href: 'docs/social/soft', position: { top: '80%', left: '20%' } },
    // Add more buttons as needed
  ];

  // URL of your image
const imageUrl = require("/static/img/karta.png").default;

return (
    <div style={{ position: 'relative' }}>
      <h1>Erik det går att klicka på bilden</h1>
      <img src={imageUrl} alt="Your Image" style={{ maxWidth: '100%' }} />

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {buttonData.map((button) => (
          <a
            key={button.id}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              ...button.position,
              background: 'rgba(255, 0, 0, 0.5)', // Adjust the alpha (last) value for transparency
              padding: '10px', // Optional: Add padding for better visibility
              borderRadius: '5px', // Optional: Add border radius for rounded corners
            }}
          >
            <button style={{ background: 'transparent', border: 'none', color: '#fff' }}>{button.label}</button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyPage;