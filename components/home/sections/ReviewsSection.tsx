"use client";

type Review = {

  quote: string;

  name: string;

  city: string;

  avatarGradient: string;

};

const reviews: Review[] = [

  {

    quote:

      "I kept asking people to repeat themselves, especially during family conversations. The audiologist explained my hearing report clearly and helped me try an option that felt comfortable. I can follow conversations much better now.",

    name: "Ramesh Sharma",

    city: "Delhi",

    avatarGradient: "linear-gradient(135deg, #7aa6c7 0%, #d7b48c 100%)",

  },

  {

    quote:

      "We booked a visit for my mother after noticing she was avoiding calls and group discussions. The process was calm, practical, and not rushed. The fitting and follow-up support made a big difference to her confidence.",

    name: "Sunita Verma",

    city: "Mumbai",

    avatarGradient: "linear-gradient(135deg, #d8d8d8 0%, #f4f4f4 100%)",

  },

  {

    quote:

      "My earlier device never felt quite right, so I visited Sound for Life for guidance. They checked the fitting, adjusted the sound, and explained daily care properly. The clarity is better now and the device feels much easier to use.",

    name: "K. Subramanian",

    city: "Chennai",

    avatarGradient: "linear-gradient(135deg, #2d1e42 0%, #f1a06f 100%)",

  },

];

function Stars() {

  return (

    <div className="sfl-reviews-stars" aria-label="5 star review">

      <span>★</span>

      <span>★</span>

      <span>★</span>

      <span>★</span>

      <span>★</span>

    </div>

  );

}

export default function ReviewsSection() {

  return (

    <>

      <style>{`

        .sfl-reviews-section {

          padding: 92px 0;

          background: linear-gradient(180deg, #ffffff 0%, #f8fbfe 100%);

        }

        .sfl-reviews-container {

          width: 100%;

          max-width: 1240px;

          margin: 0 auto;

          padding: 0 24px;

        }

        .sfl-reviews-header {

          max-width: 860px;

          margin: 0 auto 38px;

          text-align: center;

        }

        .sfl-reviews-kicker {

          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 14px;

          color: #f4831f;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 0.14em;

          text-transform: uppercase;

        }

        .sfl-reviews-kicker::before {

          content: "";

          width: 22px;

          height: 2px;

          background: rgba(244, 131, 31, 0.45);

        }

        .sfl-reviews-title {

          margin: 0;

          color: #0d3b7d;

          font-size: 56px;

          line-height: 1.02;

          letter-spacing: -0.045em;

        }

        .sfl-reviews-subtitle {

          margin: 16px auto 0;

          max-width: 760px;

          color: #5f7083;

          font-size: 18px;

          line-height: 1.8;

        }

        .sfl-reviews-grid {

          display: grid;

          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 22px;

        }

        .sfl-review-card {

          padding: 28px;

          border-radius: 26px;

          background: #ffffff;

          border: 1px solid rgba(13, 59, 125, 0.10);

          box-shadow: 0 16px 36px rgba(13, 59, 125, 0.06);

          transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;

        }

        .sfl-review-card:hover {

          transform: translateY(-6px);

          box-shadow: 0 24px 48px rgba(13, 59, 125, 0.10);

          border-color: rgba(13, 59, 125, 0.16);

        }

        .sfl-reviews-stars {

          display: flex;

          gap: 3px;

          color: #f4b400;

          font-size: 21px;

          line-height: 1;

        }

        .sfl-review-quote {

          margin: 24px 0 22px;

          color: #5f7083;

          font-size: 16px;

          font-style: italic;

          line-height: 1.9;

          min-height: 152px;

        }

        .sfl-review-divider {

          height: 1px;

          background: rgba(13, 59, 125, 0.10);

        }

        .sfl-review-person {

          margin-top: 18px;

          display: flex;

          align-items: center;

          gap: 14px;

        }

        .sfl-review-avatar {

          width: 52px;

          height: 52px;

          border-radius: 999px;

          flex-shrink: 0;

          background-size: cover;

          background-position: center;

          border: 1px solid rgba(13, 59, 125, 0.08);

          box-shadow: 0 8px 18px rgba(13, 59, 125, 0.08);

        }

        .sfl-review-name {

          margin: 0;

          color: #223548;

          font-size: 16px;

          font-weight: 800;

          line-height: 1.4;

        }

        .sfl-review-city {

          margin-top: 4px;

          color: #7a8898;

          font-size: 14px;

          line-height: 1.5;

        }

        @media (max-width: 1100px) {

          .sfl-reviews-grid {

            grid-template-columns: 1fr;

          }

          .sfl-reviews-title {

            font-size: 42px;

          }

          .sfl-review-quote {

            min-height: unset;

          }

        }

        @media (max-width: 767px) {

          .sfl-reviews-section {

            padding: 64px 0;

          }

          .sfl-reviews-container {

            padding: 0 16px;

          }

          .sfl-reviews-title {

            font-size: 32px;

          }

          .sfl-reviews-subtitle {

            font-size: 15px;

          }

          .sfl-review-card {

            padding: 22px;

            border-radius: 20px;

          }

          .sfl-review-quote {

            font-size: 15px;

            line-height: 1.8;

          }

        }

      `}</style>

      <section className="sfl-reviews-section">

        <div className="sfl-reviews-container">

          <div className="sfl-reviews-header">

            <div className="sfl-reviews-kicker">Success Stories</div>

            <h2 className="sfl-reviews-title">

              Their lives changed.

              <br />

              Yours can too.

            </h2>

            <p className="sfl-reviews-subtitle">

              Real experiences from people and families who got clarity, support, and better hearing with Sound for Life.

            </p>

          </div>

          <div className="sfl-reviews-grid">

            {reviews.map((review) => (

              <article key={review.name} className="sfl-review-card">

                <Stars />

                <p className="sfl-review-quote">“{review.quote}”</p>

                <div className="sfl-review-divider" />

                <div className="sfl-review-person">

                  <div

                    className="sfl-review-avatar"

                    style={{ background: review.avatarGradient }}

                    aria-hidden="true"

                  />

                  <div>

                    <p className="sfl-review-name">{review.name}</p>

                    <div className="sfl-review-city">{review.city}</div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </>

  );

}