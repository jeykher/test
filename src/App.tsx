import { useState, useEffect } from 'react';
import AircallPhone from 'aircall-everywhere';

export const App = () => {
  const [showPhoneButton, setShowPhoneButton] = useState(false);
  const loadPhone = () => {
    setShowPhoneButton(!showPhoneButton);
    showPhoneButton
        ? console.log('Ocultando telefono')
        : console.log('Cargando telefono');
  };
  useEffect(() => {
    const aircallPhone = new AircallPhone({
      onLogin: () => {
        console.log('Telefono conectado');
      },
      onLogout: () => {
        console.log('Telefono desconectado');
      },
      domToLoadPhone: '#phone',
      size: 'big',
    });
  }, []);
  return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        position: 'relative'
      }}>
      <div 
        style={{
          display: showPhoneButton ? `` : `none`
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '3.3vw',
            top: '-5px',
            width: '0',
            height: '0',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '5px solid grey',
            border: '2px solid tomato'
          }}
        ></div>
        <div id="phone">
          telefono
        </div>
      </div>
        <button
          style={{
            padding: '1rem',
            border: 'none',
            background: showPhoneButton ? '#db5461' : '#419d78',
            borderRadius: '10px',
            color: 'white',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
          }}
          onClick={loadPhone}
        >
          {
            showPhoneButton
              ? (
                <span>
                  Desconectar el telefono
                </span>
              )
              : (
                <span>
                  Cargar el telefono
                </span>
              )
          }
        </button>
      </div>
  );
};


