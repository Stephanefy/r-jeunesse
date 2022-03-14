import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="contact-section pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="contact-item-wrapper">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="lni lni-phone"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Contact</h4>
                      <p>Marie Rose Ah-Moye</p>
                      <p>0692 66 77 53</p>
                      <p>marie-rose.ah-moye@laposte.net</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="contact-form-wrapper">
              <div className="row">
                <div className="col-xl-10 col-lg-8 mx-auto">
                  <div className="section-title text-center mb-50">
                    <span className="wow fadeInDown" data-wow-delay=".2s">
                      Prendre contact
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".4s">
                      Un produit vous intéresse ?
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".6s">
                      N'hésitez pas à prendre contact avec moi je me ferai un
                      plaisir de vous faire découvrir l'univers de Jeunesse
                    </p>
                  </div>
                </div>
              </div>
              <form action="assets/php/mail.php" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="votre e-mail"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Votre numéro de téléphone"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Objet"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Rédigez votre message"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="button text-center">
                      <button type="submit" className="theme-btn">
                        Envoyer
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
