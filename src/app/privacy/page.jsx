import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPolicy() {
    return (
        <>
        <Navbar/>
    <section className="grid-bg">

    
      <main className="max-w-4xl mx-auto px-6 lg:px-20 py-24 space-y-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-slate-400">Last updated: {new Date().getFullYear()}</p>
  
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p className="text-slate-300">
            We collect information you provide directly to us, including your name,
            email address, phone number, business details, and project requirements
            when you submit forms on our website.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p className="text-slate-300">
            We use your information to respond to inquiries, provide services,
            improve our offerings, and communicate project updates.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Data Protection</h2>
          <p className="text-slate-300">
            We implement reasonable security measures to protect your information.
            However, no online transmission can be guaranteed 100% secure.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
          <p className="text-slate-300">
            We may use third-party services (such as hosting and email providers)
            to operate our business. These providers have their own privacy policies.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Contact Us</h2>
          <p className="text-slate-300">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <span className="text-primary">Aayush@vurizo.in</span>
          </p>
        </section>
      </main>
      </section>
      <Footer/>
      </>
    );
  }