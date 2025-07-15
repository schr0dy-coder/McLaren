import React from 'react';

const AboutPage = () => {
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
          About McLaren
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#aeaeb2',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Racing heritage meets cutting-edge innovation in every McLaren we create.
        </p>
      </section>

      {/* Story Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              marginBottom: '30px',
              color: '#ff4500'
            }}>
              Our Story
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#aeaeb2',
              lineHeight: '1.7',
              marginBottom: '25px'
            }}>
              Founded in 1963 by Bruce McLaren, McLaren has been at the forefront of automotive excellence for over six decades. What started as a racing team has evolved into a legendary marque synonymous with innovation, performance, and uncompromising quality.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#aeaeb2',
              lineHeight: '1.7'
            }}>
              From our Formula 1 success to our road car division, every McLaren embodies the racing DNA that has made us one of the most successful teams in motorsport history.
            </p>
          </div>
          
          <div style={{
            background: 'rgba(15, 15, 15, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '40px',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#ff6b33',
              marginBottom: '10px'
            }}>
              60+
            </h3>
            <p style={{
              fontSize: '1.2rem',
              color: '#aeaeb2',
              marginBottom: '30px'
            }}>
              Years of Innovation
            </p>
            <h3 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#ff6b33',
              marginBottom: '10px'
            }}>
              183
            </h3>
            <p style={{
              fontSize: '1.2rem',
              color: '#aeaeb2'
            }}>
              Grand Prix Victories
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        borderTop: '1px solid #404040',
        borderBottom: '1px solid #404040'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#ff4500'
          }}>
            Our Values
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#ff6b33'
              }}>
                Excellence
              </h3>
              <p style={{
                color: '#aeaeb2',
                lineHeight: '1.6'
              }}>
                We pursue perfection in every detail, from the drawing board to the racetrack, ensuring that every McLaren represents the pinnacle of automotive achievement.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#ff6b33'
              }}>
                Innovation
              </h3>
              <p style={{
                color: '#aeaeb2',
                lineHeight: '1.6'
              }}>
                Pushing boundaries is in our DNA. We constantly challenge conventional thinking to create revolutionary technologies that define the future of performance.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#ff6b33'
              }}>
                Integrity
              </h3>
              <p style={{
                color: '#aeaeb2',
                lineHeight: '1.6'
              }}>
                Our commitment to honesty, transparency, and ethical practices forms the foundation of everything we do, from our relationships to our racing heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div style={{
            background: 'rgba(15, 15, 15, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '40px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '600',
              marginBottom: '25px',
              color: '#ff6b33',
              textAlign: 'center'
            }}>
              Our Mission
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: '#aeaeb2',
              lineHeight: '1.7',
              textAlign: 'center'
            }}>
              "To create the world's finest supercars and continue our racing legacy while inspiring the next generation of automotive enthusiasts."
            </p>
          </div>

          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              marginBottom: '30px',
              color: '#ff4500'
            }}>
              The Future
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#aeaeb2',
              lineHeight: '1.7',
              marginBottom: '25px'
            }}>
              As we advance into the future, McLaren continues to lead the automotive industry with groundbreaking technologies, sustainable innovation, and an unwavering commitment to performance excellence.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#aeaeb2',
              lineHeight: '1.7'
            }}>
              Every McLaren we create today carries the legacy of our racing heritage while embracing the innovations that will define tomorrow's automotive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          Join the McLaren Legacy
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#aeaeb2',
          maxWidth: '500px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Experience the passion, precision, and performance that defines McLaren.
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
          Explore Our Models
        </button>
      </section>
    </div>
  );
};

export default AboutPage;