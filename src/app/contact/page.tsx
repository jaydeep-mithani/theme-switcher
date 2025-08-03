import { ContactCard, ThemeButton } from "@/components";
import { Check, InputControl, Label } from "@/components/form";
import { contactContent, contactInfo } from "@/constants";

const Contact = () => {
  return (
    <div className="contact-page-container">
      <main>
        {/* Header Section */}
        <section className="header-content-container">
          <h1>{contactContent.title}</h1>
          {contactContent.content?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </section>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-block">
            <h2>Contact Information</h2>

            {/* Contact Cards */}
            <div>
              {contactInfo.map((info) => (
                <ContactCard
                  key={info.id}
                  title={info.title}
                  description={info.description}
                  icon={info.icon}
                  linkText={info.linkText}
                  href={info.href}
                  iconClassName={info.iconClassName}
                  linkClassName={info.linkClassName}
                />
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="form-container-outer">
            <div className="form-container-inner">
              <form className="contact-form space-y-6" action="#" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>First Name</Label>
                    <InputControl
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <InputControl
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label>Email Address</Label>
                  <InputControl
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </Label>
                  <InputControl
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Check label="I'd like to receive updates about your products and services. You can unsubscribe at any time." />

                <ThemeButton type="submit">Send Message</ThemeButton>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
