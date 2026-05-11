"use client";

export default function ParwaazAboutCard() {
  return (
    <>
      <style jsx global>{`
        .parwaaz-section {
          padding: 80px 40px;
        }
        @media (max-width: 768px) {
          .parwaaz-section { padding: 56px 20px; }
          .parwaaz-blue-card {
            padding: 24px 22px 28px 22px !important;
            margin-left: 10px !important;
            margin-right: auto !important;
            max-width: 100% !important;
            width: 100% !important;
            height: auto !important;
            min-height: 320px !important;
          }
          .parwaaz-blue-card p { font-size: 16px !important; line-height: 1.6 !important; }
          .parwaaz-blue-card img { width: 110px !important; margin-bottom: 16px !important; }
          .parwaaz-numbered-list { font-size: 16px !important; line-height: 1.6 !important; }
        }
        @media (max-width: 480px) {
          .parwaaz-section { padding: 44px 16px; }
          .parwaaz-blue-card { padding: 22px 18px 24px 18px !important; }
          .parwaaz-blue-card p { font-size: 15px !important; }
        }
        .parwaaz-numbered-list li::marker {
          color: #000000;
          font-weight: 300;
        }
      `}</style>

      <section className="parwaaz-section w-full bg-white">
        <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-start gap-y-[34px] lg:grid-cols-[644px_1fr] lg:gap-x-0">
          <div>
            <div
              data-reveal="left"
              data-reveal-mode="cycle"
              className="relative w-full"
              style={{
                width: "100%",
                maxWidth: "644px",
                height: "180px",
                padding: "28px 32px",
                borderRadius: "16px",
                background: "#d9d9d9",
              }}
            >
              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: 800,
                  color: "#0a1970",
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  margin: 0,
                }}
              >
                Par.waaz
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#000",
                  marginTop: "4px",
                  lineHeight: 1.2,
                  fontWeight: 500,
                }}
              >
                flight or flying
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#000",
                  marginTop: "4px",
                  lineHeight: 1.2,
                  margin: "4px 0 0 0",
                }}
              >
                (پرواز)
              </p>
            </div>

            <ol
              className="parwaaz-numbered-list"
              style={{
                marginTop: "32px",
                maxWidth: "500px",
                fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: 1.7,
                letterSpacing: "0",
                color: "#000000",
                listStyle: "decimal",
                listStylePosition: "outside",
                paddingLeft: "28px",
              }}
            >
              <li
                data-reveal="up"
                data-reveal-mode="cycle"
                style={{ paddingLeft: "8px" }}
              >
                Parwaaz (پرواز) is a Persian word meaning flight — not just the physical act of flying, but the rise of spirit, the leap of ambition and uninterrupted flight.
              </li>
            </ol>
          </div>

          <div
            data-reveal="right"
            data-reveal-mode="cycle"
            data-reveal-delay="120"
            className="parwaaz-blue-card"
            style={{
              width: "100%",
              maxWidth: "423px",
              height: "400px",
              padding: "32px 32px 36px 32px",
              borderRadius: "20px",
              marginLeft: "auto",
              background: "#000572",
              alignSelf: "flex-start",
            }}
          >
            <img
              src="/parwaaz-logo.png"
              alt="Parwaaz"
              style={{
                display: "block",
                width: "160px",
                height: "auto",
                marginTop: 0,
                marginLeft: 0,
                marginBottom: "20px",
              }}
            />
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.7,
                color: "#ffffff",
                fontWeight: 300,
                margin: 0,
              }}
            >
              Parwaaz was built on a simple belief: when talent, technology, and opportunity move together, economies rise.
            </p>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.7,
                color: "#ffffff",
                fontWeight: 700,
                margin: "20px 0 0 0",
              }}
            >
              Parwaaz exists to power that journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}