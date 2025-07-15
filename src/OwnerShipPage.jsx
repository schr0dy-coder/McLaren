import React from 'react';

const OwnerShipPage = () => {
  return (
    <div style={{
      fontFamily: '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Inter", sans-serif',
      background: '#0a0a0a',
      color: 'white',
      minHeight: '100vh',
      lineHeight: '1.5',
      fontWeight: '400'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '120px 20px 80px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        borderBottom: '1px solid #404040'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #ff4500 0%, #ff6b33 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          McLaren Ownership
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#aeaeb2',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Experience the pinnacle of automotive excellence with exclusive McLaren ownership benefits and services.
        </p>
      </section>

      {/* Ownership Benefits */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '60px',
          color: '#ff4500'
        }}>
          Ownership Benefits
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          <div style={{
            background: 'rgba(15, 15, 15, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ff6b33'
            }}>
              Exclusive Service Network
            </h3>
            <p style={{
              color: '#aeaeb2',
              lineHeight: '1.6'
            }}>
              Access to our global network of authorized McLaren service centers, staffed by factory-trained technicians using genuine McLaren parts.
            </p>
          </div>

          <div style={{
            background: 'rgba(15, 15, 15, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ff6b33'
            }}>
              McLaren Track Experience
            </h3>
            <p style={{
              color: '#aeaeb2',
              lineHeight: '1.6'
            }}>
              Exclusive invitations to McLaren track days, driving experiences, and technical briefings with our engineering team.
            </p>
          </div>

          <div style={{
            background: 'rgba(15, 15, 15, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ff6b33'
            }}>
              Personalization Program
            </h3>
            <p style={{
              color: '#aeaeb2',
              lineHeight: '1.6'
            }}>
              Work with our design team to create a truly unique McLaren through our bespoke personalization program.
            </p>
          </div>

          <div style={{
            background: 'rgba(15, 15, 15, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ff6b33'
            }}>
              Concierge Services
            </h3>
            <p style={{
              color: '#aeaeb2',
              lineHeight: '1.6'
            }}>
              24/7 concierge support for service appointments, parts ordering, and technical assistance wherever you are.
            </p>
          </div>

          <div style={{
            background: 'rgba(15, 15, 15, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ff6b33'
            }}>
              Exclusive Events
            </h3>
            <p style={{
              color: '#aeaeb2',
              lineHeight: '1.6'
            }}>
              Priority access to McLaren events, new model launches, and exclusive gatherings with fellow McLaren owners.
            </p>
          </div>

          <div style={{
            background: 'rgba(15, 15, 15, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#ff6b33'
            }}>
              Warranty & Protection
            </h3>
            <p style={{
              color: '#aeaeb2',
              lineHeight: '1.6'
            }}>
              Comprehensive warranty coverage and extended protection plans to ensure your McLaren performs at its peak.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        textAlign: 'center',
        borderTop: '1px solid #404040'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          marginBottom: '20px',
          color: '#ff4500'
        }}>
          Ready to Experience McLaren?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#aeaeb2',
          maxWidth: '500px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Contact our team to learn more about McLaren ownership and begin your journey.
        </p>
        <button style={{
          background: 'linear-gradient(135deg, #ff4500 0%, #ff6b33 100%)',
          color: 'white',
          padding: '15px 40px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
          boxShadow: '0 4px 20px rgba(255, 69, 0, 0.3)'
        }}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default OwnerShipPage;